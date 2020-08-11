import { PageViewElement } from '@components/page-view-element';
import {customElement, LitElement} from 'lit-element';

import styles from './bapc-footer.styles';
import template from './bapc-footer.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('bapc-footer')
export class BapcFooter extends LitElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bapc-footer': BapcFooter;
  }
}
