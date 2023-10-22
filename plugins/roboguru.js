import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command, args }) => {
let response = args.join(' ').split('|')
   if (!args[0]) throw `Masukan query\n<soal>|<jenjang>|<mapel>\nContoh : ${usedPrefix + command} Boedi Oetomo|sma|sejarah`
   try {
     let res = await axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=9fa7da5bc961401da3f459f5&query=${response[0]}&grade=${response[1]}&subject=${response[2]}`)
     let rest = await res.data()
     let cap = `Berikut Hasil Percarian Dari ${response[0]} ${response[1]} ${response[2]}\n\n`
   for (let p of rest.result) {
     cap += `◈▻ *Question/Pertanyaan : ${p.question}
◈▻ *Answer/Jawab:* ${p.answer}
`
cap += '\n' + '––––––––––––––––––––––––' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ['roboguru'].map(v => v + ' <query>')
handler.tags = ['tools', 'internet']
handler.command = /^(roboguru)$/i

handler.register = true

export default handler