import {html} from "lit-html";
import {useSignal} from "@/shared/useSignal";
import {useStatefulComponent} from "@/shared/useStatefulComponent";
import {useDebouncedFn} from "@/shared/useDebouncedFn";
import {SearchInput} from "@/shared/ui/FormControl/SearchInput";
import {ChatListFixture} from "@/entity/chat/fixture/chat-list.fixture";
import {ChatList} from "@/entity/chat/ui/ChatList";
import cn from './styles.module.css';

export const ChatFeed = ({selectedChatId = null, feedData = []} = {}) => {
    console.log(
        [selectedChatId, feedData]
    );
    const chatFeedSignal = useSignal(feedData);
    const [chatFeed] = chatFeedSignal;

    const [searchQuery, searchEffect] = useSignal('');
    const onSearch = useDebouncedFn((value) => {
        searchQuery.value = value;
    }, 1000);
    searchEffect(() => {
        chatFeed.value = ChatListFixture.filter(
            (chatPreview) => chatPreview.name.includes(searchQuery.value)
        )

    });

    return html`
        <form class=${cn.searchForm}>
            <a class=${cn.searchForm__profileLink} href="/profile/">Профиль</a>
            ${SearchInput({onInput: onSearch})}
        </form>
        ${useStatefulComponent(
                chatFeedSignal,
                (chatList) => ChatList({chatList, selectedChatId})
        )}
    `;
};
