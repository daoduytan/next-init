import nextRoutes from 'next-routes';

export const routes = new nextRoutes();
export const Router = routes.Router;
export const Link = routes.Link;

routes.add('confirm', '/user/confirm/:token');
