import { html } from 'lit-element';
import { BapcView } from './organisation-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>Organisation</h1>
      <p>The BAPC 2020 is hosted by the Delft University of Technology and organised by W.I.S.V. &#96;Christiaan Huygens&#96;.</p>
    </section>
  `;
}
