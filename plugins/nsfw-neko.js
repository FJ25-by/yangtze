import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
await m.reply(`Loading`)
  let res = `https://api.anna.biz.id/api/nsfw/neko?&apikey=anna`
  conn.sendFile(m.chat, res, 'neko.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['xneko']
handler.tags = ['nsfw']
handler.command = /^(xneko)$/i
handler.diamond = true
handler.premium = false

export default handler