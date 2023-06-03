import {render} from "lit-html";
import {createRouter} from "./router";

export const createApp = () => {
    const router = createRouter();

    return {
        render: (mountPoint) => render(router.currentPageTemplate, mountPoint)
    }
};
