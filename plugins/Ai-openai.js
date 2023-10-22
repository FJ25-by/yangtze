import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://xzn.wtf/api/openai?text=${text}&apikey=yangtze`)
    let komcol = await res.json()
   conn.sendMessage(m.chat, {
text: komcol.result,
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'OPENAI',
thumbnailUrl: 'https://telegra.ph/file/152c42ca204f20146ceb4.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['ai','openai']
handler.tags = ['ai','yangtze']
handler.command = /^(ai|openai|gpt)$/i
handler.diamond = 15
export default handler
