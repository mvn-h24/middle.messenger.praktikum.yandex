import {render} from "lit-html";
import {createRouter} from "./router";
import './styles/app.css';

export const createApp = () => {
    const router = createRouter();
    return {
        render: (mountPoint = null) => render(
            router.currentPageTemplate,
            mountPoint ?? document.body
        )
    }
};
