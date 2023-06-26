import {html} from "lit-html";
import {when} from "lit-html/directives/when.js";
import cn from './styles.module.css';
import {Dialog} from "@/entity/chat/ui/Dialog/index.js";

export const Chat = ({selectedChat = null} = {selectedChat: null}) => when(
    selectedChat !== null,
    () => Dialog({
        chat: selectedChat, classes: {
            [cn.chat__dialog]: true
        }
    }),
    () => html`
        <div class=${cn.placeholder}>Выберите чат чтобы отправить сообщение</div>`,
);
