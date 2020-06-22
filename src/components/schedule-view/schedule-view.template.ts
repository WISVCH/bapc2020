import { html } from 'lit-element';
import { BapcView } from './schedule-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h2>Schedule</h2>
      <p>The schedule will be announced here.</p>
    </section>
  `;
}
