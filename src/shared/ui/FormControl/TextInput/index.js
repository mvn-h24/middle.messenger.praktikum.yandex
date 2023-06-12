import {html} from "lit-html";
import cn from './styles.module.css';
import {classMap} from "lit-html/directives/class-map.js";

export const TextInput = (
    {
        name,
        type = 'text',
        placeholder,
        classes = {}
    } = {
        name,
        type: 'text',
        placeholder: undefined,
        classes: {}
    }
) =>
    html`<input
            name=${name}
            placeholder=${placeholder}
            type=${type}
            class=${classMap({
                ...classes,
                [cn.input]: true
            })}
    />`;
