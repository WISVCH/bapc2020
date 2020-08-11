import { PageViewElement } from '@components/page-view-element';
import { customElement } from 'lit-element';

import styles from './preliminaries-view.styles';
import template from './preliminaries-view.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('preliminaries-view')
export class BapcView extends PageViewElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'preliminaries-view': BapcView;
  }
}
