import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vm.tiktok.com/ZSLKKdrgt/`
let f = await fetch(`https://xzn.wtf/api/tiktok?url=${text}&apikey=Rizz`)
let x = await f.json()

conn.sendFile(m.chat, x.data.music, 'tt.mp3', m)
m.react('✅')
  }
handler.help = ['ttsound','ttmp3v2'].map(v => v + ' <link>')
handler.tags = ['dl']
handler.command = /^(ttsound|ttmp3v2)$/i

export default handler