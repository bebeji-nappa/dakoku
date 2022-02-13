"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessagePostMethod = exports.sendMessageSegata = exports.sendMessageGetMethod = exports.join = void 0;
const web_api_1 = require("@slack/web-api");
require('dotenv').config();
const web = new web_api_1.WebClient(process.env.SLACK_API_TOKEN);
const conversationId = 'C01CA78NM7U';
const msg = [
    'セガサターーーーン、シローーーーーーーーーーーーーーーーー!!!!',
    '若者よ...\n真剣に取り組んでいるものはあるか?命がけで打ち込んでいる物があるか?\nセガサターン、シロ!\n指が折れるまで......指が折れるまで!',
    'ホーーーームラン!!!',
    'こいつら人間じゃねぇ!!!',
    '名監督...!!!',
    'アタマを使え!!',
    'さくらさーーーーん、さくらさーーーーーーーん!!!',
    '素晴らしいゲームを.......ありがとう、野茂くん!',
    '冬こそ燃えろ!',
    'みんなで戦え!',
    'せがたゲームチャート、スチーム度:満点!'
];
exports.join = async () => {
    await web.conversations.join({ channel: conversationId });
};
exports.sendMessageGetMethod = async () => {
    const random = Math.floor(Math.random() * msg.length);
    await web.chat.postMessage({ text: msg[random], channel: conversationId });
    console.log('Send Message');
};
exports.sendMessageSegata = async () => {
    await web.chat.postMessage({ text: 'トォオリリャア!!!', channel: conversationId });
};
exports.sendMessagePostMethod = async (text) => {
    await web.chat.postMessage({ text: text, channel: conversationId });
    console.log('Send Message');
};
