import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 4 」*
https://alight.link/mLGSRgFjU7tgaZ9ZA
`.trim()
  conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'Preset Alight Motion',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: 'https://alight.link/mLGSRgFjU7tgaZ9ZA',
mediaType: 1,
renderLargerThumbnail: true
}}})
}

handler.help = ['p4']
handler.tags = ['AlightMotion']
handler.command = /^(p4)$/i
handler.limit = true

export default handler
