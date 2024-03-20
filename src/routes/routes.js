import Login from '../Auth/login';
import Register from '../Auth/register';
import UpPost from '../Forum/UpPost/upPost';
import Forum from '../Forum/forum';
// Public routes
const publicRoutes = [
    // { path: config.routes.home, component: Home },
    { path: '/', component: Forum },
    { path: '/uppost', component: UpPost },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };