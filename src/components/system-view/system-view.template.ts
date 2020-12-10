import { html } from 'lit-element';
import { BapcView } from './system-view.component';

export default function template(this: BapcView) {
  return html`
    <section>
      <h1>System</h1>
      <p>The following submission languages will available during the contest:</p>
      <ul>
        <li>C/C++: <code>gcc version 8.3.0 (Debian 8.3.0-6)</code></li>
        <li>Java: <code>openjdk version "11.0.9" 2020-10-20</code></li>
        <li>Python3: <code> [PyPy 7.0.0 with GCC 8.2.0]</code></li>
        <li>Kotlin: <code>Kotlin version 1.4.20-release-308 (JRE 11.0.9+11-post-Debian-1deb10u1).</code></li>
        <li>C# (For company teams): <code>Mono JIT compiler version 5.18.0.240</code></li>
      </ul>
      <p>Note that Python 2 is no longer an official ICPC programming language and will therefore not be supported.</p>
      <p>For interactive problems we advice you have python locally installed on your machine.</p>
    </section>
  `;
}
