import {customElement, LitElement, property} from "lit-element";
import sharedStyles from '@components/shared.styles';
import template from "./bapc-menu.template";
import styles from "./bapc-menu.styles";

@customElement('bapc-menu')
export class BapcMenuComponent extends LitElement{
  public static styles = [sharedStyles, styles]

  @property({type: Boolean})
  public toggle: Boolean = false;

  protected render() {
    return template.call(this);
  }

  public toggleNavBarMenu() {
    this.toggle = !this.toggle
  }
}
