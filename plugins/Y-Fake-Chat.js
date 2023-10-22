import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh: .fakechat Jola|Hi|+62 851-1234-5678'
  await m.react('⏳')
  let res = `https://api.caliph.biz.id/api/fakechat/wa?name=${response[0]}&text=${response[1]}&num=${response[2]}&apikey=7WEWUL4z`
  conn.sendFile(m.chat, res, 'fakechat.jpg', `jangan buat nipu`, m, false)
  m.react('👤')
}
handler.help = ['fakechat'].map(v => v + ' <nama>|<text>|<nomor>')
handler.tags = ['logo','maker']
handler.command = /^(fakechat)$/i
handler.limit = true
handler.premium = false

export default handler