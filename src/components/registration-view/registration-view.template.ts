import {html} from 'lit-element';
import {BapcView} from './registration-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>Registration</h1>
      <h2>Qualified Teams</h2>
      <p>The registration for the BAPC has been finished. A list of teams an be found in <a
          href="https://icpc.global/regionals/finder/BAPC-2020/teams">the ICPC system</a>.</p>
      <br>
      <h2>Spectator Teams</h2>
      <p>Spectator teams are allowed to participate in the BAPC. A week before the contest, these teams can register at
        <a href="http://spectator.bapc.eu/public">our DOMjudge server</a>. Note that this is a stand-alone contest
        instance, so there is no possibility to submit a problem clarification to the jury as a spectator team.
    </section>
    <section>
      <h1>Company Teams</h1>
      The following company teams are competing
      <ul>
        <li>CWI</li>
        <li>bol.com</li>
        <li>Dassault Systemes</li>
        <li>ORTECT</li>
        <li>ASML</li>
      </ul>
    </section>
  `;
}
