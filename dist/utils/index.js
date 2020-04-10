"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middlewareWrappers, router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};
exports.applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { path, method, handler } = route;
        router[method](path, handler);
    }
};
//# sourceMappingURL=index.js.map