import {html} from "lit-html";
import cn from './styles.module.css';
export const ProfileImage = ({name}) => html`
<div class="${cn.profileImage}">
    <button class="${cn.profileImage__btn}"></button>
    <span class="${cn.profileImage__name}">${name}</span>
</div>
`;
