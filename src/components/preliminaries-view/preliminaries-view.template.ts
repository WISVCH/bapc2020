import { html } from 'lit-element';
import { BapcView } from './preliminaries-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>Preliminaries 2020</h1>
      <p>There are a limited amount of slots per institution available for teams and there are usually more teams then slots.
      Therefor preliminaries can be held in your institution to determine which teams qualify for the BAPC 2020. The preliminaries
      were held on <strong>Saturday November 14th</strong>.</p>

	  <p> Here, you can find links to <a href="https://commissies.ch.tudelft.nl/chipcie/archief/2020/dapc/problemset.pdf">the problem set</a>, <a href="https://commissies.ch.tudelft.nl/chipcie/archief/2020/dapc/solutions.pdf">the solutions presentation</a> and the <a href="https://commissies.ch.tudelft.nl/chipcie/archief/2020/dapc/solutions.zip">the solution zip</a>.</p>
      </section>
      <section>
      <h1>Locations of preliminaries 2020</h1>
      <ul>
      <li><a href="https://commissies.ch.tudelft.nl/chipcie/?page=dapc/dapc2019">Delft University of Technology (DAPC)</a></li>
      <li>Eindhoven University of Technology (EAPC)</li>
      <li><a href="https://thalia.nu/events/394/">Radboud University</a></li>
      <li><a href="https://svia.nl/apc">University of Amsterdam (APC)</a></li>
      <li><a href="https://www.inter-actief.utwente.nl/activities/6108/">University of Twente</a></li>
      <li><a href="https://www.a-eskwadraat.nl/Vereniging/Commissies/escapade/?setlanguage=en">University of Utrecht (UKP)</a></li>
      <li><a href="https://aapp.storm.vu/">Vrije Universiteit Amsterdam (AAPP)</a></li>
</ul>
      </section>
  `;
}
