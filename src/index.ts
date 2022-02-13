import http from 'http'
import { sendMessageGetMethod, sendMessagePostMethod, sendMessageSegata, join } from './slack'
import { shap } from './shap'

const server:http.Server = http.createServer(async (req, res) => {
  await join()
  if (req.url === '/' && req.method === 'GET') {
    sendMessageGetMethod()
    res.end()
  } else if (req.url === '/' && req.method === 'POST') {
    sendMessageSegata()
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    }).on('end', () => {
      const shapData = shap(data)
      let msg:string
      shapData ? msg = shapData : msg = '真面目に遊べ!!'
      sendMessagePostMethod(msg)
    })
    res.end()
  }
})

const port = 8080
server.listen(process.env.PORT || port)
