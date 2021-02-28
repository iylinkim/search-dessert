const TEMPLATE = '<input type="text">';

class SearchInput {
  $loading = false;

  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    const $loadingText = document.createElement("p");
    $loadingText.innerText = `Loading...`;
    $loadingText.className = "loadingText";
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.value = "고양이"; //테스트 위한 코드

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        $loadingText.style.display = "block";
        $target.appendChild($loadingText);
        try {
          onSearch(e.target.value);
        } catch (e) {
          console.log("error message:" + e);
        }
      }
    });

    // onSearch("고양이"); //테스트위한코드
    this.render();
  }
  render() {}
}
