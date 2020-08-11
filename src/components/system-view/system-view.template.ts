import { html } from 'lit-element';
import { BapcView } from './system-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>System</h1>
      <p>The following submission languages will available during the contest:</p><ul>
      <li>C/C++</li>
      <li>Java</li>
      <li>Python3</li>
      <li>Kotlin</li>
      <li>C#(For company teams)</li>
</ul>
<p>Note that Python 2 is no longer an official ICPC programming language and will therefore not be supported.</p>
</section><section>
<h1>Available tools on the team PC</h1>
      <p>The exact versions for the compilers and tools will be listed here once finalized. A list with available IDE's will be available soon&trade;.</p>
    </section>
  `;
}
