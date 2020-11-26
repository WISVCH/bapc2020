import { html } from 'lit-element';
import { BapcView } from './registration-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>Registration</h1>
	  <h2>Qualified Teams</h2>
      <p>The registration for the BAPC has been opened. Please register your qualified teams in <a href="https://icpc.global/regionals/finder/BAPC-2020">the ICPC system</a>.</p>
	  <br>
	  <h2>Spectator Teams</h2>
	  <p>Spectator teams are allowed to participate in the BAPC. A week before the contest, these teams can register at <a href="http://chipcie.ch.tudelft.nl/public">our DOMjudge server</a> (NB: this server is offline as of now). Note that this is a stand-alone contest instance, so there is no possibility to submit a problem clarification to the jury as a spectator team.
    </section>
    <section>
    <h1>Company Teams</h1>
    <p>Please <a href="/contact">contact us</a> for questions and registration of company teams.
</section>
  `;
}
