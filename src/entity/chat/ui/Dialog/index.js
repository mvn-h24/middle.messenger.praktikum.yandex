import {html} from "lit-html";
import {classMap} from "lit-html/directives/class-map.js";
import cn from './styles.module.css';

export const Dialog = ({chat = null, classes}) => {
    const {name} = chat;
    return html`
        <article class="${classMap({
            ...classes,
            [cn.dialog]: true
        })}">
            <header class=${cn.dialog__header}>
                <div>${name}</div>
                <button></button>
            </header>
            <div class=${cn.dialog__messages}>
                TODO: add chat
            </div>
            <div class=${cn.dialog__control}>
                <button class=${cn.dialog__messageAttachment}></button>
                <textarea rows="1" class=${cn.dialog__textArea} placeholder="Сообщение"></textarea>
                <button class=${cn.dialog__sendMessage}></button>
            </div>
        </article>
    `;
};
