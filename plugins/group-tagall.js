let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}\n⛊──⛾「 Tag All 」⛾──⛊\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛊──⛾「 Tag All 」⛾──⛊', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['all']
handler.admin = false
handler.premium = false
handler.level = 90
handler.diamond = true
handler.group = true

export default handler
