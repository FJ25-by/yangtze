import fs from 'fs'
let handler  = async (m, { conn }) => {
  conn.reply(m.chat, `Rating: ${pickRandom(cantikk)}`, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `Rate`, 
    body: '',  
    sourceUrl: 'https://instagram.com/boru.to4484', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
}
handler.help = ['cekrating','rate','rating']
handler.tags = ['fun']
handler.command = /^(rate|cekrating|rating)$/i

handler.limit = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let cantikk = [
'4/100',
'7/100',
'12/100',
'22/100',
'27/100',
'35/100',
'41/100',
'48/100',
'56/100',
'64/100',
'71/100 (Lumayan)',
'2/100',
'4/100',
'1/100 (Ya Gitu)',
'6/100',
'77/100 (Pas KKM)',
'83/100',
'89/100',
'94/100',
'100/100 (Gila Njir)',
]