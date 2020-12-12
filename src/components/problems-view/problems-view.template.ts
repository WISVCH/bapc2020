import { html } from 'lit-element';
import { BapcView } from './problems-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h2>BAPC 2020 Problems</h2>
      <p>The following files are available:</p>
        <ul>
          <li><a href="http://commissies.ch.tudelft.nl/chipcie/archief/2020/bapc/problemset.pdf" target="_blank">Problem Set</a></li>
          <li><a href="http://commissies.ch.tudelft.nl/chipcie/archief/2020/bapc/solutions.zip" target="_blank">Reference solutions and input/out</a></li>
          <li><a href="http://commissies.ch.tudelft.nl/chipcie/archief/2020/bapc/solutions.pdf" target="_blank">Solution Presentations</a></li>
        </ul>
    </section>
    <section>
      <h2>BAPC 2020 Preliminary Problems</h2>
      <p>The following files are available:</p>
      <ul>
        <li><a href="http://commissies.ch.tudelft.nl/chipcie/archief/2020/dapc/problemset.pdf" target="_blank">Problems Set</a></li>
        <li><a href="http://commissies.ch.tudelft.nl/chipcie/archief/2020/dapc/solutions.zip" target="_blank">Reference solutions and input/out</a></li>
        <li><a href="http://commissies.ch.tudelft.nl/chipcie/archief/2020/dapc/solutions.pdf" target="_blank">Solution Presentations</a></li>
      </ul>
    </section>
    <section>
      <h2>Jury BAPC 2020</h2>
      <p>The BAPC 2020 jury consited of</p>
      <ul>
        <li>Ruben Brokkelkamp</li>
        <li>Daan van Gent</li>
        <li>Ragnar Groot Koerkamp</li>
        <li>Joey Haas</li>
        <li>Freek Henstra</li>
        <li>Boas Kluiving</li>
        <li>Timon Knigge</li>
        <li>Ludo Pulles</li>
        <li>Maarten Sijm</li>
        <li>Harry Smit</li>
        <li>Pim Spelier</li>
        <li>Jorke de Vlas</li>
        <li>Mees de Vries</li>
        <li>Mike de Vries</li>
        <li>Wessel van Woerden</li>
      </ul>
    </section>
  `;
}
