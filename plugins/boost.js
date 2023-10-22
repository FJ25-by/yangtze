import fs from 'fs'
import { performance } from 'perf_hooks'

let handler = async (m, { conn, command }) => {

 let start = `Tunggu sedang di Percepat...`
 let boost = `${pickRandom(['[▒▒▒▒▒▒▒▒▒▒]'])}`
 let boost2 = `${pickRandom(['[█▒▒▒▒▒▒▒▒▒]','[██▒▒▒▒▒▒▒▒]'])}`
 let boost3 = `${pickRandom(['[██▒▒▒▒▒▒▒▒]','[███▒▒▒▒▒▒▒▒]','[████▒▒▒▒▒▒▒]'])}`
 let boost4 = `${pickRandom(['[██████▒▒▒▒▒▒▒]','[████████▒▒▒▒▒▒]','[████████▒▒▒▒]'])}`
 let boost5 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]'])}`
 let boost6 = `${pickRandom(['*Conection Lost...*','[████████████▒]','[█▒▒▒▒▒▒▒▒▒]'])}`
 let boost7 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]','[████████████]'])}`

   await conn.reply(m.chat, start, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `${command}`, 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
   await conn.reply(m.chat, boost, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `${command}`, 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
   await conn.reply(m.chat, boost2, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `${command}`, 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
   await conn.reply(m.chat, boost3, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `${command}`, 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
   await conn.reply(m.chat, boost4, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `${command}`, 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
   await conn.reply(m.chat, boost5, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `${command}`, 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
   await conn.reply(m.chat, boost6, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `${command}`, 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
   await conn.reply(m.chat, boost7, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: `${command}`, 
    body: '',  
    sourceUrl: '', 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*Bot berhasil di Percepat!*`
   let k = `_Kecepatan: ${speed}s_`

     conn.sendMessage(m.chat, {
text: k,
contextInfo: {
externalAdReply: {
title: 'Succes',
body: finish,
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['botboost']
handler.tags = ['info']
handler.command = /^(botboost)/i

handler.rowner = false 


handler.fail = null
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}