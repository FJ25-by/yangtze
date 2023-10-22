import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 1 」*
https://alight.link/jFQ3BdcHfxEmfTFbA
`.trim()
  conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'Preset Alight Motion',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: 'https://alight.link/jFQ3BdcHfxEmfTFbA',
mediaType: 1,
renderLargerThumbnail: true
}}})
}

handler.help = ['p1']
handler.tags = ['AlightMotion']
handler.command = /^(p1)$/i
handler.limit = true

export default handler
