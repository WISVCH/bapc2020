import { PageViewElement } from '@components/page-view-element';
import { customElement } from 'lit-element';

import styles from './home-view.styles';
import template from './home-view.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('home-view')
export class BapcView extends PageViewElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-view': BapcView;
  }
}
