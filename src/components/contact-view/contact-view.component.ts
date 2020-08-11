import { PageViewElement } from '@components/page-view-element';
import { customElement } from 'lit-element';

import styles from './contact-view.styles';
import template from './contact-view.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('contact-view')
export class BapcView extends PageViewElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'contact-view': BapcView;
  }
}
