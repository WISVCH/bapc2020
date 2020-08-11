import { html } from 'lit-element';
import { BapcView } from './registration-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>Registration</h1>
      <p>The registration for BAPC will start on the 25th of September 2020. More details will follow.</p>
    </section>
    <section>
    <h1>Company Teams</h1>
    <p>Please <a href="/contact">contact us</a> for questions and registration of company teams.
</section>
  `;
}
