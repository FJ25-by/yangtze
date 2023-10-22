import axios from 'axios'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Mana Apikey nya?\n\nContoh: ${usedPrefix+command} sl6LaYlqku`
  await m.reply('Searching...')
	axios.get(`https://api.zahwazein.xyz/user/cekapi?apikey=${text}`).then ((res) => {
	 	let hasil = `*ID :${res.data.message.id}*
*Created*: ${res.data.message.created}
*Update*: ${res.data.message.updated}
*Username*: ${res.data.message.username}
*Apikey*: ${res.data.message.apikey}
*Today Hit*: ${res.data.message.today_hit}
*Total Hit*: ${res.data.message.total_hit}
*Status*: ${res.data.message.status}
*Premium*: ${res.data.message.premium}
*Premium Expired*: ${res.data.message.premium_expired}
*Active*: ${res.data.message.active}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cekapizahwazein']
handler.tags = ['internet','yangtze']
handler.command = /^(cekapizahwazein)$/i

handler.exp = 0
handler.limit = true

export default handler
