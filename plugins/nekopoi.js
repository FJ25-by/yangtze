let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('https://api.xyroinee.xyz/api/anime/nekopoi?apikey=KPGglMGrkZ')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.data) throw 'Error!'
await m.reply('wait')
await m.reply('wait2')
  conn.sendFile(m.sender, json.data, '', 'Waduh, Mau Ngapain', m)
}
handler.help = ['nekopoi']
handler.tags = ['nsfw']
handler.command = /^(nekopoi)$/i
handler.premium = true
export default handler