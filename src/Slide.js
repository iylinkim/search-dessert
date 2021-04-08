export default class Slide {
  $randomList;
  $randomCats;
  $btn = document.querySelectorAll(".js-btn");

  constructor({ $target, getRandom }) {
    const $randomBtn = document.createElement("button");
    $randomBtn.innerText = "랜덤 고양이 보기";

    const $randomListWrap = document.createElement("div");
    $randomListWrap.innerHTML = `
      <div class="btns">
        <p class="btn clicked"></p>
        <p class="btn"></p>
        <p class="btn"></p>
        <p class="btn"></p>
      </div>
    `;
    this.$randomList = document.createElement("ul");
    $randomListWrap.className = "randomWrap";
    this.$randomList.className = "randomCats";
    $randomListWrap.appendChild(this.$randomList);

    $target.prepend($randomBtn);
    $target.prepend($randomListWrap);

    $randomBtn.addEventListener("click", async () => {
      $randomListWrap.style.display = "block";

      await getRandom().then(
        (result) => (this.$randomCats = result.slice(0, 16))
      );
      this.$randomList.style.width = `${this.$randomCats.length * 25}%`;

      if (this.$randomCats) {
        this.$randomList.innerHTML = this.$randomCats
          .map((cat) => {
            return `<li class="randomCat">
          <img src=${cat.url} alt=${cat.name}/>
        </li>`;
          })
          .join("");
      }
    });
    this.render();
  }

  render() {
    const moveSlide = (event) => {
      btnGroup.forEach(btn => btn.classList.remove("clicked"))
      const { target } = event;
      const index = btnGroup.indexOf(target);

      this.$randomList.style.marginLeft = `-${index * 100}%`;
      target.classList.add("clicked")
    };

    const $btn = document.querySelectorAll(".btn");
    const btnGroup = Array.from($btn);
    btnGroup.forEach(($btn) => $btn.addEventListener("click", moveSlide));
  }
}
