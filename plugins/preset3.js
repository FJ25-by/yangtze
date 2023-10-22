import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 3 」*
https://alight.link/zfrRNimRJHE7XrNd7
`.trim()
  conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'Preset Alight Motion',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: 'https://alight.link/zfrRNimRJHE7XrNd7',
mediaType: 1,
renderLargerThumbnail: true
}}})
}

handler.help = ['p3']
handler.tags = ['AlightMotion']
handler.command = /^(p3)$/i
handler.limit = true

export default handler
