import {html} from "lit-html";

export default () => {
    return html`
        <div>
            <b>chat app</b>
            <ul>
                <li><a href="/404/">404</a></li>
                <li><a href="/500/">500</a></li>
                <li><a href="/login/">log in</a></li>
                <li><a href="/signin/">sign in</a></li>
                <li><a href="/profile/">profile</a></li>
                <li><a href="/profile/edit/">profile edit</a></li>
                <li><a href="/profile/change-password/">change password</a></li>
                <li><a href="/profile/upload-avatar/">upload avatar</a></li>
                <li><a href="/chat/detail/">chat details</a></li>
            </ul>
        </div>
    `
};
