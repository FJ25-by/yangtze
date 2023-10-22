import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Mau Cari Siapa?`
  await m.react('🔍')
	axios.get(`https://xzn.wtf/api/ttstalk?user=${text}&apikey=nekopoi`).then ((res) => {
	 	let hasil = `*ID :${res.data.id}*
*Nick Name*: ${res.data.uniqueId}
*Name*: ${res.data.nickname}
*Verify/Centang Biru*: ${res.data.verified}
*Open Favorit*: ${res.data.openFavorite}
*Total Komen*: ${res.data.commentSetting}
*Total Duet*: ${res.data.duetSetting}
*Total Stitch*: ${res.data.setitchSetting}
*Private*: ${res.data.privateAccount}
*Secret*: ${res.data.secret}
*Follower/Pengikut*: ${res.data.followerCount}
*Following/Mengikuti*: ${res.data.followingCount}
*Total Video*: ${res.data.videoCount}`

    conn.reply(m.chat, hasil, m)
	})
	m.react('👤')
}
handler.help = ['tiktokstalk']
handler.tags = ['stalker']
handler.command = /^(ttstalk|tiktokstalk)$/i

handler.exp = 0
handler.diamond = true

export default handler
