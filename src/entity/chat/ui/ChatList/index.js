import {html} from "lit-html";
import {when} from "lit-html/directives/when.js";
import {map} from "lit-html/directives/map.js";
import {ChatPreview} from "@/entity/chat/ui/ChatPreview";
import cn from './styles.module.css';

const chatListItem = (chatMeta) => html`
    <li class=${cn.list__item}>${ChatPreview({chatMeta})}</li>`;
const emptyListItem = () => html`
    <li class=${cn.list__item}>
        <div>Ничего не найдено...</div>
    </li>`;
export const ChatList = ({chatList, selectedChat}) => html`
    <ul class=${cn.list}>${when(
            Array.isArray(chatList) && chatList.length,
            () => map(chatList, (chatMeta) => chatListItem(chatMeta)),
            () => emptyListItem()
    )}
    </ul>`;
