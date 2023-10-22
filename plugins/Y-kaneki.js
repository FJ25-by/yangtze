import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .kane yangtze'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://oni-chan.my.id/api/canvas/kaneki?text=${response[0]}&apikey=CYGb-y85t-Wvyh`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('✅')
}
handler.help = ['kaneki','kane'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(kaneki|kane)$/i
handler.limit = true
handler.premium = true

export default handler