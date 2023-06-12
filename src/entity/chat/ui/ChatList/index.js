import {html} from "lit-html";
import {when} from "lit-html/directives/when.js";
import {map} from "lit-html/directives/map.js";
import {ChatPreview} from "@/entity/chat/ui/ChatPreview";
import cn from './styles.module.css';

export const ChatList = ({chatList}) => html`
    <ul class=${cn.list}>${
    when(
        Array.isArray(chatList) && chatList.length,
        () => map(
            chatList,
            (chatMeta) =>
                html`
                                <li class=${cn.list__item}>${ChatPreview({chatMeta})}</li>`
        ),
        () => html`
                        <li class=${cn.list__item}>
                            <div>Ничего не найдено...</div>
                        </li>`
    )
}
    </ul>`;
