import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  await m.react('📸')
  let res = `https://api.botcahx.live/api/asupan/douyin?apikey=kr9xgA4J`
  conn.sendFile(m.chat, res, 'yangtze.mp4', `nice`, m, false)
}
handler.help = ['asupandouyin']
handler.tags = ['asupan']
handler.command = /^(asupandouyin)$/i
handler.limit = true
handler.premium = true

export default handler