import {html} from "lit-html";
import {when} from "lit-html/directives/when.js";
import {classMap} from "lit-html/directives/class-map.js";
import cn from './style.module.css';

export const ChatPreview = ({chatMeta = {}, classes = {}} = {
    chatMeta: {
        name: null,
        lastMessage: null,
        unreaded: null
    }
}) => {
    const {name, lastMessage, unreaded} = chatMeta;
    return html`
        <div class=${classMap({
            ...classes,
            [cn.preview]: true
        })}>
            <div class=${cn.preview__heading}>
                <a class=${cn.preview__link} href="/chat/detail/">${name}</a>
                <time class=${cn.preview__time}>${lastMessage.time}</time>
            </div>
            <p class=${cn.preview__text}>
                ${
                        when(
                                lastMessage.me,
                                () => html`<span>Вы:</span> ${lastMessage.preview}`,
                                () => lastMessage.preview
                        )
                }
            </p>
            ${when(
                    unreaded && unreaded > 0,
                    () => html`
                        <div class=${cn.preview__unreadedCount}>${unreaded}</div>`,
                    () => null
            )}
        </div>
    `
};
