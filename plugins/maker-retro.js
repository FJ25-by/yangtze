import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://xzn.wtf/api/retro?text=${response[0]}&apikey=nekopoi`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['retro'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(retro)$/i
handler.diamond = true
handler.premium = false

export default handler