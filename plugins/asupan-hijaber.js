import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let res = `https://api.zacros.my.id/asupan/hijaber`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `Done......`, m, false)
}
handler.help = ['hijaber']
handler.tags = ['nsfw']
handler.command = /^(hij|hijaber)$/i
handler.limit = true
handler.premium = false

export default handler