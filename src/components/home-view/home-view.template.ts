import {html} from 'lit-element';
import {BapcView} from './home-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
       <h1>About the BAPC</h1>
            <p>The Benelux Algorithm Programming Contest (BAPC) is a contest in which about 50 teams from leading
                universities in Luxemburg, Belgium and the Netherlands are served a series of algorithmic
                problems/puzzles. The goal of each team is to solve as many puzzles as possible within the set time
                limit. Solutions need to be programmed out on a computer and can be submitted to a semi-automated
                judging system, after which the solution is checked. The teams that have solved the most puzzles at the
                end of the contest qualify for the Northwestern European Regional Contest (NWERC). In this regional
                competition the teams can qualify themselves for a ticket to the International Collegiate Programming
                Contest (ICPC), also known as the World Finals.</p>
                <p>The BAPC 2020 will be held on <strong>December 12th</strong> at the Delft Univerisity of Technology and is organised by <a href="https://ch.tudelft.nl/">W.I.S.V. &lsquo;Christiaan Huygens&rsquo;</a></p>

    </section>
    <section>
    <h1>News</h1>
    <hr>
	<h3>Update on spectator teams</h3>
    <p>We allow spectator teams to participate at the BAPC 2020. A week before the contest, these teams can register at <a href="http://chipcie.ch.tudelft.nl/public">our DOMjudge server</a> (NB: this server is offline as of now). Note that this is a stand-alone contest instance, so there is no possibility to submit a problem clarification to the jury as a spectator team.<br/><small>posted: 26th of November by the BAPC Organisation</small></p>
	
	
	<h3>Rules update</h3>
    <p>We have updated <a href="https://2020.bapc.eu/rules">the rules</a> based on the current plans. Note that the contest is still planned to be online, and that there will be no prize money this year. This is to discourage fraud.<br/><small>posted: 24th of November by the BAPC Organisation</small></p>
	
    <h3>Schedule update</h3>
    <p>We have updated <a href="https://2020.bapc.eu/schedule">the schedule</a> based on the current plans. Note that the contest is still planned to be online. <br/><small>posted: 27th of October by the BAPC Organisation</small></p>

    <h3>Change in contest date</h3>
    <p>After consultation with the other universities, the preliminaries and the contest have been postponed by two months. The additional time will be used for the BAPC organization to formulate and implement policies in order to adhere to the RIVM and university measures around the pandemic. The preliminaries date has changed from September 29th to November 14th. The BAPC date has been changed from October 17th to December 12th.<br/><small>posted: 23rd of September by the BAPC Organisation</small></p>

    <h3>Website online</h3>
    <p>The initial version of the website is now online. Due to COVID-19, all information should be considered as not final. We are currently investigating how we can hold the 2020 edition of the BAPC in a safe and fair way. More information will be posted when available<br /><small>posted: 1st of Augustus by the BAPC Organisation</small></p>

</section>
  `;
}
