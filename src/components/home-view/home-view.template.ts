import { html } from 'lit-element';
import { BapcView } from './home-view.component';

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

    </section>
  `;
}
