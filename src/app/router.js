import {Router} from '@/shared/router'
import {html} from "lit-html";
export const createRouter = () => new Router({
    routes: {
        '/': () => {
            return html`<div>index page</div>`
        }
    }
});
