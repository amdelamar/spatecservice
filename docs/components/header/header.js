const headerTemplate = document.createElement("template");

class Header extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  async connectedCallback() {
    const shadowRoot = this.attachShadow({mode: "open"});

    const content = await fetch("components/header/header.html");
    const text = await content.text();

    headerTemplate.innerHTML = text;

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
