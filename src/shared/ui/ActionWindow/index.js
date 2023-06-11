import {html} from "lit-html";
import {useSlot} from "@/shared/useSlot";
import {classMap} from "lit-html/directives/class-map.js";
import cn from './styles.module.css';

export const ActionWindow = (
    {
        slot = null,
        classes = {},
        fixed = true,
        onClose=()=> {}
    } =
        {
            slot: null,
            classes: {},
            fixed: true,
            onClose:()=> {}
        }
) => {
    const content = useSlot(slot);
    const controller = new AbortController();
    document.addEventListener('keydown', (...args) => {
        console.log(args);
        onClose();
        controller.abort();
    }, {signal:controller.signal});
    return html`
        <div class="${cn.modalWindow}">
            <div class="${cn.modalWindow__overlay}">
                <div class="island ${classMap({
                    ...classes,
                    [cn.modalWindow__island]: true,
                    [cn.modalWindow__island_fixed]: fixed
                })}">
                    ${content}
                </div>
            </div>
        </div>
    `;
};
