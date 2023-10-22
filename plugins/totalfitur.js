import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let cap = `Total Bot Features Currently: \n*🔖 Plugins :* ±${totalf} Plugins Files\n*🔖 Features :* ±${fitur.length} Menu`  
conn.reply(m.chat, cap, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: 'TOTAL FITUR', 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
}  
handler.help = ['totalfiturdetail']
handler.tags = ['info']
handler.command = ['totalfiturdetail']
export default handler