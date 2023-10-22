import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';

let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (args.length < 1) return conn.reply(m.chat, `*SUBSCRIBE*\n\nGunakan :\n${usedPrefix + command} harian\n${usedPrefix + command} mingguan\n${usedPrefix + command} bulanan`, m);
  let user = global.db.data.users[m.sender];
  
  let subs = [];
  let subsFile = '';

  switch (args[0].toLowerCase()) {
    case 'harian':
      subsFile = '../database/subsharian.json';
      subs = JSON.parse(fs.readFileSync(path.join(__dirname, subsFile)));
      let subHarian = subs.find(x => x.id == m.sender && x.expire > Date.now());
      if(subHarian){
        let expireDate = new Date(subHarian.expire);
        let dateString = `${expireDate.getDate()}-${expireDate.getMonth()+1}-${expireDate.getFullYear()}`;
        return m.reply(`Anda memiliki langganan harian yang masih aktif. Langganan akan berakhir pada tanggal *${dateString}*`);
      }
      if (user.exp < 1500) return m.reply('Saldo tidak cukup, saldo yang di butuhkan\n*£150*');
      user.exp -= 1500;
      user.diamond += 178;
      subs.push({id: m.sender, expire: Date.now() + 7*24*60*60*1000}); // 7 hari
      fs.writeFileSync(path.join(__dirname, subsFile), JSON.stringify(subs));
      m.reply('Anda telah berlangganan harian!\n*+178 BoPay*');
      break;
    case 'mingguan':
      subsFile = '../database/subsmingguan.json';
      subs = JSON.parse(fs.readFileSync(path.join(__dirname, subsFile)));
      let subMingguan = subs.find(x => x.id == m.sender && x.expire > Date.now());
      if(subMingguan){
        let expireDate = new Date(subMingguan.expire);
        let dateString = `${expireDate.getDate()}-${expireDate.getMonth()+1}-${expireDate.getFullYear()}`;
        return m.reply(`Anda memiliki langganan mingguan yang masih aktif. Langganan akan berakhir pada tanggal *${dateString}*`);
      }
      if (user.exp < 2700) return m.reply('Saldo tidak cukup, saldo yang di butuhkan\n*£270*');
      user.exp -= 2700;
      user.diamond += 390;
      subs.push({id: m.sender, expire: Date.now() + 15*24*60*60*1000}); // 15 hari
      fs.writeFileSync(path.join(__dirname, subsFile), JSON.stringify(subs));
      m.reply('Anda telah berlangganan mingguan!\n*+390 BoPay*');
      break;
    case 'bulanan':
      subsFile = '../database/subsbulanan.json';
      subs = JSON.parse(fs.readFileSync(path.join(__dirname, subsFile)));
      let subBulanan = subs.find(x => x.id == m.sender && x.expire > Date.now());
      if(subBulanan){
        let expireDate = new Date(subBulanan.expire);
        let dateString = `${expireDate.getDate()}-${expireDate.getMonth()+1}-${expireDate.getFullYear()}`;
        return m.reply(`Anda memiliki langganan bulanan yang masih aktif. Langganan akan berakhir pada tanggal *${dateString}*`);
      }
      if (user.exp < 10100) return m.reply('Saldo tidak cukup, saldo yang di butuhkan\n*£1010*');
      user.exp -= 10100;
      user.diamond += 1800;
      subs.push({id: m.sender, expire: Date.now() + 3*30*24*60*60*1000}); // 3 bulan
      fs.writeFileSync(path.join(__dirname, subsFile), JSON.stringify(subs));
      m.reply('Anda telah berlangganan bulanan!\n*+1800 BoPay*');
      break;
    default:
      m.reply('Pilihan tidak valid. Pilih harian, mingguan, atau bulanan');
  }
};

handler.help = ['subscribe'];
handler.tags = ['tools'];
handler.command = ['subscribe', 'subs', 'berlangganan', 'langganan'];

export default handler;
