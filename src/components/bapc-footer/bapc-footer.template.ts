import { html } from 'lit-element';
import { BapcFooter } from './bapc-footer.component';

export default function template(this: BapcFooter) {
  return html`
    <footer>
    <h3>BAPC 2020 is hosted by:</h3>
    <div class="supporters">
    <a href="https://ch.tudelft.nl/"><img src="/images/ch.png" alt="Christiaan Huygens"/></a>
    <a href="http://www.asml.com/students"><img class="tudelft" src="/images/asml.jpg" alt="ASML"/></a>
    <a href="https://tudelft.nl/en/"><img class="tudelft" src="/images/tudelft-logo.svg" alt="Delft University of Technology"/></a>
    </div>
</footer>
  `;
}
