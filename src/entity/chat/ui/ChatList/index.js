import {html} from "lit-html";
import {when} from "lit-html/directives/when.js";
import {map} from "lit-html/directives/map.js";
import {classMap} from "lit-html/directives/class-map.js";
import {ChatPreview} from "@/entity/chat/ui/ChatPreview";
import cn from './styles.module.css';

const chatListItem = (chatMeta, selected = false) => html`
    <li class=${
            classMap({
                [cn.list__item]: true,
                [cn.list__item_selected]: selected,
            })
    }>${ChatPreview({
        chatMeta, classes: {
            [cn.list__itemContent]: true
        }
    })}
    </li>`;
const emptyListItem = () => html`
    <li class=${classMap({
        [cn.list__item]: true,
        [cn.list__itemCustom]: true
    })}>
        <div>Ничего не найдено...</div>
    </li>`;
export const ChatList = ({chatList = [], selectedChatId = null} = {}) => html`
    <ul class=${cn.list}>${when(
            Array.isArray(chatList) && chatList.length,
            () => map(
                    chatList,
                    (chatMeta) => chatListItem(chatMeta, chatMeta.id === selectedChatId)
            ),
            () => emptyListItem()
    )}
    </ul>`;
