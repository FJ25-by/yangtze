import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
import { dirname } from 'path';

let __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender];
  let klanList = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/klan.json')));

  let subcommand = (args[0] || '').toLowerCase();
  switch(subcommand) {
    case 'buatsquad':
      if (user.exp < 2000) return m.reply('XP tidak cukup, saldo yang di butuhkan\n2000 XP');
      let newKlanName = args[1];
      if(!newKlanName) return m.reply('Anda harus memberikan nama untuk squad baru Anda');
      if(klanList.find(klan => klan.name.toLowerCase() === newKlanName.toLowerCase())) return m.reply('Nama squad sudah digunakan, silahkan pilih nama lain');

      user.exp -= 2000;
      user.klan = newKlanName;

      let newKlan = {
        id: klanList.length + 1,
        name: newKlanName,
        owner: m.sender,
        members: [m.sender]
      };

      klanList.push(newKlan);
      fs.writeFileSync(path.join(__dirname, '../database/klan.json'), JSON.stringify(klanList));

      m.reply(`Squad ${newKlanName} berhasil dibuat!`);
      break;

    case 'joinsquad':
      let klanNameToJoin = args[1];
      if(!klanNameToJoin) return m.reply('Anda harus memberikan nama squad yang ingin Anda gabungi');

      let klanToJoin = klanList.find(klan => klan.name.toLowerCase() === klanNameToJoin.toLowerCase());
      if(!klanToJoin) return m.reply('Squad tidak ditemukan, silahkan cek kembali nama squad');
      if(klanToJoin.members.length >= 15) return m.reply('Squad yang Anda ingin gabungi sudah penuh');

      user.klan = klanToJoin.name;
      klanToJoin.members.push(m.sender);
      fs.writeFileSync(path.join(__dirname, '../database/klan.json'), JSON.stringify(klanList));

      m.reply(`Anda berhasil bergabung dengan squad ${klanToJoin.name}`);
      break;

    case 'ceksquad':
      if(user.klan === '') return m.reply('Anda belum bergabung dengan squad apapun');
      
      let userKlan = klanList.find(klan => klan.name === user.klan);
      if(!userKlan) return m.reply('Terjadi kesalahan, squad Anda tidak ditemukan');

      let ownerName = conn.getName(userKlan.owner);
      let membersName = userKlan.members.map(memberId => conn.getName(memberId)).join(', ');

      m.reply(`
*Nama Squad:* ${userKlan.name}
*Pemilik Squad:* ${ownerName}
*Member:* ${membersName}
      `);
      break;

    case 'listsquad':
      let listKlanStr = klanList.map(klan => `${klan.name} (${klan.members.length}/15)`).join('\n');
      m.reply(`*List Squad:*\n${listKlanStr}`);
      break;

    case 'keluarsquad':
      if(user.klan === '') return m.reply('Anda belum bergabung dengan squad apapun');

      let klanToLeave = klanList.find(klan => klan.name === user.klan);
      if(!klanToLeave) return m.reply('Terjadi kesalahan, squad Anda tidak ditemukan');

      klanToLeave.members = klanToLeave.members.filter(member => member !== m.sender);
      user.klan = '';
      fs.writeFileSync(path.join(__dirname, '../database/klan.json'), JSON.stringify(klanList));

      m.reply('Anda telah keluar dari squad');
      break;

    case 'bubarsquad':
      if(user.klan === '') return m.reply('Anda belum memiliki squad');

      let klanToDisband = klanList.find(klan => klan.name === user.klan);
      if(!klanToDisband) return m.reply('Terjadi kesalahan, squad Anda tidak ditemukan');

      if(klanToDisband.owner !== m.sender) return m.reply('Hanya pemilik squad yang bisa membubarkan squad');

      klanList = klanList.filter(klan => klan.name !== user.klan);
      klanToDisband.members.forEach(member => {
        let memberData = global.db.data.users[member];
        if(memberData) memberData.klan = '';
      });

      fs.writeFileSync(path.join(__dirname, '../database/klan.json'), JSON.stringify(klanList));

      m.reply(`Squad ${user.klan} telah dibubarkan`);
      user.klan = '';
      break;

    default:
      m.reply(`
      Gunakan :\n
      ${usedPrefix + command} buatsquad <nama squad>
      ${usedPrefix + command} joinsquad <nama squad>
      ${usedPrefix + command} ceksquad
      ${usedPrefix + command} listsquad
      ${usedPrefix + command} keluarsquad
      ${usedPrefix + command} bubarsquad
      `);
  }
};

handler.help = ['squad'];
handler.tags = ['Yangtze'];
handler.command = ['squad'];

export default handler;
