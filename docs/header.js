const headerTemplate = document.createElement("template");
headerTemplate.innerHTML = `

<style>
  #header {
    background: #495561 url(theme/header_background.gif?1527348198) repeat-x
      center top;
    width: 920px;
    font-weight: normal;
    padding-top: 6px;
    padding-right: 20px;
    padding-left: 20px;
    border-bottom: 1px solid #0c0f12;
  }
  #header-inner {
    width: 100%;
    height: 90px;
  }
  #header-inner,
  #header-inner table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  #header-inner td {
    vertical-align: middle;
    text-align: left;
  }
</style>

<div id="header">
  <table id="header-inner">
    <tr>
      <td id="logo">
        <span class="wsite-logo">
          <a href="">
            <img
            src="uploads/3/5/0/5/35055391/published/1369226295.png?1496405773"
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
