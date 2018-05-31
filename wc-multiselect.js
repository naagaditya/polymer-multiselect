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
    this.updateFilteredList = this.updateFilteredList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.list = [
      'item1',
      'item2',
      'item3',
      'item4'
    ];
    this.filterList = [];
    this.selectedItems = [];
  }
  static get contentTemplate () {return 'sdfdf'}
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .wrapper {
          position: relative;
        }
        .down-arrow {
          position: absolute;
          width: 40px;
          height: 38px;
          right: 1px;
          top: 1px;
          padding: 4px 8px;
          text-align: center;
          transition: transform .2s ease;
        }
        .down-arrow:before {
          position: relative;
          right: 0;
          top: 65%;
          color: #999;
          margin-top: 4px;
          border-style: solid;
          border-width: 5px 5px 0;
          border-color: #999 transparent transparent;
          content: "";
        }
        .tags {
          min-height: 40px;
          padding: 8px 40px 0 8px;
          border-radius: 5px;
          border: 1px solid #e8e8e8;
          background: #fff;
          font-size: 14px;
        }
        .tags > input {
        }
        .content {
          position: absolute;
          display: block;
          background: #fff;
          width: 100%;
          max-height: 240px;
          overflow: auto;
          border: 1px solid #e8e8e8;
          border-top: none;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          z-index: 3;
        }
      </style>
      <div class="wrapper">
        <div class="tags">
          <template is="dom-repeat" items="[[selectedItems]]">
            <span>[[item]]</span>
          </template>
          <input type="text" tabindex="0" onkeyup="{{updateFilteredList}}"/>
        </div>
        <div class="down-arrow"></div>
        <div class="content">
          <ul>
            <template is="dom-repeat" items="[[filterList]]">
              <li onclick="{{addItem}}">[[item]]</li>
            </template>
          </ul>
        </div>
      </div>
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
  addItem (e) {
    this.selectedItems = [...this.selectedItems, e.target.innerText];
  }
  updateFilteredList(e) {
    this.filterList = this.list.filter(item => item.includes(e.target.value));
  }
}

window.customElements.define('wc-multiselect', WcMultiselect);
