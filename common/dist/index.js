"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateblogSchema = exports.blogSchema = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.signInInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.blogSchema = zod_1.default.object({
    title: zod_1.default.string().max(30),
    content: zod_1.default.string().max(125)
});
exports.updateblogSchema = zod_1.default.object({
    title: zod_1.default.string().max(30),
    content: zod_1.default.string().max(125),
    id: zod_1.default.string()
});
