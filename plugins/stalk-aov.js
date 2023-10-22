import axios from 'axios'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`Contoh ${usedPrefix+command} 293306941441181`)
  await m.reply('Searching...')
	axios.get(`https://api.zahwazein.xyz/stalker/nickaov?apikey=zenzkey_59f5aaa3b6&query=${text}`).then ((res) => {
	 	let hasil = `*ID :${res.data.result.gameId}*
*User Name*: ${res.data.result.userName}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['aovstalk','stalkaov']
handler.tags = ['stalker']
handler.command = /^(aovstalk|stalkaov)$/i

handler.exp = 0
handler.diamond = true

export default handler
