import {html} from "lit-html";
import {CenterizedLayout} from "@/shared/ui/CenterizedLayout";
import {TestProfile} from "@/entity/user/fixture/test-profile";
import {ProfileLayout} from "@/entity/user/ui/ProfileLayout/index.js";
import {ProfileInfoList} from "@/entity/user/ui/ProfileInfoList.js";
import {ProfileControlList} from "@/entity/user/ui/ProfileControlList/index.js";
import cn from './styles.module.css';

export default () => {
    const profile = TestProfile;
    return CenterizedLayout({
        slot: ProfileLayout({
            profile,
            slot: html`
                ${ProfileInfoList({profile, classes: {[cn.profileView__infoList]:true}})}
                ${ProfileControlList({classes: {[cn.profileView__infoList]:true}})}
            `
        })
    })
};
