let handler = async (m, { usedPrefix, command, conn, text }) => {
let mentionedJid = [m.sender]
let name = conn.getName(m.sender)

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Database saat ini ${totalreg} user*\n*Terdaftar saat ini ${rtotalreg} user*`
    conn.sendMessage(m.chat, {
text: kon,
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'DATABASE',
thumbnailUrl: '',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['user']
handler.tags = ['info']
handler.command = /^(database|user)$/i

export default handler
