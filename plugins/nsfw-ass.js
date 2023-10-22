import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  await m.reply(`🚩 *Loading, Dosa Mau Cepet Cepet*`)
  await m.reply('Digunakan 3 Saldo')
  let res = `https://api.fgmods.xyz/api/nsfw/ass?apikey=RF9mFuF7`
  conn.sendFile(m.chat, res, 'ass.jpg', `Hanya Tersedia 5 Saldo Setiap Hari`, m, false)
}
handler.help = ['ass']
handler.tags = ['nsfw']
handler.command = /^(ass)$/i
handler.diamond = true
handler.premium = false

export default handler