import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vm.tiktok.com/ZSLKKdrgt/`
let f = await fetch(`https://xzn.wtf/api/tiktok?url=${text}&apikey=DapaUi`)
let x = await f.json()
let cap = `${htki} Tiktok ${htka}
${x.data.title}\n
Durasi: ${x.data.duration}s
`
let cup = `Title Sound: ${x.data.music_info.title}\nPicture: ${x.data.music_info.cover}`
await conn.sendFile(m.chat, x.data.play, 'stalk.mp4', `${cap}\n${cup}`, m)

conn.sendFile(m.chat, x.data.music, 'tt.mp3', m)
m.react('✅')
  }
handler.help = ['dttnowm','dtt'].map(v => v + ' <link>')
handler.tags = ['downloader']
handler.command = /^(dttnowm|dtt)$/i

export default handler