class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  $LS_CATS = "";
  $cats = "";

  constructor({ $target, initialData, onClick }) {
    // const $container = document.getElementsById("App");
    
    this.$LS_CATS = "cats";
    this.$cats = window.localStorage.getItem(this.$LS_CATS);
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

  saveCats() {
    window.localStorage.setItem(this.$LS_CATS, JSON.stringify(this.data));
  }

  loadCats() {
    const $loadingText = document.querySelector(".loadingText");
    if($loadingText){$loadingText.style.display = "none";}
    if (this.data !== undefined) {
      this.$searchResult.innerHTML = this.data
        .map(
          (cat) => `
            <div class="item">
              <img src=${cat.url} alt=${cat.name} />
            </div>
          `
        )
        .join("");
    } else {
      this.$searchResult.innerHTML = `<p>No result</p>`;
    }
  }

  ls_loadCats() {
    //localStorage로부터 데이터 로드
    const $parsedCats = JSON.parse(this.$cats);
    this.$searchResult.innerHTML = $parsedCats
      .map(
        (cat) => `
          <div class="item">
          <img src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
      .join("");
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
    this.infiniteScroll();
    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data[index]);
      });

      $item.addEventListener("mouseover", (event) => {
        const $tooltip = document.querySelector(".tooltip");
        // $tooltip.innerText = this.data[index].name;
        // $tooltip.style.left = event.clientX + "px";
        // $tooltip.style.top = event.clientY + "px";

        // console.dir(event.currentTarget);
      });
    });
  }
}
