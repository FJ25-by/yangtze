let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlah limit yang akan ditarik'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Hanya angka'
  let limit = parseInt(txt)
  let limit = limit
  if (limit >= 400) throw `Anjir kebanyakan, kasian dia 🗿 `
  else if (limit < 400) {
  let users = global.db.data.users
  users[who].limit -= limit
  
  conn.reply(m.chat, `Mampus lu @${who.split`@`[0]}. ${limit} Limit Lu ditarik owner`, m, { mentions: [who] }, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) }
}
handler.help = ['tariklimit/si <@user> <amount>']
handler.tags = ['owner']
handler.command = /^si$/
handler.rowner = false
handler.premium = false
handler.rowner = true

export default handler