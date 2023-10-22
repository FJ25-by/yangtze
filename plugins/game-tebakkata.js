import { tebakkata } from '@bochilteam/scraper'

let timeout = 60000
let poin = 6000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
        throw false
    }
    const json = await tebakkata()
    let caption = `
≡ _TEBAK KATA_

 *SOAL*
📋 ${json.soal}
⏳ Timeout *${(timeout / 1000).toFixed(2)} detik*
💡 Ketik ${usedPrefix}teka untuk bantuan
🎁 Reward: ${poin} XP
Jawab dengan cara reply chat soal
`.trim()
    conn.tebakkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

export default handler