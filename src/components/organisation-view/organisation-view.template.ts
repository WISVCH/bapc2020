import { html } from 'lit-element';
import { BapcView } from './organisation-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>Organisation</h1>
      <p>The BAPC 2020 is hosted by the Delft University of Technology and organised by W.I.S.V. &lsquo;Christiaan Huygens&lsquo;.</p>
      <h2>CHipCie</h2>
      <p>The CHipCie takes care of the organisation of the programming contest within Delft and consists of the following members:</p>
      <ul>
      <li>Raoul Bruens</li>
      <li>Alves Marinov</li>
      <li>Nadyne Aretz</li>
      <li>Yoshi van den Akker</li>
      <li>Jaden Nierop</li>
      <li>Chris van der Werf</li>
      <li>Joey Haas</li>
      <li>Tim Huisman</li>
      <li>Sterre Lutz</li>
      <li>Thomas Verwoerd</li>
      <li>Robert van Dijk</li>
</ul>
    </section>
    <!-- TODO: Add jury -->
  `;
}
