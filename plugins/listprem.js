let handler  = async (m, { conn, text, usedPrefix }) => {
  function msToDate(ms) {
		let temp = ms
		let days = Math.floor(ms / (24*60*60*1000));
		let daysms = ms % (24*60*60*1000);
		let hours = Math.floor((daysms)/(60*60*1000));
		let hoursms = ms % (60*60*1000);
		let minutes = Math.floor((hoursms)/(60*1000));
		let minutesms = ms % (60*1000);
		let sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

	let users = global.db.data.users
	let { registered, name } = global.db.data.users[m.sender]

  var text = ""
  var i = 1
  for (let jid in users){
    if (users[jid].premium){
      text += `\n\n${i}. ${conn.getName(jid)} (@${jid.replace(/@.+/, '')})\n    wa.me/${jid.split('@')[0]}\n    ${msToDate(global.db.data.users[jid].premiumDate - new Date() * 1)}`
      i += 1
    }
  }

  return conn.reply(m.chat,`❏ Total Premium : ${i-1} user\n❏ Upgrade Premium ?\nKetik *${usedPrefix}owner*\n${text}`, false, { contextInfo: { mentionedJid: conn.parseMention(text) }})
}
handler.help = ['listpremium2']
handler.tags = ['info']
handler.command = /^(listpremium2|premiumlist2|listprem2|premlist2)$/i
handler.diamond = false
export default handler