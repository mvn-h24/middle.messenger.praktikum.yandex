import {html} from "lit-html";
import {classMap} from "lit-html/directives/class-map.js";
import cn from './styles.module.css';
import {when} from "lit-html/directives/when.js";


export const ProfileImage = ({name, isUploading, callUpload}) => html`
    <div class="${classMap({
        [cn.profileImage__btn_uploading]: isUploading,
        [cn.profileImage]: true
    })}">
        <button @click=${callUpload} class="${cn.profileImage__btn}"></button>
        ${when(
                name && name.length,
                () => html`<span class="${cn.profileImage__name}">${name}</span>`,
                () => null
        )}
    </div>
`;
