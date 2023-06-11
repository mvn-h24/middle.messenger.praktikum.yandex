import {html} from "lit-html";
import {CenterizedLayout} from "@/shared/ui/CenterizedLayout";
import {TestProfile} from "@/entity/user/fixture/test-profile";
import {ProfileLayout} from "@/entity/user/ui/ProfileLayout/index.js";
import cn from './styles.module.css';
import {ProfileEditList} from "@/entity/user/ui/ProfileEditList.js";

export default () => {
    const profile = TestProfile;
    return CenterizedLayout({
        slot: ProfileLayout({
            profile,
            showName: false,
            slot: html`
                <form class="${cn.profileEdit}">
                    ${ProfileEditList({profile, classes: {[cn.profileEdit__list]:true}})}
                    <button type="submit" class="appBtn ${cn.profileEdit__submit}">Сохранить</button>
                </form>
            `
        })
    })
};
