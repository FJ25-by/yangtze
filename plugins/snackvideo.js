import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan Url!'
  let dann = await fetch(`https://api.zahwazein.xyz/downloader/snackvideo?apikey=e6acac24b9&url=${text}`)
  await m.reply('Tunggu Sebentar...')
  let res = await dann.json()
  conn.sendFile(m.chat, res.result, 'snack.mp4', 'Nih', m)
}
handler.help = ['snackvideo'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(snackvideo)$/i
handler.premium = false

export default handler