import { PageViewElement } from '@components/page-view-element';
import { customElement } from 'lit-element';

import styles from './system-view.styles';
import template from './system-view.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('system-view')
export class BapcView extends PageViewElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'system-view': BapcView;
  }
}
