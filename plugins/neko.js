let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  let caption = `Nih Tod`
  await m.reply(`*Tunggu 1Menit Untuk Mengirim/Wait one minute for loading*`)
  conn.sendFile(m.chat, json.url, null, caption, m)
}
handler.help = ['nekoo']
handler.tags = ['internet']
handler.command = /^nekoo$/i
handler.diamond = true

export default handler