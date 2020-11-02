import { html } from 'lit-element';
import { BapcView } from './preliminaries-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>Preliminaries</h1>
      <p>There are a limited amount of slots per institution available for teams and there are usually more teams then slots.
      Therefor preliminaries can be held in your institution to determine which teams qualify for the BAPC 2020. The preliminaries
      will be held on <strong>Saturday November 14th</strong>.</p>

      <p>The following institutions held preliminaries in 2019. Once we have confirmed the preliminaries of 2020, we will update the
      page with a link to their local website. If you want to organize a preliminary contest or want to train with the preliminary set
      if you don&apos;t hold a prelimary contest, please <a href="/contact">contact us</a>.</p>    </section>
      <section>
      <h1>Preliminaries 2019</h1>
      <ul>
      <li><a href="https://commissies.ch.tudelft.nl/chipcie/?page=dapc/dapc2019">Delft University of Technology(DAPC)</a></li>
      <li>Eindhoven University of Technology(EAPC)</li>
      <li>Leiden University(LKP)</li>
      <li><a href="https://thalia.nu/events/394/">Radboud University</a></li>
      <li><a href="https://svia.nl/apc">University of Amsterdam(APC)</a></li>
      <li>UCLouvain</li>
      <li><a href="https://www.inter-actief.utwente.nl/activities/6108/">University of Twente</a></li>
      <li><a href="https://www.a-eskwadraat.nl/Vereniging/Commissies/escapade/?setlanguage=en">University of Utrecht(UKP)</a></li>
      <li><a href="https://aapp.storm.vu/">Vrije Universiteit Amsterdam (AAPP)</a></li>
</ul>
      </section>
  `;
}
