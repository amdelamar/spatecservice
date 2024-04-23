const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `

<link rel="stylesheet" href="components/header/header.css">

<div id="header">
  <table id="header-inner">
    <tr>
      <td id="logo">
        <span class="wsite-logo">
          <a href="/index.html">
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
        <div>
          <span>Phone: <a
            id="header-link"  
            href="tel:616-896-1321"
            alt-text="Phone"
          >616-896-1321</a></span>
        </div>
        <div>
          <span>Email: <a
            id="header-link" 
            href="mailto:spatec616@gmail.com"
            alt-text="Mail"
          >spatec616@gmail.com</a></span>
        </div>
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
