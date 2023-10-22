import axios from 'axios'
let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let resp = args.join(' ').split('|')
  if (!args[0]) throw `ᴍᴀꜱᴜᴋᴋᴀɴ ᴡʀ\n\n ${usedPrefix + command} <total match>|<wr sekarang>|<wr tujuan>`
  await m.reply('Searching...')
	axios.get(`https://api.zahwazein.xyz/information/hitungwr?apikey=zenzkey_59f5aaa3b6&text=${resp[0]}&text2=${resp[1]}&text3=${resp[2]}`).then ((res) => {
	 	let hasil = `*TOTAL MATCH: ${res.data.result.total_match}*
*Winrate*: ${res.data.result.total_winrate}
*Winrate Tujuan*: ${res.data.result.req_winrate}
*Deskripsi:* ${res.data.result.description}
`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['wr','wrhero']
handler.tags = ['fun']
handler.command = /^(wr(hero))$/i

handler.exp = 0
handler.diamond = 2

export default handler
