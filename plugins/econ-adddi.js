//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Tag pengguna'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Masukkan jumlah *Saldo* yang ingin Anda tambahkan'
    if (isNaN(txt)) throw '🔢 Hanya angka'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Minimum adalah  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💵 TAMBAHAN*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Mendapat \n\n *+${dmt}* Saldo`, who, m.text)
}

handler.help = ['addsaldo <@user>']
handler.tags = ['econ']
handler.command = ['addsaldo'] 
handler.rowner = true

export default handler

