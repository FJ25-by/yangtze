import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Heronya?`
  await m.reply('Searching...')
	axios.get(`https://api.xyroinee.xyz/api/others/heroml?q=${text}&apikey=KPGglMGrkZ`).then ((res) => {
	 	let hasil = `*Nama :${res.data.Full name}*
*Alias*: ${res.data.Alias}
*Role*: ${res.data.role}
*Lane*: ${res.data.lane}
*Release*: ${res.data.release}
*Price/Harga*: ${res.data.price}
*Gender*: ${res.data.gender}
*Height*: ${res.data.Height}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['heroml']
handler.tags = ['stalker']
handler.command = /^(hero|heroml)$/i

handler.exp = 0
handler.limit = true

export default handler
