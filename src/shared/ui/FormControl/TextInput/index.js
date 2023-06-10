import {html} from "lit-html";
import cn from './styles.module.css';
import {classMap} from "lit-html/directives/class-map.js";

export const TextInput = (
    {
        type = 'text',
        placeholder,
        classes = {}
    } = {
        type: 'text',
        placeholder: undefined,
        classes: {}
    }
) =>
    html`<input
            placeholder="${placeholder}"
            type="${type}"
            class="${classMap({
                ...classes,
                [cn.input]: true
            })}"
    />`;
