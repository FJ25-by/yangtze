import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let namae = conn.getName(m.sender)
let md = `
┏─⊰ *REGISTER* ´ˎ-
│ᗜ Hai ${namae}, untuk mendaftar silahkan gunakan perintah ${usedPrefix}reg namaAnda.umur
│ᗜ Contoh: ${usedPrefix}${command} FJ.18
┗ˎˊ`

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, {
text: md,
contextInfo: {
externalAdReply: {
title: 'Register/Daftar Dahulu',
thumbnailUrl: "https://telegra.ph/file/975b07343239240e5a0be.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let caption = `
  ┏─⊰ *REGISTERED* ´ˎ-
  │ᗜ  *Successful Registration!*
  │ᗜ Nama: ${name}
  │ᗜ Umur: ${age} tahun
  │ᗜ SN: ${sn}
  ┗ˎˊ`  
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'Succes Register',
body: '©2023',
thumbnailUrl: "https://telegra.ph/file/975b07343239240e5a0be.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|xpverify|reg(ister)?)$/i

export default handler
