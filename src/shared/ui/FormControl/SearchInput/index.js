import {html} from "lit-html";
import cn from './styles.module.css';

export const SearchInput = (
    {
        name = 'search',
        onInput = () => {
        },
        placeholder = 'Поиск'
    } = {
        name: 'search',
        onInput: () => {
        },
        placeholder: 'Поиск'
    }
) => {
    const inputCb = (event) => {
        onInput.call(null, event.target.value);
    };
    return html`<label class=${cn.input}>
        <input
                type="search"
                placeholder=${placeholder}
                class=${cn.input__src}
                name=${name}
                @input=${inputCb}
        />
    </label>`
};
