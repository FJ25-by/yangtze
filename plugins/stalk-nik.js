import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Masukan NIK untuk di stalk`
  await m.reply('Searching...')
	axios.get(`https://xzn.wtf/api/checknik?nik=${text}&apikey=nekopoi`).then ((res) => {
	 	let hasil = `*NIK:* ${res.data.message.data.nik}*
*Jenis Kelamin*: ${res.data.message.data.jk}
*Tanggal Lahir*: ${res.data.message.data.tgl}
*Kecamatan:* ${res.data.message.data.kec}
*Kabupaten:* ${res.data.message.data.kab}
*Provinsi:* ${res.data.message.data.prov}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['stalknik','nik']
handler.tags = ['stalker']
handler.command = /^(stalk(nik))$/i

handler.exp = 0
handler.limit = true

export default handler
