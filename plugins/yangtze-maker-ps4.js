import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.xyroinee.xyz/api/maker/ps4?url=${response[0]}&apikey=n99BM9t9Dd`
  conn.sendFile(m.chat, res, 'ps4.jpg', `Done`, m, false)
}
handler.help = ['ps4'].map(v => v + ' <url>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(ps4)$/i
handler.diamond = true
handler.limit = true
handler.premium = true

export default handler