import {html} from "lit-html";
import {when} from "lit-html/directives/when.js";
import {map} from "lit-html/directives/map.js";
import {classMap} from "lit-html/directives/class-map.js";
import cn from './styles.module.css';

const infoList = ({slot, classes}) => html`
    <dl class="${classMap({
        ...classes,
        [cn.list]: true
    })}">${slot}
    </dl>`;
export const InfoList = (
    {
        list = [],
        keyGetter = () => null,
        contentGetter = () => null,
        classes = {}
    } = {
        list: [],
        keyGetter: () => null,
        contentGetter: () => null,
        classes: {}
    }
) => html`${
    when(
        Array.isArray(list) && list.length !== 0 &&
        typeof keyGetter === 'function' && typeof contentGetter === 'function',
        () => infoList({
            classes,
            slot: map(list, (item) => html`
                <div class="listItem ${cn.list__item}">
                    <dt class="${cn.list__itemKey}}">${keyGetter.call(null, item)}</dt>
                    <dd class="${cn.list__itemValue}">${contentGetter.call(null, item)}</dd>
                </div>
            `)
        }),
        () => null
    )
}`;
