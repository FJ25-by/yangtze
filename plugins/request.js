let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Kalo kamu mau request fitur\n\ncontoh:\n${usedPrefix + command} selamat siang owner, saya mw request fitur jav`
    if (text.length < 10) throw `Request terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Request terlalu panjang, maksimal 1000 karakter!`
    let teks = `*${command.toUpperCase()}!*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`Request terkirim ke kepemilik bot, jika ${command.toLowerCase()} Tidak Bisa Dibuat, Yasudahlah.`)
}
handler.help = ['request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(req|request)$/i
export default handler