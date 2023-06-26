import {html} from "lit-html";
import {classMap} from "lit-html/directives/class-map.js";
import cn from './styles.module.css';
export const ProfileNavList = ({classes={}}={}) => html`
    <div class="${classMap(classes)}">
        <div class="listItem">
            <a class="appLink ${cn.control}" href="/profile/edit/">Изменить данные</a>
        </div>
        <div class="listItem">
            <a class="appLink ${cn.control}" href="/profile/change-password/">Изменить пароль</a>
        </div>
        <div class="listItem">
            <a class="appLink appLink--warning ${cn.control}" href="/login/">Выйти</a>
        </div>
    </div>
`;
