let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = '1180875110'
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let __timers = (new Date - global.db.data.users[m.sender].lastrob)
  let _timers = (3600000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrob > 100){
  if (0 > users[who].atm) throw 'Target Gaada Uang bodoh, Kismin dia'
  users[who].atm -= dapat * 1
  users[m.sender].atm += dapat * 1
  global.db.data.users[m.sender].lastrob = new Date * 1
  conn.reply(m.chat, `Yahaha, Mantap, atm Dia Ditarik Sebesar  ${dapat}`, m)

}else conn.reply(m.chat, `Anda Sudah merampok dan berhasil sembunyi , tunggu ${timers} untuk merampok lagi`, m)
}
handler.help = ['duar <@tag>']
handler.tags = ['rpg']
handler.command = /^duar$/
handler.owner = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}