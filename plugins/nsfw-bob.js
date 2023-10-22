import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  await m.reply('Inget Dosa Ya Goblok')
  let res = `https://api.fgmods.xyz/api/nsfw/boobs?apikey=RF9mFuF7`
  conn.sendFile(m.chat, res, 'boobs.jpg', `Awas Ga Mandi Wajib\nAwas Ga Sholat 5 Waktu\nFitur ini akan aktif jika anda rajin sholat`, m, false)
}
handler.help = ['boobs']
handler.tags = ['nsfw']
handler.command = /^(boobs)$/i
handler.diamond = true
handler.premium = false

export default handler