import { Primbon } from 'scrape-primbon'
const primbon = new Primbon()
let limit = 30

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let response = args.join(' ').split('|')
  if (!text) throw `Masukkan nama pasangan kamu!\n\nContoh: ${usedPrefix + command} dani|isti`
// Kecocokan Nama Pasangan
primbon.kecocokan_nama_pasangan(`${response[0]}`, `${response[1]}`).then((res) => {
    console.log(res)
    let gambar = 'https://primbon.com/ramalan_kecocokan_cinta2.png'
    let reel = `
• *COCOK PASANGAN*
Nama Anda: ${res.message.nama_anda}
Nama Pasangan: ${res.message.nama_pasangan}

• *SISI POSITIF*
${res.message.sisi_positif}

• *SISI NEGATIF*
${res.message.sisi_negatif}

• *CATATAN*
${res.message.catatan}
`
  conn.reply(m.chat, reel, m)
})
}

handler.command = handler.help = ['cpasangan']
handler.tags = ['fun']
handler.owner = false
handler.limit = true

export default handler