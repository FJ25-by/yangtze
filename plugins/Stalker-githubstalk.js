import fetch from 'node-fetch'
import fs from 'fs'
import axios from 'axios'
import { githubstalk } from '../lib/scrape.js'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply(`Contoh ${usedPrefix+command} ZykoMD`)
m.reply(md)
let aj = await githubstalk(text)
conn.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ STALKING GITHUB \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}
Url Github : ${aj.url}` }, { quoted: m } )
}
handler.help = ['githubstalk'].map(v => v + ' <username>')
handler.tags = ['stalker']
handler.command = /^(githubstalk)$/i
handler.limit = true
export default handler
