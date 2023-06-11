import {Router} from '@/shared/router'
import indexPage from '@/pages/index';
import pageNotFound from '@/pages/404';
import serverErrorPage from '@/pages/500';
import loginPage from '@/pages/login';
import signinPage from '@/pages/signin';
import profileIndex from '@/pages/profile/view';
import profileEdit from '@/pages/profile/edit';
import profileChangePassword from '@/pages/profile/change-password';
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
        '/chat/detail/': chatDetail,
    }
});
