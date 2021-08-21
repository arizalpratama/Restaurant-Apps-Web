/* eslint-disable eol-last */
class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero__text">
        <h1 class="hero__title">Let's Eat!</h1>
        <a href="#main-content" class="btn">Find Now</a>
      </div>
    `;
  }
}
customElements.define('hero-content', HeroContent);