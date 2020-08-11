import { PageViewElement } from '@components/page-view-element';
import { customElement } from 'lit-element';

import styles from './teams-view.styles';
import template from './teams-view.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('teams-view')
export class BapcView extends PageViewElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'teams-view': BapcView;
  }
}
