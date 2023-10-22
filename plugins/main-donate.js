
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONASI*
ᴅᴏɴᴀsɪ sᴜᴘᴀʏᴀ ʙᴏᴛ ᴛᴇᴛᴀᴘ ᴀᴋᴛɪғ ᴅᴀɴ ᴜᴘᴅᴀᴛᴇ

▢ *DANA*
• *Nomor :* 085774510196 

▢ *SUBSCRIBE*
• _Dengan subscribe dan tonton video saya, sudah cukup membantu berdonasi, Terima kasih_
`
let img = 'https://telegra.ph/file/92e6a2d6ca3855997ab4e.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar', 'donasi'] 

export default handler
