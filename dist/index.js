"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const slack_1 = require("./slack");
const shap_1 = require("./shap");
const server = http_1.default.createServer(async (req, res) => {
    await slack_1.join();
    if (req.url === '/' && req.method === 'GET') {
        slack_1.sendMessageGetMethod();
        res.end();
    }
    else if (req.url === '/' && req.method === 'POST') {
        slack_1.sendMessageSegata();
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        }).on('end', () => {
            const shapData = shap_1.shap(data);
            let msg;
            shapData ? msg = shapData : msg = '真面目に遊べ!!';
            slack_1.sendMessagePostMethod(msg);
        });
        res.end();
    }
});
const port = 8080;
server.listen(process.env.PORT || port);
