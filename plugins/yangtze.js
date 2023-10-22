import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  m.reply('sᴇᴅᴀɴɢ ʏᴀɴɢᴛᴢᴇ ʀᴇᴍɪɴɪ\n\nᴍᴏʜᴏɴ ᴅɪᴛᴜɴɢɢᴜ ya🙏')
  let res = `https://api.xyroinee.xyz/api/ai/remini?url=${response[0]}&apikey=KPGglMGrkZ`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ʏᴀɴɢᴛᴢᴇ ʀᴇᴍɪɴɪ ʏᴀ\n\nsᴇᴍᴏɢᴀ ʜᴀsɪʟɴʏᴀ sᴇsᴜᴀɪ ʏᴀɴɢ ᴅɪʜᴀʀᴀᴘᴋᴀɴ^_^`, m, false)
}
handler.help = ['yangtzeremini'].map(v => v + ' <url>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(yangtze|yangtzeremini)$/i
handler.diamond = true
handler.premium = false

export default handler