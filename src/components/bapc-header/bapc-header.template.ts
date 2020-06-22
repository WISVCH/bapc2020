import {html} from 'lit-element';

export default function template() {
  return html`
    <header>
      <img src="images/bapc logo.png" alt="BAPC logo">
      <div id="date-uni-container">
          <div id="date">October 17th 2020</div>
          <img id="uni-logo" src="images/tudelft-logo.svg" alt="">
      </div>
    </header>
  `;
}
