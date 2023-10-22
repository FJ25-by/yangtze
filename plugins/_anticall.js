import { WAMessageStubType } from '@adiwajshing/baileys'
import { format } from 'util'

let handler = m => m

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

handler.all = async function (m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.anticall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		await this.reply(m.chat, 'Kamu telah di blockir!\nKarna melanggar aturan bot\nDilarang Menelpon Bot!\nHubungi Wa.me/6285774510196\nKalo Ingin Di Unblock', null)
		await delay(1000)
		await this.updateBlockStatus(m.chat, "block")
	}
}

export default handler