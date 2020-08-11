import {customElement, LitElement, property} from "lit-element";
// @ts-ignore
import styles from './bapc-header.styles';
// @ts-ignore
import sharedStyles from '@components/shared.styles';
import template from './bapc-header.template'

@customElement('bapc-header')
export class BapcHeaderComponent extends LitElement {
  public static styles = [sharedStyles, styles]

  @property({type: String})
  protected page: string = ""

  protected render() {
    return template.call(this);
  }

  getBackgroundClass() : string {
    switch(this.page) {
      case '':
        return 'home';
      default:
        return this.page;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'bapc-header': BapcHeaderComponent
  }
}
