import {html } from "lit-element";
import {ifDefined} from "lit-html/directives/if-defined";
import {BapcMenuComponent} from "./bapc-menu.component";

export default function template(this: BapcMenuComponent) {
  return html`
  <nav class="${ifDefined(this.toggle ? 'responsive' : undefined)}">
        <a id="home" href="home">HOME</a>
        <div class="dropdown">
          <a class="menu-item" href="#">CONTEST</a>
          <div class="dropdown-content">
          <a href="preliminaries">PRELIMINARIES</a>
          <a class="menu-item" href="/scoreboard-preliminaries">RESULTS PRELIMINARIES</a>
          <a href="schedule">SCHEDULE</a>
          <a href="system">SYSTEM</a>
          <a href="registration">REGISTRATION</a>
          <a href="rules">RULES</a>
          </div>
        </div>

<!--        <div class="dropdown">-->
<!--            <a class="menu-item" href="#">SPONSORS<span style="font-size: 15px;">&#9660;</span></a>-->
<!--            <div class="dropdown-content">-->
<!--                <a href="#">Crusty Crab</a>-->
<!--                <a href="#">Good Burger</a>-->
<!--                <a href="#">Chum Bucket</a>-->
<!--            </div>-->
<!--        </div>-->
        <a class="menu-item" href="/problems">PROBLEMS</a>
        <a class="menu-item" href="/scoreboard">RESULTS</a>
<!--        <a class="menu-item" href="/location">LOCATION</a>-->
        <a class="menu-item" href="/organisation">ORGANISATION</a>
        <a class="menu-item" href="/contact">CONTACT</a>
        <a id="burger-icon" href="#" @click="${this.toggleNavBarMenu}">&#9776;</a>
    </nav>
  `;

}
