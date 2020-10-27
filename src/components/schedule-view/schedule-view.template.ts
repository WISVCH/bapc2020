import { html } from 'lit-element';
import { BapcView } from './schedule-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h2>Schedule</h2>
      <p>All times are subject to change. This page will always contain the most up-to-date schedule.</p>
      <table>
        <th>Time</th><th>Activity</th><th>Location</th>
        <tr><td>&nbsp;9:00&mdash;10:00</td><td>'Doors' open</td><td></td></tr>
        <tr><td>10:00&mdash;10:30</td><td>Opening Ceremony</td><td></td></tr>
        <tr><td>10:30&mdash;12:00</td><td>Test session</td><td></td></tr>
        <tr><td>12:00&mdash;12:30</td><td>Lunch, last minute remarks</td><td></td></tr>
        <tr><td>12:30&mdash;17:30</td><td>Contest</td><td></td></tr>
        <tr><td>18:00&mdash;18:30</td><td>Award Ceremony</td><td></td></tr>
        <tr><td>18:30&mdash;end</td><td>Closing drinks</td><td></td></tr>
</table>
    </section>
  `;
}
