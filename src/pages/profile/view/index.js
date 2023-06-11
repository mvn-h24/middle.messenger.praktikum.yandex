import {html} from "lit-html";
import {CenterizedLayout} from "@/shared/ui/CenterizedLayout";
import {InfoList} from "@/shared/ui/InfoList";
import {ProfileImage} from "@/entity/user/ui/ProfileImage";
import {TestProfile} from "@/entity/user/fixture/test-profile";
import cn from './styles.module.css';

const profileList = InfoList({
    list: TestProfile.info,
    keyGetter: (item) => item['key'],
    contentGetter: (item) => item['value'],
    classes: {
        [cn.profileView__infoList]:true
    }
});

const slot = () => html`
        <div class="${cn.profileView}">
            ${ProfileImage({name: TestProfile.name})}
            ${profileList}
            <div class="${cn.profileView__controlList}">
                <div class="listItem"><a class="${cn.profileView__link} appLink" href="/profile/edit/">Изменить
                    данные</a></div>
                <div class="listItem"><a class="${cn.profileView__link} appLink" href="/profile/change-password/">Изменить
                    пароль</a></div>
                <div class="listItem"><a class="${cn.profileView__link} appLink appLink--warning"
                                         href="/login/">Выйти</a></div>
            </div>
        </div>
    `;
export default () => CenterizedLayout({slot});
