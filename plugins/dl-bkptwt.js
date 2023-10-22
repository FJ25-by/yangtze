import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  await m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://www.sotwe.com/sayacewek18`
  conn.sendFile(m.chat, res, null, 'Tch, dasar sangean', m)
}
handler.help = ['bkptwt']
handler.tags = ['downloader']
handler.command = /^(bkptwt)$/i
handler.limit = true
handler.premium = true

export default handler