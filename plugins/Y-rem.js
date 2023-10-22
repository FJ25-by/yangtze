import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .rem yangtze'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.caliph.biz.id/api/rem?nama=${response[0]}&apikey=7WEWUL4z`
  conn.sendFile(m.chat, res, 'rem.jpg', `Done`, m, false)
  m.react('✅')
}
handler.help = ['rem'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(rem)$/i
handler.limit = true
handler.premium = false

export default handler