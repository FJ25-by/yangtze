import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args }) => {
   if (!args[0]) throw `Masukan query\nContoh : ${usedPrefix + command} SiMyEx`
   try {
     let res = await fetch(`https://api.zacros.my.id/info/ytstalk?username=${args[0]}`)
     let rest = await res.json()
     let cap = `Berikut Hasil Percarian Dari ${args[0]}\n\n`
   for (let p of rest.result) {
     cap += `◈▻ *Name : ${p.name}
◈▻ *Foto:* ${p.thumbnail}
◈▻ *Url :* ${p.url}
◈▻ *Subscriber:* ${p.subCount}
`
cap += '\n' + '––––––––––––––––––––––––' + '\n'
    }
  m.reply(cap)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ['ytstalk'].map(v => v + ' <query>')
handler.tags = ['tools', 'internet']
handler.command = /^yt(s?talk)?$/i

handler.register = true

export default handler