const navigationTemplate = document.createElement("template");

class Navigation extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  async connectedCallback() {
    const shadowRoot = this.attachShadow({mode: "open"});

    const content = await fetch("components/navigation/navigation.html");
    const text = await content.text();

    navigationTemplate.innerHTML = text;

    shadowRoot.appendChild(navigationTemplate.content);
  }
}

customElements.define("navigation-component", Navigation);

function toggleMobileMenu() {
  const navigation = document.getElementsByTagName("navigation-component")[0].shadowRoot.getElementById("navigation");
  navigation.classList.toggle("mobile-menu-open");
}

function toggleMobileSubMenu(element) {
  element.classList.toggle("mobile-submenu-open");
}
