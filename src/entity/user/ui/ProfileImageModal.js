import {html} from "lit-html";
import {when} from "lit-html/directives/when.js";
import {useSignal} from "@/shared/useSignal";
import {useStatefulComponent} from "@/shared/useStatefulComponent";
import {ActionWindow} from "@/shared/ui/ActionWindow";
import {UploadProfilePhoto} from "@/entity/user/ui/UploadProfilePhoto";
import {ProfileImage} from "@/entity/user/ui/ProfileImage";

export const ProfileImageModal = ({name}) => {
    const showSignal = useSignal(false);
    const [isShow] = showSignal;
    const callUpload = () => {
        isShow.value = true;
    };
    const closeUpload = () => {
        isShow.value = false;
    };
    return useStatefulComponent(
        showSignal,
        (value) => html`
            ${ProfileImage({name, isUploading: isShow, callUpload})}
            ${when(
                    value,
                    () => ActionWindow({
                        slot: UploadProfilePhoto(),
                        onClose: closeUpload
                    }),
                    () => null
            )}
        `
    );
};
