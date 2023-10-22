let handler = async (m) => {
  let money = global.db.data.users[m.sender].money || 0
  m.reply(`Money kamu: ${money}`)
}

handler.help = ['cekmoney']
handler.tags = ['rpg']
handler.command = /^cekmoney$/i
handler.register = true
handler.limit = true

export default handler