
import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

//m.reply(`Wait ${command} sedang proses🐦`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`https://telegra.ph/file/d34b2ab2cb233c749776c.png`), global.packname, global.author)
 conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: 'wa.me/6285774510196',
    mediaType: 2,
    description: 'YANGTZE', 
    title: `${command} Sedang Di Proses`,
    body: '',
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: 'www.instagram.com/boru.to4484'
     }}
  })
  
let audio = `https://raw.githubusercontent.com/hyuura/Rest-Sound/main/HyuuraKane/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'www.instagram.com/boru.to4484',
    mediaType: 2, 
    description: 'www.instagram.com/boru.to4484',
    title: "Now Playing...",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/f17621727a115dff52282.jpg')).buffer(),
    sourceUrl: 'www.instagram.com/boru.to4484'
}
     }
    })
}
handler.help = ['mangkane1','mangkane2','mangkane3','mangkane4','mangkane5','mangkane6','mangkane7','mangkane8','mangkane9','mangkane10','mangkane11','mangkane12','mangkane13','mangkane14','mangkane15','mangkane16','mangkane17','mangkane18','mangkane19','mangkane20','mangkane21','mangkane22','mangkane23','mangkane24']
handler.tags = ['sound']
handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i
handler.limit = true
export default handler
