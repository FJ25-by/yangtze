import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vm.tiktok.com/ZSLKKdrgt/`
let f = await fetch(`https://api.zahwazein.xyz/downloader/instagram/story?apikey=zenzkey_59f5aaa3b6&url=${text}`)
let x = await f.json()
let o = `${x.result.url}`
let cap = `${htki} DL-INSTAGRAM ${htka}`
conn.sendFile(m.chat, x.result.url, 'ig.mp4', 'Nih kak', m)

m.react('✅')
  }
handler.help = ['igs','igstory'].map(v => v + ' <link>')
handler.tags = ['dl']
handler.command = /^(igs|igstory)$/i

export default handler