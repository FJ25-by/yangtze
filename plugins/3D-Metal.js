import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nExample: .3dmetal yangtze'
  await m.react('🔄')
  let res = `https://api-fgmods.xyz/api/textpro/3dmetal?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, '3dmetal.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('✅')
}
handler.help = ['3dmetal'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(3dmetal)$/i
handler.limit = true
handler.premium = false

export default handler