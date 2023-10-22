import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) throw `Masukan query\nContoh : ${usedPrefix + command} Mobile Legends`
   try {
     let res = await fetch(`https://api.betabotz.org/api/search/playstore?app=${args[0]}&apikey=oVOwnKrk`)
     let rest = await res.json()
     let cap = `Berikut Hasil Percarian Dari ${args[0]}\n\n`
   for (let p of rest.result) {
     cap += `◈▻ *Name : ${p.nama}
◈▻ *Url :* ${p.link}
◈▻ *Rate:* ${p.rate}
◈▻ *Rating:* ${p.rate2}
◈▻ *Developer:* ${p.link_dev}
`
cap += '\n' + '––––––––––––––––––––––––' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["apk"].map(v => v + ' <query>')
handler.tags = ['tools', 'internet']
handler.command = /^(apk(search))$/i

handler.register = true

export default handler