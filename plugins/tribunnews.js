import fetch from "node-fetch"
import TribunNews from "dhn-api"
let handler = async(m, { conn }) => {
   var a = TribunNews
   var b = JSON.parse(JSON.stringify(a))
   var c = await b
   //var c = b[Math.floor(Math.random() * b.length)]
   var { berita, berita_url, berita_thumb, berita_jenis, berita_diupload } = c
   var sell = `*Tribun News*

*Berita:* ${berita}
*Jenis:* ${berita_jenis}
*Uploded:* ${berita_diupload}
*Source:* ${berita_url}`

// Pengiriman
conn.reply(m.chat, sell, m)
}
handler.help = ['tribunnews']
handler.tags = ['berita']
handler.command = /^tribun(news)?$/i
handler.limit = true

export default handler