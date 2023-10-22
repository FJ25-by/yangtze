import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('📡')
  let res = `https://api-fgmods.ddns.net/api/photooxy/illuminated-metallic?text=${response[0]}&apikey=RF9mFuF7`
  m.react('👍')
  conn.sendFile(m.chat, res, 'illuminated-metallic.jpg', `👤: Done Ga Bang?\n\n🗣️: Done`, m, false)
}
handler.help = ['ilumetal'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(ilumetal)$/i
handler.limit = true
handler.premium = true

export default handler