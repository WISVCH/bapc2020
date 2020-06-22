import { PageViewElement } from '@components/page-view-element';
import { customElement } from 'lit-element';

import styles from './location-view.styles';
import template from './location-view.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

@customElement('location-view')
export class BapcView extends PageViewElement {
  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'location-view': BapcView;
  }
}
