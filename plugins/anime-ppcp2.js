import { promises, readFileSync } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command, isROwner, isCreator }) => {
//
 let data = JSON.parse(readFileSync('./node_modules/dhn-api/database/couple.json'))
 let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.male)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*cowok*', m)
  let ciwi = await(await fetch(cita.female)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*cewek*', m)
}

handler.help = ['ppcouple2', 'ppcp2']
handler.tags = ['internet']
handler.command = /^(ppcp2|ppcouple2)$/i
handler.limit = true

export default handler