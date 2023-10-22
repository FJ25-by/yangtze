import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} halo`
let f = await fetch(`https://alpis.eu.org/api/soundoftext?text=${text}&lang=en-US&apikey=c7bc6bf5`)
let x = await f.json()
let cap = `Link: ${x.result.result}`
conn.sendFile(m.chat, x.result, 'spech.mp3', m)
  }
handler.help = ['audio'].map(v => v + ' <text>')
handler.tags = ['Text→Audio']
handler.command = /^(audio)$/i

export default handler