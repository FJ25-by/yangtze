
let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `⏱️Hei! Sebentar *${msToTime(time - new Date())}* untuk mencuri lagi`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️ Tandai seseorang untuk mencuri`
    if (!(who in global.db.data.users)) throw `✳️ Pengguna tidak ditemukan di database saya`
    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.exp < rob) return m.reply(`🔖 @${who.split`@`[0]} memiliki kurang dari *${ro} xp*\nPerbuatan mencuri termasuk di antara dosa besar, oleh karenanya dalam syari'at Islam apabila pencurian itu mencapai satu nisab dan memnuhi kriteria seperti tersebut di atas maka si pencuri dikenakan hukuman potongan tangan dan diwajibkan mengembalikan barang curian sebanyak yang dicuri.`, null, { mentions: [who] })    
   global.db.data.users[m.sender].exp += rob
   global.db.data.users[who].exp -= rob
  
    m.reply(`
  ‣ Mencuri *${rob} XP* dari @${who.split`@`[0]}
  `, null, { mentions: [who] })
    global.db.data.users[m.sender].lastrob = new Date * 1
  }

  handler.help = ['maling']
  handler.tags = ['econ']
  handler.command = ['robar', 'maling','rob','mencuri','merampok']
  
  export default handler
  
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
  
    return hours + " Menit " + minutes + " Detik"
  }
  
