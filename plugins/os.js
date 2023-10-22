import os from 'os'
import speed from 'performance-now'

import {
 spawn,
 exec, 
execSync 
} from 'child_process'

let handler = async (m, { 
conn 
}) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr, json) => {
          let child = stdout.toString("utf-8");
          let ssd =
 child.replace(/Memory:/, "Ram:");
          m.reply(`*CPU*: ${ssd}\n*Speed*: *${latensi.toFixed(4)} MS*\n*Memory:* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round((os).totalmem / 1024 / 1024)}MB*\n*OS:* *${os.version()}*\n*Platform:* *${os.platform()}*\n*Hostname:* *${os.hostname()}*`);
            });
}
handler.command = handler.help = ['os'];
handler.tags = ['main'];
export default handler