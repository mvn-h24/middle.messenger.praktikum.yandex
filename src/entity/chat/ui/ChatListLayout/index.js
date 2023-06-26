import {html} from "lit-html";
import {useSlot} from "@/shared/useSlot";
import {FullscreenLayout} from "@/shared/ui/FullscreenLayout";
import cn from './styles.module.css';

export const ChatListLayout = ({feed, chat}) => {
    const feedSlot = useSlot(feed);
    const chatSlot = useSlot(chat);
    return FullscreenLayout({
        slot: html`
        <nav class=${cn.chatFeed}>${feedSlot}</nav>
        <div class=${cn.chat}>${chatSlot}</div>
    `
    })
};
