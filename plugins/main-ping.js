
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          conn.sendMessage(m.chat, {
text: `${ssd}📡 *Kecepatan*: ${latensi.toFixed(4)}ms`,
contextInfo: {
externalAdReply: {
title: 'Ping Yangtze',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}});
            });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler
