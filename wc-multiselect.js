import { PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `wc-multiselect`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WcMultiselect extends PolymerElement {
  constructor() {
    super();
  }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'wc-multiselect',
      },
    };
  }
}

window.customElements.define('wc-multiselect', WcMultiselect);
