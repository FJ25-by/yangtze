import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ\nKirim Foto Dengan Caption .tourl\nLalu kirim link dari botnya dengan caption .passed <link>'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.zahwazein.xyz/photoeditor/passed?url=${response[0]}&apikey=zenzkey_59f5aaa3b6`
  conn.sendFile(m.chat, res, 'passed.jpg', `ꜱᴜᴅᴀʜ ʏᴀ`, m, false)
}
handler.help = ['passed'].map(v => v + ' <url>')
handler.tags = ['maker','yangtze']
handler.command = /^(passed)$/i
handler.limit = true
handler.premium = false

export default handler