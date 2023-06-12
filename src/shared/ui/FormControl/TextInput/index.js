import {html} from "lit-html";
import cn from './styles.module.css';
import {classMap} from "lit-html/directives/class-map.js";

export const TextInput = (
    {
        name,
        placeholder,
        type = 'text',
        classes = {}
    } = {
        name: undefined,
        placeholder: undefined,
        type: 'text',
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
