let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`🚩 Your remaining limit ${global.db.data.users[who].limit}`)
}
handler.help = ['ceklimit', 'limit'].map(v => v + ' <@user>')
handler.tags = ['xp']
handler.command = /^(limit|ceklimit)$/i
export default handler

