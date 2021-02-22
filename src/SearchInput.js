const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, getRandom }) {
    const $searchInput = document.createElement("input");
    const $randomBtn = document.createElement("button");
    const $randomList = document.createElement("ul");
    const $randomListWrap = document.createElement("div");
    $randomListWrap.innerText = "Random Cats";
    $randomListWrap.className = "randomWrap";
    $randomList.className = "randomCats";
    $randomBtn.innerText = "랜덤 고양이 보기";

    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.value = "고양이"; //테스트 위한 코드

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);
    $target.appendChild($randomBtn);
    $randomListWrap.appendChild($randomList);
    $target.appendChild($randomListWrap);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        console.log(onSearch(e.target.value));
        onSearch(e.target.value);
      }
    });

    $randomBtn.addEventListener("click", async () => {
      let $randomCats;
      await getRandom().then((result) => ($randomCats = result));
      if ($randomCats) {
        $randomList.innerHTML = $randomCats
          .map((cat) => {
            return `<li class="randomCat">
          <img src=${cat.url} alt=${cat.name}/>
        </li>`;
          })
          .join("");
      }
    });
    onSearch("고양이"); //테스트위한코드
    console.log("SearchInput created.", this);
  }
  render() {
  }
}
