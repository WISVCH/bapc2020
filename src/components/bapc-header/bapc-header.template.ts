import {html} from 'lit-element';
import {BapcHeaderComponent} from "./bapc-header.component";

export default function template(this: BapcHeaderComponent) {
  return html`
    <header class="${this.getBackgroundClass()}">
      <img src="images/bapc logo.png" alt="BAPC logo">
      <div id="date-uni-container">
          <div id="date">December 12th 2020</div>
          <img id="uni-logo" src="images/tudelft-logo.svg" alt="">
      </div>
    </header>
  `;
}
