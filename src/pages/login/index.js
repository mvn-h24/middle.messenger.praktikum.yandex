import {html} from "lit-html";
import {CenterizedLayout} from "@/shared/ui/CenterizedLayout/index";
import {TextInput} from "@/shared/ui/FormControl/TextInput/index";
import cn from './styles.module.css';

const slot = html`
    <form class="island island--shaded ${cn.island}">
        <h1 class="${cn.island__header}">Вход</h1>
        ${TextInput({
            name:'login',
            placeholder: 'Логин',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            name:'password',
            placeholder: 'Пароль',
            type: 'password',
            classes: {[cn.island__input]: true}
        })}
        <button class="appBtn ${cn.island__submit}">Авторизоваться</button>
        <a class="appLink ${cn.island__signinLink}" href="/signin/">Нет аккаунта?</a>
    </form>
`;
export default () => CenterizedLayout({slot});
