import {html} from "lit-html";
import {CenterizedLayout} from "@/shared/ui/CenterizedLayout/index.js";
import {TextInput} from "@/shared/ui/FormControl/TextInput/index.js";
import cn from '@/pages/login/styles.module.css';

const slot = html`
    <form class="island ${cn.island}">
        <h1 class="${cn.island__header}">Регистрация</h1>
        ${TextInput({
            placeholder: 'Почта',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            placeholder: 'Логин',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            placeholder: 'Имя',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            placeholder: 'Фамилия',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            placeholder: 'Телефон',
            type: 'tel',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            placeholder: 'Пароль',
            type: 'password',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            placeholder: 'Пароль (еще раз)',
            type: 'password',
            classes: {[cn.island__input]: true}
        })}
        <button class="appBtn ${cn.island__submit}">Зарегистрироваться</button>
        <a class="appLink ${cn.island__signinLink}" href="/login/">Войти</a>
    </form>
`;
export default () => CenterizedLayout({slot});
