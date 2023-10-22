let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Ketik Namanya Tolol!', m)
	
  conn.reply(m.chat, `
╭━━━━°「 *Kontol ${text}* 」°
┃
┊• Nama : ${text}
┃• Kontol : ${pickRandom(['Bersih','Kotor','Mulus','Berbintik','Mancung','Bengkok','Cacat','Putus'])}
┊• Ukuran : ${pickRandom(['Besar','Besar Dan Berotot','11/12 Sama Punya Kucing','Ber urat','Sebesar Titan', 'sebutir pasir', 'hulk', 'tipis kaya tisu', 'kurus kaya ranting pohon'])}
┃• Jembut : ${pickRandom(['lebat','ada sedikit','gada jembut','tipis','muluss', 'hutan mangrove','pirang', 'hutan amazon'])}
┊• Warna : ${pickRandom(['Black Doff','Black Glossy','Pirang','Super Super Black','Pink Glossy','Pink Terang', 'Coklat', 'Sangat Amat hitam'])}
╰═┅═━––––––๑
`.trim(), m)
}
handler.help = ['cekkontol <nama>']
handler.tags = ['fun']
handler.command = /^cekkontol/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
