import axios from 'axios'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.reply('Searching...')
	axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=9fa7da5bc961401da3f459f5&query=${response[0]}&grade=${response[1]}&subject=${response[2]}`).then ((res) => {
	 	let hasil = `*Soal: ${res.data.result.question[1]}*
*Jawab*: ${res.data.result.answer[1]}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['ruangguru']
handler.tags = ['fun']
handler.command = /^(ruangguru)$/i

handler.exp = 0
handler.limit = true

export default handler