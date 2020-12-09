import { html } from 'lit-element';
import { BapcView } from './schedule-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h2>Schedule</h2>
      <p>All times are subject to change. This page will always contain the most up-to-date schedule.</p>
      <table>
        <th>Time</th><th>Activity</th><th></th>
        <tr><td>&nbsp;8:30&mdash;9:30</td><td>'Doors' open</td><td></td></tr>
        <tr><td>9:30&mdash;10:00</td><td>Opening Ceremony</td><td></td></tr>
        <tr><td>10:00&mdash;11:30</td><td>Test session <i>(For main <b>and</b> spectator contest)</i></td><td></td></tr>
        <tr><td>11:30&mdash;12:00</td><td>Lunch, last minute remarks</td><td></td></tr>
        <tr><td>12:00&mdash;17:00</td><td>Main Contest</td><td></td></tr>
        <tr><td>12:30&mdash;17:30</td><td>Spectator Contest</td><td></td></tr>
        <tr><td>17:30&mdash;18:00</td><td>Award Ceremony</td><td></td></tr>
        <tr><td>18:00&mdash;end</td><td>Closing drinks</td><td></td></tr>
</table>
    </section>
  `;
}
