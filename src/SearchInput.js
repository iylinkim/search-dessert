import Store from "./Store.js";

const TEMPLATE = '<input type="text">';

export default class SearchInput {
  $loading = false;
  store = new Store();
  $keywords = this.store.getData("keywords") || [];
  $keywordsBox;

  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    const $loadingText = document.createElement("p");
    $loadingText.innerText = `Loading...`;
    $loadingText.className = "loadingText";
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    this.$keywordsBox = document.createElement("ul");

    $searchInput.className = "SearchInput";
    $target.appendChild(this.$keywordsBox);
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      console.log(this.store.getData("keywords"))
      const {
        target: { value },
      } = e;
      if (e.keyCode === 13) {
        $loadingText.style.display = "block";
        $target.appendChild($loadingText);

        this.$keywords.push(value);
        this.store.setData("keywords", this.$keywords);
        onSearch(value);
      }
      
    });
    

    onSearch("고양이");
    this.render();
  }
  render() {
    const ls_keywords = this.store.getData("keywords");
    if (ls_keywords !== null) {
      this.$keywordsBox.innerHTML = ls_keywords
        .map((text) => {
          return `
          <li>${text}</li>
        `;
        })
        .join("");
    }
  }
}
