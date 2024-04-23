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
              src="images/published/spatec-logo.png"
              alt="Spa Tec"
            />
          </a>
        </span>
      </td>
      <td>
        <div>Factory Certified Technician</div>
        <div>Established in 1991</div>
        <a
          href="tel:616-896-1321"
          alt-text="Phone"
        >
          <div>Phone: 616-896-1321</div>
        </a>
        <a
          href="mailto:spatec616@gmail.com"
          alt-text="Mail"
        >
          <div>Email: spatec616@gmail.com</div>
        </a>
      </td
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
