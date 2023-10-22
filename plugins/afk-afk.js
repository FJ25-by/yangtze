//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    await m.react('📴')
    m.reply(`😴 *AFK* \n\nSekarang Anda afk sampai Anda mengirim pesan
▢ *Pengguna:* ${conn.getName(m.sender)} 
▢ *Alasan:* ${text ? text : ''}
  `)
}
handler.help = ['afk <alasan>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
