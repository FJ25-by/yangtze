import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} man,strong,cool`
let f = await fetch(`https://xzn.wtf/api/midjourney?text=${text}&apikey=nekopoi`)
let x = await f.json()
let cap = `Prompt : ${x.prompt}
Start Time: ${x.startTime}
Finish Time : ${x.finishTime}
Progres : ${x.progress}`
conn.sendFile(m.chat, x.imageUrl, 'yangtze.jpg', `${cap}`, m)
  }
handler.help = ['yangtze-ai'].map(v => v + ' <prompt>')
handler.tags = ['yangtze','internet']
handler.command = /^(yangtze-ai)$/i

export default handler