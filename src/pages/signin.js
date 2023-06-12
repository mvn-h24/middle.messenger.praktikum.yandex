import {html} from "lit-html";
import {CenterizedLayout} from "@/shared/ui/CenterizedLayout/index";
import {TextInput} from "@/shared/ui/FormControl/TextInput/index";
import cn from '@/pages/login/styles.module.css';

const slot = html`
    <form class="island island--shaded ${cn.island}">
        <h1 class="${cn.island__header}">Регистрация</h1>
        ${TextInput({
            placeholder: 'Почта',
            name: 'email',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            name: 'login',
            placeholder: 'Логин',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            name: 'first_name',
            placeholder: 'Имя',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            name: 'second_name',
            placeholder: 'Фамилия',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            name: 'phone',
            placeholder: 'Телефон',
            type: 'tel',
            classes: {[cn.island__input]: true}
        })}
        ${TextInput({
            name: 'password',
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
