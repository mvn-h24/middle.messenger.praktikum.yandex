import {html} from "lit-html";
import {CenterizedLayout} from "@/shared/ui/CenterizedLayout";
import {TestProfile} from "@/entity/user/fixture/test-profile";
import {ProfileLayout} from "@/entity/user/ui/ProfileLayout/index.js";
import cn from './styles.module.css';


export default () => {
    const profile = TestProfile;
    return CenterizedLayout({
        slot: ProfileLayout({
            profile,
            showName: false,
            slot: html`
                <form class="${cn.profileEdit}">
                    <div class="${cn.profileEdit__list}">
                        <div class="listItem ${cn.profileEdit__listItem}">
                            <span>Старый пароль</span>
                            <input type="password" class="hiddenInput ${cn.profileEdit__input}" name="oldPassword"/>
                        </div>
                        <div class="listItem ${cn.profileEdit__listItem}">
                            <span>Новый пароль</span>
                            <input type="password" class="hiddenInput ${cn.profileEdit__input}" name="newPassword"/>
                        </div>
                        <div class="listItem ${cn.profileEdit__listItem}">
                            <span>Повторите новый пароль</span>
                            <input type="password" class="hiddenInput ${cn.profileEdit__input}" name="newPasswdRepeat"/>
                        </div>
                    </div>
                    <button type="submit" class="appBtn ${cn.profileEdit__submit}">Сохранить</button>
                </form>
            `
        })
    })
};
