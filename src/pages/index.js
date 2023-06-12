import {ChatListLayout} from "@/entity/chat/ui/ChatListLayout";
import {ChatFeed as feed} from "@/entity/chat/ui/ChatFeed";
import {Chat as chat} from "@/entity/chat/ui/Chat";

export default () => ChatListLayout({feed, chat});
