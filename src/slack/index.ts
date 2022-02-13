import { WebClient } from '@slack/web-api'

require('dotenv').config()
const web:WebClient = new WebClient(process.env.SLACK_API_TOKEN)
const conversationId:string = 'C01CA78NM7U'

const msg:string[] = [
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
]

export const join = async () => {
  await web.conversations.join({ channel: conversationId })
}

export const sendMessageGetMethod = async () => {
  const random:number = Math.floor(Math.random() * msg.length)
  await web.chat.postMessage({ text: msg[random], channel: conversationId })
  console.log('Send Message')
}

export const sendMessageSegata = async () => {
  await web.chat.postMessage({ text: 'トォオリリャア!!!', channel: conversationId })
}

export const sendMessagePostMethod = async (text: string) => {
  await web.chat.postMessage({ text: text, channel: conversationId })
  console.log('Send Message')
}
