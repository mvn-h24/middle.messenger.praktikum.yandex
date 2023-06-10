import {html} from "lit-html";
import cn from './styles.module.css'
export const PageError = ({status, message}) =>
    html`
        <div class="${cn.pageError}">
            <h1 class="${cn.pageError__status}">${status}</h1>
            <span class="${cn.pageError__text}">${message}</span>
            <a class="appLink ${cn.pageError__appLink}" href="/">Назад к чатам</a>
        </div>
    `;
