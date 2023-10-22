let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command}`
  let dann = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=a7d6c6ea0f7c932bcc5af1ab&url=${text}`)
  let res = await dann.json()
  conn.sendFile(m.chat, res.result, 'ig.mp4', 'Nih kak', m)
}

handler.help = ['ig']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?)$/i
handler.register = true
handler.limit = true

export default handler