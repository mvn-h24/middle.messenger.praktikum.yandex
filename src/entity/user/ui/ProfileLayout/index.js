import {html} from "lit-html";
import {ProfileImageModal} from "@/entity/user/ui/ProfileImageModal.js";
import {useSlot} from "@/shared/useSlot.js";
import cn from './styles.module.css';

export const ProfileLayout = ({profile, slot, showName = true}) => {
    const containment = useSlot(slot);
    return html`
        <div class="${cn.profileLayout}">
            ${ProfileImageModal({name: showName ? profile.name : null})}
            ${containment}
        </div>
    `;
};
