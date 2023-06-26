import {html} from "lit-html";
import cn from './styles.module.css';
export const UploadProfilePhoto = () => html`
<form class="${cn.form}">
    <span class="${cn.form__header}">Загрузите файл</span>
    <input class="${cn.form__uploadInputSrc}" type="file"/>
    <button class="appLink appLink--invereted ${cn.form__uploadInput}" type="button">Выбрать файл на</br> компютере</button>
    <button class="appBtn ${cn.form__submit}" type="submit">Поменять</button>
</form>
`;
