import {CenterizedLayout} from '@/shared/ui/CenterizedLayout'
import {PageError} from "@/shared/ui/PageError";
export default () => CenterizedLayout({slot:PageError({status:500, message:'Мы уже фиксим'})});
