export default class Theme {
  $html;
  $darkMode;
  constructor({ $target }) {
    this.$html = document.querySelector("html");
    this.$darkMode = window.matchMedia("(prefers-color-scheme: Dark)").matches;
    const toggle = document.createElement("p");

    if (this.$darkMode) {
      //다크모드일 때
      this.$html.classList.add("dark");
    } else {
      //다크모드가 아닐 때
      this.$html.classList.remove("dark");
    }

    toggle.innerHTML = `
            <input class="toggleChkBox" type="checkbox"/>
            <label>Change Theme</label>
        `;

    $target.prepend(toggle);
    this.render();
  }
  handleTheme(e) {
    document.documentElement.classList.toggle("dark");
    this.$darkMode = !this.$darkMode;
  }

  render() {
    const toggleChkBox = document.querySelector(".toggleChkBox");
    toggleChkBox.addEventListener("click", this.handleTheme);
  }
}
