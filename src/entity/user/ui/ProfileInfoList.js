import {InfoList} from "@/shared/ui/InfoList/index.js";

export const ProfileInfoList = ({profile, classes = {}} = {profile: {info: []}, classes: {}}) => InfoList({
    list: profile.info,
    keyGetter: (item) => item['key'],
    contentGetter: (item) => item['value'],
    classes
});
