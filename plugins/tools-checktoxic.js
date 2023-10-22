import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Mana kata toxic nya?`
	axios.get(`https://xzn.wtf/api/toxic-checker?text=${text}&apikey=yangtze`).then ((res) => {
	 	let hasil = `*Seberapa toxic: ${res.data.toxicity}%*
*Damage*: ${res.data.insult}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['checktoxic <kata>']
handler.tags = ['fun']
handler.command = /^(checktoxic)$/i

handler.exp = 0
handler.diamond = false
handler.level = 2

export default handler
