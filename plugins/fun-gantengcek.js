let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(cantikk)}`, m)
}
handler.help = ['gantengcek']
handler.tags = ['fun']
handler.command = /^(gantengcek|cekganteng)$/i

handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let cantikk = [
'Ganteng Level : 4%\n\nINI MUKA ATAU SAMPAH?!',
'Ganteng Level : 7%\n\nSerius ya,, Lu ampir mirip kayak Monyet!',
'Ganteng Level : 12%\n\nMakin lama liat muka lo gw bisa muntah!',
'Ganteng Level : 22%\n\nMungkin karna lo sering berbuat maksiat jadi kurang goodlooking😂',
'Ganteng Level : 27%\n\nKeknya bakal susah dapet jodoh lu,, jangan dosa mulu',
'Ganteng Level : 35%\n\nYang sabar ya om',
'Ganteng Level : 41%\n\nSemoga diberkati mendapat jodoh',
'Ganteng Level : 48%\n\nDijamin cewek gabakal deketin lo',
'Ganteng Level : 56%\n\nLu Setengah GoodLooking :v',
'Ganteng Level : 64%\n\nCukuplah buat jadi badut',
'Ganteng Level : 71%\n\nLumayan ganteng juga lu ya buat jadi simpenan',
'Ganteng Level : 2%\n\nAWOAKAK KEBANYAKAN COLI!!!',
'Ganteng Level : 4%\n\nRajinlah ibadah!!!',
'Ganteng Level : 1%\n\nSelalu ikhtiar dan tawakal dalam menjalankan hidup!!!',
'Ganteng Level : 6%\n\nAWOAKAK BURIQQQ!!!',
'Ganteng Level : 77%\n\nGak akan Salah Lagi dah bang, lu goodmoney',
'Ganteng Level : 83%\n\nDijamin cewek gak akan ninggalin lu tanpa mikir mikir',
'Ganteng Level : 89%\n\ncewek2 pasti auto salfok klo ngeliat lo bang!',
'Ganteng Level : 94%\n\nAARRGGHHH bikin cewe meleleh!!!',
'Ganteng Level : 100%\n\nLU EMANG COWOK TERGANTENG YANG PERNAH ADA, GAS CARI CEWE DI MICHAT AUTO DAPET GRATIS, PASTI DIA LANGSUNG TERIMA',
]
