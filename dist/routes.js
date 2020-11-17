"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Router = exports.routes = void 0;
const next_routes_1 = __importDefault(require("next-routes"));
exports.routes = new next_routes_1.default();
exports.Router = exports.routes.Router;
exports.Link = exports.routes.Link;
exports.routes.add("confirm", "/user/confirm/:token");
//# sourceMappingURL=routes.js.map