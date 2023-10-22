import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} https://id.pinterest.com/pin/732116483190938972`
let f = await fetch(`https://api.zahwazein.xyz/downloader/pinterestdl?apikey=zenzkey_59f5aaa3b6&url=${text}`)
let x = await f.json()
let cap = `${x.result}
`
conn.sendFile(m.chat, x.result, 'yangtze.jpg', `${cap}`, m)
  }
handler.help = ['dlpinterest'].map(v => v + ' <link>')
handler.tags = ['dl']
handler.command = /^(dlpinterest)$/i

export default handler