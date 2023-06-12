import {html} from "lit-html";
import cn from './styles.module.css';
import {useSlot} from "@/shared/useSlot";
export const FullscreenLayout = ({slot}) => {
    const containment = useSlot(slot);
    return html`<main class="${cn.layout}">${containment}</main>`
};
