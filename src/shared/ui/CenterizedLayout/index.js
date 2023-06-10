import {html} from "lit-html";
import cn from './styles.module.css';
export const CenterizedLayout = ({slot}) => {
    return html`<main class="${cn.layout}">${slot}</main>`
};
