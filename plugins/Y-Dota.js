import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://xzn.wtf/api/avatar-dota?text=${response[0]}&apikey=yangtze`
  conn.sendFile(m.chat, res, 'avatar-dota.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['dota'].map(v => v + ' <text>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(dota)$/i
handler.limit = true
handler.premium = true

export default handler