import {html} from "lit-html";
import {when} from "lit-html/directives/when.js";
import cn from './styles.module.css';
export const Chat = ({chatData=null}={chatData:null}) => when(
    chatData,
    () => html`<div>chat view</div>`,
    () => html`<div class=${cn.placeholder}>Выберите чат чтобы отправить сообщение</div>`,
);
