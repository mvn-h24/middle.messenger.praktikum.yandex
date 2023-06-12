import {ChatListLayout} from "@/entity/chat/ui/ChatListLayout/index.js";
import {ChatFeed} from "@/entity/chat/ui/ChatFeed/index.js";
import {Chat} from "@/entity/chat/ui/Chat/index.js";
import {ChatListFixture} from "@/entity/chat/fixture/chat-list.fixture.js";

export default () => {
    const selectedChatId = 'a1diWAXn';
    const feedData = ChatListFixture;
    const selectedChat = feedData.find(({id}) => id === selectedChatId);
    return ChatListLayout({
        feed: ChatFeed({selectedChatId, feedData}),
        chat: Chat({selectedChat})
    });
};
