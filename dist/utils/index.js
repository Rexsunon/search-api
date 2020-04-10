"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Middleware wrapper
 *
 * @param middlewareWrappers Array of middleware
 * @param router Express router
 */
exports.applyMiddleware = (middlewareWrappers, router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};
/**
 * Apply routes
 *
 * @param routes Array of routes
 * @param router Express router
 */
exports.applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { path, method, handler } = route;
        router[method](path, handler);
    }
};
//# sourceMappingURL=index.js.map