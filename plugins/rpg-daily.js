const rewards = {
  exp: 9999,
  money: 4999,
  potion: 5,
}
const cooldown = 86400000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${reward}\n`
  }
    conn.reply(m.chat, '*––––––『 DAILY 』––––––*', text.trim(), m)
  user.lastclaim = new Date * 1
}
handler.help = ['rpgdaily', 'rpgclaim']
handler.tags = ['xp']
handler.command = /^(rpgdaily|rpgclaim)$/i

handler.cooldown = cooldown

export default handler