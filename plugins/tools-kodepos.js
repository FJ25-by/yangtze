import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) throw `Masukan query\nContoh : ${usedPrefix + command} Mobile Legends`
   try {
     let res = await fetch(`https://api.zahwazein.xyz/information/kodepos?apikey=zenzkey_59f5aaa3b6&query=${args[0]}`)
     let rest = await res.json()
     let cap = `Berikut Hasil Percarian Dari ${args[0]}\n\n`
   for (let p of rest.result) {
     cap += `◈▻ *Kota* : ${p.city}
◈▻ *Provinsi :* ${p.province}
◈▻ *Kota/Urban:* ${p.urban}
◈▻ *Kodepos:* ${p.postalcode}
`
cap += '\n' + '––––––––––––––––––––––––' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ['apk'].map(v => v + ' <kota>')
handler.tags = ['tools', 'internet']
handler.command = /^(kode(pos))?$/i

handler.register = true

export default handler