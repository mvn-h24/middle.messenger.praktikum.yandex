import {CenterizedLayout} from "@/shared/ui/CenterizedLayout/index";
import {PageError} from "@/shared/ui/PageError/index";

export default () => CenterizedLayout({slot:PageError({status:404, message:'Не туда попали'})});
