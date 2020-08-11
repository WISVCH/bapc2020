import { html } from 'lit-element';
import { BapcView } from './schedule-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h2>Schedule</h2>
      <p>The schedule is not yet finalized due to the corona crisis. All times might change and activities can be cancelled.</p>
      <table>
        <th>Time</th><th>Activity</th><th>Location</th>
        <tr><td>&nbsp;9:00&mdash;10:00</td><td>Registration</td><td></td></tr>
        <tr><td>10:00&mdash;10:30</td><td>Opening Ceremony</td><td></td></tr>
        <tr><td>10:30&mdash;12:00</td><td>Test session</td><td></td></tr>
        <tr><td>12:00&mdash;12:00</td><td>Lunch, last minute remarks</td><td></td></tr>
        <tr><td>13:00&mdash;18:00</td><td>Contest</td><td></td></tr>
        <tr><td>18:00&mdash;19:00</td><td>Award Ceremony</td><td></td></tr>
        <tr><td>19:00&mdash;22:00</td><td>Closing Reception</td><td></td></tr>
</table>
    </section>
  `;
}
