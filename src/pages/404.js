import {CenterizedLayout} from "@/shared/ui/CenterizedLayout/index.js";
import {PageError} from "@/shared/ui/PageError/index.js";

export default () => CenterizedLayout({slot:PageError({status:404, message:'Не туда попали'})});
