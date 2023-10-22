import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  await m.react('📡')
  let res = `https://api.fgmods.xyz/api/nsfw-nime/blowjob?apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'blowjob.jpg', `ᴅᴀsᴀʀ sᴀɴɢᴇ ʟᴜ`, m, false)
  m.react('😒')
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i
handler.diamond = true
handler.premium = false

export default handler