import {ChatListLayout} from "@/entity/chat/ui/ChatListLayout";
import {ChatFeed} from "@/entity/chat/ui/ChatFeed";
import {Chat as chat} from "@/entity/chat/ui/Chat";
import {ChatListFixture} from "@/entity/chat/fixture/chat-list.fixture.js";

export default () => {
    const feedData = ChatListFixture;
    return ChatListLayout({feed: ChatFeed({feedData}), chat});
}
