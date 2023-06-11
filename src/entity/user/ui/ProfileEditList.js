import {InfoList} from "@/shared/ui/InfoList/index.js";
import {html} from "lit-html";

export const ProfileEditList = ({profile, classes={}}={}) => InfoList({
    list: profile.info,
    keyGetter: (item) => item['key'],
    contentGetter: (item) =>
        html`<input class="hiddenInput" style="text-align: right" placeholder=${item['value']} name=${item['key']}/>`,
    classes
});
