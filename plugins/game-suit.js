let handler = async (m, { text, usedPrefix }) => {
    let salah = `💬 Pilihan Yang Tersedia\n✂️Gunting\n📝Kertas\n🪨Batu\n\n${usedPrefix}suit gunting\n\nPake Spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting'
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nKamu: ${text}\nYangtze: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Kamu Menang! +Rp1000\nKamu: ${text}\nYangtze: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nYangtze: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Kamu Menang! +Rp1000\nKamu: ${text}\nYangtze: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nYangtze: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`Kamu Menang! +Rp1000\nKamu: ${text}\nYangtze: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nYangtze: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i

export default handler
