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
                <p>The BAPC 2020 will be held on <strong>October 17th</strong> at the Delft Univerisity of Technology and is organised by <a href="https://ch.tudelft.nl/">W.I.S.V. &lsquo;Christiaan Huygens&rsquo;</a></p>

    </section>
    <section>
    <h1>News</h1>

    <h2>Website online</h2>
    <p>The initial version of the website is now online. Due to COVID-19, the information should be considered as not final. We are currently investigating how we can hold the 2020 edition of the BAPC in a safe and fair way. More information will be posted when available<br /><small>posted: 1st of Augustus by the BAPC Organisation</small></p>

    <hr>

</section>
  `;
}
