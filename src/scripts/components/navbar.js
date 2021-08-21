class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav>
      <div class="menu-mobile">
      <div>
        <a href="/" class="logo-font">Restaurants Apps</a>
      </div>

      <div class="menu-container">
        <button class="menu" aria-label="" type="button">
          <span class="fa fa-bars" style="color:black; width:44px; height: 44px;";
          ></span>
        </button>
      </div>
    </div>

        <ul class="nav-list">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item" ><a href="https://www.facebook.com/arizalpratama.tanuandara"> About</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
