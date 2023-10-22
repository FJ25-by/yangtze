import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.botcahx.live/api/wallpaper/katakata?apikey=kr9xgA4J`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `Quotes for this day`, m, false)
}
handler.help = ['wq','wallpaperquotes']
handler.tags = ['image']
handler.command = /^(wq|wallpaperquotes)$/i
handler.group = true
handler.premium = false

export default handler