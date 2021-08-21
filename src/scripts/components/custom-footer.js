class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <ul>
          <li>Copyright © 2021 - Restaurants Apps</li>
        </ul>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
