import { html } from 'lit-element';
import { BapcView } from './system-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>System</h1>
      <p>Information for systems will be found here</p>
    </section>
  `;
}
