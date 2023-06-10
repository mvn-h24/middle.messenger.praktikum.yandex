import cn from './styles.module.css';
import {html} from "lit-html";
import {CenterizedLayout} from "@/shared/ui/CenterizedLayout/index.js";
import {TextInput} from "@/shared/ui/FormControl/TextInput/index.js";

const slot = html`
    <form class="island ${cn.loginIsland}">
        <h1 class="${cn.loginIsland__header}">Вход</h1>
        ${TextInput({
            placeholder: 'Логин',
            classes: {[cn.loginIsland__input]: true}
        })}
        ${TextInput({
            placeholder: 'Пароль',
            type: 'password',
            classes: {[cn.loginIsland__input]: true}
        })}
        <button class="appBtn ${cn.loginIsland__submit}">Авторизоваться</button>
        <a class="appLink ${cn.loginIsland__signinLink}" href="/signin">Нет аккаунта?</a>
    </form>
`;
export default () => CenterizedLayout({slot});
