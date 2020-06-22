import {customElement, LitElement} from "lit-element";
import styles from './bapc-header.styles';
import sharedStyles from '@components/shared.styles';
import template from './bapc-header.template'

@customElement('bapc-header')
export class BapcHeaderComponent extends LitElement {
  public static styles = [sharedStyles, styles]


  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bapc-header': BapcHeaderComponent
  }
}
