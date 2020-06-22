import { html } from 'lit-element';
import { BapcApp } from './bapc-app.component';

// These are the elements needed by this element.
import '@components/bapc-header/bapc-header.component';
import '@components/bapc-menu/bapc-menu.component';
import '@components/home-view/home-view.component';
import '@components/snack-bar/snack-bar.component';
import '@polymer/app-layout/app-drawer/app-drawer';
import '@polymer/app-layout/app-header/app-header';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall';
import '@polymer/app-layout/app-toolbar/app-toolbar';

export default function template(this: BapcApp) {
  return html`
    <!-- Header -->
    <bapc-header></bapc-header>
    <bapc-menu></bapc-menu>

    <!-- Main content -->
    <main role="main" class="main-content">
    <home-view class="page" ?active="${this._page === 'home'}"></home-view>
    <contest-view class="page" ?active="${this._page === 'contest'}"></contest-view>
    <preliminaries-view class="page" ?active="${this._page === 'preliminaries'}"></preliminaries-view>
    <schedule-view class="page" ?active="${this._page === 'schedule'}"></schedule-view>
    <system-view class="page" ?active="${this._page === 'system'}"></system-view>
    <registration-view class="page" ?active="${this._page === 'registration'}"></registration-view>
    <rules-view class="page" ?active="${this._page === 'rules'}"></rules-view>
    <location-view class="page" ?active="${this._page === 'location'}"></location-view>
    <organisation-view class="page" ?active="${this._page === 'organisation'}"></organisation-view>
    <contact-view class="page" ?active="${this._page === 'contact'}"></contact-view>


      <my-view404 class="page" ?active="${this._page === 'view404'}"></my-view404>
    </main>

   <footer></footer>

    <snack-bar ?active="${this._snackbarOpened}">
      You are now ${this._offline ? 'offline' : 'online'}.
    </snack-bar>
  `;
}
