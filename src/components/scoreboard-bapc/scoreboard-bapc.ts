import { PageViewElement } from '@components/page-view-element';
import { customElement } from 'lit-element';

import styles from './scoreboard-bapc.styles';
import template from './scoreboard-bapc.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('scoreboard-bapc')
export class BapcView extends PageViewElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bapc-View': BapcView;
  }
}
