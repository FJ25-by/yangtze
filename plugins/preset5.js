import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 5 」*
https://alight.link/ytCdDYPnweEhLdJq8
`.trim()
  conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'Preset Alight Motion',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: 'https://alight.link/ytCdDYPnweEhLdJq8',
mediaType: 1,
renderLargerThumbnail: true
}}})
}

handler.help = ['p5']
handler.tags = ['AlightMotion']
handler.command = /^(p5)$/i
handler.limit = true

export default handler
