class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <h1>Counter</h1>
        ${this.count}
        <button id="btn">Increment</button>
      `;
  }
}

customElements.define("my-counter", MyCounter);
