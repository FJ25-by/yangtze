import * as obs from 'deobfuscator';

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Mana text nya?'
	let enc = await obs.utils.hex(text)
	m.reply(enc)
}
handler.help = ['deenc', 'deencrypt'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(deenc(rypt)?)$/i

export default handler