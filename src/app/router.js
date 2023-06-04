import {html} from "lit-html";
import {Router} from '@/shared/router'
import indexPage from '@/pages/index';
import pageNotFound from '@/pages/404';
import serverErrorPage from '@/pages/500';
import loginPage from '@/pages/login';
import signinPage from '@/pages/signin';
import profileIndex from '@/pages/profile/index';
import profileEdit from '@/pages/profile/edit';
import profileChangePassword from '@/pages/profile/change-password';
import profileUploadAvatar from '@/pages/profile/upload-avatar';
import chatDetail from '@/pages/chat/[id]';

export const createRouter = () => new Router({
    routes: {
        '/': indexPage,
        '/404/': pageNotFound,
        '/500/': serverErrorPage,
        '/login/': loginPage,
        '/signin/': signinPage,
        '/profile/': profileIndex,
        '/profile/edit/':profileEdit,
        '/profile/change-password/':profileChangePassword,
        '/profile/upload-avatar/': profileUploadAvatar,
        '/chat/detail/': chatDetail,
    }
});
