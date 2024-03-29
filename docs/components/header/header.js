const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `

<link rel="stylesheet" href="components/header/header.css">

<div id="header">
  <table id="header-inner">
    <tr>
      <td id="logo">
        <span class="wsite-logo">
          <a href="">
            <img
              src="images/published/1369226295.png?1496405773"
              alt="Spa Tec"
            />
          </a>
        </span>
      </td>
    </tr>
  </table>
</div>
`;

class Header extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
