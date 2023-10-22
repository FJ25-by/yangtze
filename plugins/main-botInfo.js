import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
  let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}

  let text = `
*INFO BOT*

Bot ini di recoding oleh @FJ
With the team : FJ ST

*Sosmed :*
IG : https://instagram.com/boru.to4484
WA : https://wa.me/6285774510196
GIT : https://github.com/zhindev
YT : https://www.youtube.com/SiMyEx

*© FJ ST*
`.trim()

  conn.sendMessage(m.chat, {
    text: text,
    contextInfo: {
      externalAdReply: {
        title: "BOT INFO",
        body: "FJ ST",
        thumbnailUrl: "https://i.ibb.co/Js4gXyR/fg-logo.jpg",
        sourceUrl: "https://wa.me/6285774510196",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['botinfo', 'info', 'infobot']

export default handler