import Store from "./Store.js";

export default class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  store = new Store();

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  loadCats() {
    const $loadingText = document.querySelector(".loadingText");

    if ($loadingText) {
      $loadingText.style.display = "none";
    }

    if (this.data.length > 0) {
      this.store.setData("cats", this.data);
      this.$searchResult.innerHTML = this.data
        .map(
          (cat) => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
        )
        .join("");
    } else if (this.data.length === 0) {
      this.$searchResult.innerHTML = `
        <p>
        Can't find results. Please try another keyword.
        </p>
      `;
    }
  }

  infiniteScroll() {
    window.addEventListener("scroll", () => {
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
      } = document.documentElement;
      if (scrollTop + clientHeight > scrollHeight - 5) {
        // setTimeout(this.getContents, 2000);
        this.getContents();
      }
    });
  }

  getContents() {
    const contents = document.createElement("div");
    contents.innerHTML = this.data.map(
      (cat) => `
        <div>
            <img src=${cat.url} alt=${cat.name} />
        </div>
          `
    );
    this.$searchResult.append(contents);
    // $container.append()
  }

  render() {
    this.loadCats();

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });

      //tooltip 기능
      $item.addEventListener("mouseover", (event) => {
        const $tooltip = document.querySelector(".tooltip");
        // $tooltip.innerText = this.data[index].name;
        $tooltip.style.left = `${event.pageX}px`;
        $tooltip.style.top = `${event.pageY}px`;
      });
    });
  }
}
