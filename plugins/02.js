let handler = async (m, { conn, text }) => {
	conn.sendMessage(m.chat, {
text: 'Ada Yang Bisa Yangtze Bantu?',
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'Ketik .allmenu untuk melihat menu',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: 'https://wa.me/6285774510196',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.customPrefix = /^bot$/i
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.limit = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler