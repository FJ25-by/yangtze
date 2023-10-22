let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, {
text: dygp,
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'Group',
thumbnailUrl: 'https://telegra.ph/file/0bddd1ee3c4b8a8748c0a.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
m.react('🤙') 
}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i

export default handler
