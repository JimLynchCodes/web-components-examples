
/**
 *   This is an example of a component that takes one string input named "title" and displays it in an h1 tag.
 *  
 *   Notice that we also have to manually "keep the display in sync with the input" there with the "attributeChangedCallback" code.
 * 
 *   I call this one "barebones" web component example because it doesn't use any library.
 */

class TitleDisplay extends HTMLElement {
  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();
    // Attach Shadow DOM for encapsulation
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <h1></h1>
      `;
    this.titleElement = this.shadowRoot.querySelector('h1');
  }

  connectedCallback() {
    this.updateTitle();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title' && oldValue !== newValue) {
      this.updateTitle();
    }
  }

  updateTitle() {
    const title = this.getAttribute('title') || 'Default Title';
    this.titleElement.textContent = title;
  }
}

customElements.define('title-display', TitleDisplay);
