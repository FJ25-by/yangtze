import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.maulanaabot.repl.co/sertifikat/epepserti?apikey=As66AfM7&text=${response[0]}`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['epep'].map(v => v + ' <text> (Coming Soon)')
handler.tags = ['logo','maker']
handler.command = /^(epep)$/i
handler.limit = true
handler.premium = false

export default handler