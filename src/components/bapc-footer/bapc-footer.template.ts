import { html } from 'lit-element';
import { BapcFooter } from './bapc-footer.component';

export default function template(this: BapcFooter) {
  return html`
    <div class="supporters">
    <!-- Insert sponsors here -->
    </div>
    <footer>
    <h3>BAPC 2020 is hosted by:</h3>
    <div class="supporters">
    <img src="/images/ch.png" alt="Christiaan Huygens"/>
    <a href="http://www.asml.com/students" target="_blank"><img class="tudelft" src="/images/asml.jpg" alt="ASML"/></a>
    <img class="tudelft" src="/images/tudelft-logo.svg" alt="Delft University of Technology"/>
    </div>
</footer>
  `;
}
