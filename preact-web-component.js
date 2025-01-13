/**
 *   This is also an example of a component that takes one string input named "title" and displays it in an h1 tag.
 *  
 *   We still use "observedAttributes" and "attributeChangedCallback" to keep the view updated,
 * 
 *   but we can use jsx for arguably a nicer markup syntax than the barebones example.
 */

import { h, Component } from 'preact';

class TitleDisplay extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['title'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        // Use Preact's render function to populate the Shadow DOM
        const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });
        const title = this.getAttribute('title') || 'Default Title';

        render(
            <div>
                <h1>{title}</h1>
            </div>,
            shadow
        );
    }
}

customElements.define('title-display', TitleDisplay);
