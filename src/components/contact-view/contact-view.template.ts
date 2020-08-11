import { html } from 'lit-element';
import { BapcView } from './contact-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h2>Contact</h2>
      <p>If you want to the contact the 2020 BAPC committee, you can email us <a href="mailto:chipcie@ch.tudelft.nl">chipcie@ch.tudelft.nl</a>.</p>
      <!-- TODO: verify email address -->
       <p>Companies interrested in supporting the contest or participating as a company team please email <a href="mailto:extern@ch.tudelft.nl">extern@ch.tudelft.nl</a>. </p>
    </section>
  `;
}
