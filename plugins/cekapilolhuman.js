import axios from 'axios'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Mana Apikey nya?\n\nContoh: ${usedPrefix+command} sl6LaYlqku`
  await m.reply('Searching...')
	axios.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=${text}`).then ((res) => {
	 	let hasil = `*Username*: ${res.data.result.username}
*Request*: ${res.data.result.requests}
*Today*: ${res.data.result.today}
*Tipe Akun / Account Type*: ${res.data.result.account_type}
*Expired*: ${res.data.result.expired}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cekapilolhuman']
handler.tags = ['internet','yangtze']
handler.command = /^(cekapilolhuman)$/i

handler.exp = 0
handler.limit = true

export default handler
