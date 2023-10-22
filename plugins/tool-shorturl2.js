import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `ᴍᴀsᴜᴋᴀɴ ʟɪɴᴋ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪ sɪɴɢᴋᴀᴛ`
  await m.reply('Searching...')
	axios.get(`https://alpis.eu.org/api/linkshort/bitly?link=${text}&apikey=c7bc6bf5`).then ((res) => {
	 	let hasil = `*${res.data.result}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['shorturl2']
handler.tags = ['tools']
handler.command = /^(shorturl2)$/i

handler.exp = 0
handler.diamond = true
handler.group = true

export default handler
