import {html} from 'lit-element';
import {BapcView} from './home-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
       <h1>About the BAPC</h1>
            <p>The Benelux Algorithm Programming Contest (BAPC) is a contest in which about 100 teams from leading
                universities in Luxemburg, Belgium and the Netherlands are served a series of algorithmic
                problems/puzzles. The goal of each team is to solve as many puzzles as possible within the set time
                limit. Solutions need to be programmed out on a computer and can be submitted to a semi-automated
                judging system, after which the solution is checked. The teams that have solved the most puzzles at the
                end of the contest qualify for the Northwestern European Regional Contest (NWERC). In this regional
                competition the teams can qualify themselves for a ticket to the International Collegiate Programming
                Contest (ICPC), also known as the World Finals.</p>
                <p>The BAPC 2020 was held <strong>online</strong> on <strong>December 12th</strong>, hosted by the Delft Univerisity of Technology. The event was organised by a committee of <a href="https://ch.tudelft.nl/">W.I.S.V. &lsquo;Christiaan Huygens&rsquo;</a>.</p>

    </section>
    <section>
    <h1>News</h1>
      <hr>
      <h3>The Contest is concluded</h3>
      <p>The BAPC 2020 is won by team <b>while (false) break;</b> from Utrecht University. You can view the final <a href="https://2020.bapc.eu/scoreboard">scoreboard</a> of the contest. Problems and solutions are available <a href="https://2020.bapc.eu/problems" target="_blank">here</a>. Thanks to everyone for a great contest.<br/><small>posted: 12th of December by the BAPC Organisation</small></p>

      <hr>
      <h3>Scoreboard and Livestream</h3>
      <p>The BAPC 2020 is about to begin and we are ready for a great day. You can follow the <a href="https://chipcie.ch.tudelft.nl/public" target="_blank">scoreboard</a> of the contest. It is also possible to follow the live stream <a href="https://youtu.be/wfUd_kXtsYs" target="_blank">here</a>, which will include the opening ceremony, the jury presentation and the award ceremony. If you want to try the problems yourself you can still join the <a href="https://spectator.bapc.eu/public" target="_blank">spectator contest</a>.<br/><small>posted: 12th of December by the BAPC Organisation</small></p>

      <hr>
      <h3>Compiler versions published</h3>
      <p>The versions of the compilers and runtimes have been published on the <a href="https://2020.bapc.eu/system">Systems page</a>. <br/><small>posted: 10th of December by the BAPC Organisation</small></p>

    <hr>
    <h3>Spectator server is live!</h3>
    <p>The <a href="http://spectator.bapc.eu/" target="_blank">spectator DOMjudge server</a> is live! Please <a href="http://spectator.bapc.eu/register" target="_blank">self-register on the server</a> if you want to compete as a spectator team. Note that the spectator contest will start half an hour later than the normal contest (so at 12:30). See the <a href="http://2020.bapc.eu/schedule" target="_blank">schedule</a> for the complete overview.<br/><small>posted: 9th of December by the BAPC Organisation</small></p>

    <hr>
    <h3>Update on spectator teams</h3>
    <p>We allow spectator teams to participate at the BAPC 2020. In the week before the contest, these teams can register at our DOMjudge server (NB: the link to this will be posted in a news announcement on this page). Note that this is a stand-alone contest instance, so there is no possibility to submit a problem clarification to the jury as a spectator team.<br/><small>posted: 26th of November; updated: 8th of December by the BAPC Organisation</small></p>

    <hr>
    <h3>Rules update</h3>
    <p>We have updated <a href="https://2020.bapc.eu/rules">the rules</a> based on the current plans. Note that the contest is still planned to be online, and that there will be no prize money this year. This is to discourage fraud.<br/><small>posted: 24th of November by the BAPC Organisation</small></p>

    <hr>
    <h3>Schedule update</h3>
    <p>We have updated <a href="https://2020.bapc.eu/schedule">the schedule</a> based on the current plans. Note that the contest is still planned to be online. <br/><small>posted: 27th of October by the BAPC Organisation</small></p>

    <hr>
    <h3>Change in contest date</h3>
    <p>After consultation with the other universities, the preliminaries and the contest have been postponed by two months. The additional time will be used for the BAPC organization to formulate and implement policies in order to adhere to the RIVM and university measures around the pandemic. The preliminaries date has changed from September 29th to November 14th. The BAPC date has been changed from October 17th to December 12th.<br/><small>posted: 23rd of September by the BAPC Organisation</small></p>

    <hr>
    <h3>Website online</h3>
    <p>The initial version of the website is now online. Due to COVID-19, all information should be considered as not final. We are currently investigating how we can hold the 2020 edition of the BAPC in a safe and fair way. More information will be posted when available<br /><small>posted: 1st of Augustus by the BAPC Organisation</small></p>

</section>
  `;
}
