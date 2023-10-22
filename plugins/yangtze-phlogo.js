import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh\nYangtze|FJ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://oni-chan.my.id/api/py-chan/phlogo?text1=${response[0]}&text2=${response[1]}&apikey=CYGb-y85t-Wvyh`
  conn.sendFile(m.chat, res, 'phlogo.jpg', `Success`, m, false)
}
handler.help = ['phlogo'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(phlogo)$/i
handler.limit = true
handler.diamond = true
export default handler