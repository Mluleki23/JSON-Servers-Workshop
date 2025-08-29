"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const response = axios_1.default
    .get("http://localhost:3000/items")
    .then(function (response) {
    console.log(response);
})
    .catch(function (error) {
    console.log(error);
});
