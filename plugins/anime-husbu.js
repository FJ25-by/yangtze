
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply('Tunggu Sebentar...')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  let dann = `Nih Husbu Lu -_-`
  conn.sendFile(m.chat, pickRandom(animemiku), 'husbu.jpg', `${dann}`, m)
}
handler.help = ['husbu']
handler.tags = ['nime']
handler.command = /^(husbu)$/i

handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const animemiku = [

"https://i.pinimg.com/280x280_RS/dc/e0/13/dce013e163417307dcf2f4a5e1f39ad8.jpg",
"https://i.pinimg.com/236x/00/c0/b5/00c0b519a1747dd9131b798c7e0b9a7a.jpg",
"https://i.pinimg.com/736x/8c/71/b4/8c71b427f3bd29fffd666faa25d60609.jpg",
"https://i.pinimg.com/originals/26/64/9d/26649dc61de207490f7ca99b0fa391de.jpg",
"https://i.pinimg.com/736x/05/00/42/05004293e40ea9d8e3361f15fbad50bb.jpg",
"https://i.pinimg.com/474x/c8/a1/d8/c8a1d8a53ad702b46f431dce699febef.jpg",
"https://i.pinimg.com/236x/96/05/6c/96056c32905c0790a99dade5e4a4fb9a.jpg",
"https://i.pinimg.com/originals/86/a9/bd/86a9bd296a5ea476877985bccc0eeb0d.jpg",
"https://i.pinimg.com/474x/f0/18/3c/f0183c8bb0341c1a381ee2d08b8a6ff0.jpg",
"https://i.pinimg.com/474x/71/69/f2/7169f27907a5eff90252ad243808ff3a.jpg",
"https://i.pinimg.com/736x/30/79/ec/3079ec9602b5a7d2c052848ab5b5664a.jpg",
"https://i.pinimg.com/originals/a7/29/f3/a729f305c31e3cb23eb329d828fcb742.jpg",
"https://i.pinimg.com/originals/69/04/c3/6904c3c7c907a79431373036b7a8711d.jpg",
"https://i.pinimg.com/736x/1d/e4/64/1de4642e8b182347aa5d7272734e3831.jpg",
"https://i.pinimg.com/280x280_RS/f9/cc/2c/f9cc2cd1c195f57a91db5ad4c1f7d699.jpg",
"https://i.pinimg.com/236x/73/2f/88/732f88262bcbdf7004a92c8c5b8bf515.jpg",
"https://i.pinimg.com/564x/5a/50/70/5a5070206d76dc5988ec068f46084a5d.jpg",
"https://i.pinimg.com/564x/03/1a/77/031a773dac089f92243198d929971d5b.jpg",
"https://i.pinimg.com/originals/00/bf/1f/00bf1fe39a252fd39ad45776c643b819.jpg",
"https://i.pinimg.com/736x/5e/f3/ee/5ef3eeed199249a59e08642aa2d2207c.jpg",
"https://i.pinimg.com/280x280_RS/31/29/f6/3129f6cbc707d62570c0387ff97edf99.jpg",
"https://i.pinimg.com/280x280_RS/c9/83/06/c983068c116ca6aa3efae7ae1e6bfb97.jpg",
"https://i.pinimg.com/280x280_RS/ce/26/56/ce2656231250da89150ee60e06f62b89.jpg",
"https://i.pinimg.com/originals/16/db/7b/16db7b4e5164fa8f5088b506c402e73c.jpg",
"https://i.pinimg.com/736x/69/c0/7a/69c07a5d476944709b105e3f0e73d9ae.jpg",
"https://i.pinimg.com/236x/77/e2/78/77e278a3110afc9e950ec48b0456bd41.jpg",
"https://i.pinimg.com/736x/4b/3d/64/4b3d64f84344c9554954bade7a693420.jpg",
"https://i.pinimg.com/236x/a0/7e/53/a07e5380e72736854ff7092933fc3fd0.jpg",
"https://i.pinimg.com/originals/c1/e2/79/c1e27959e8e46576494e740ac3fef4b3.jpg",
"https://i.pinimg.com/originals/ee/52/37/ee5237610aa24f278abb8f807e6fa685.jpg",
"https://i.pinimg.com/736x/a3/89/09/a389098f371f4c80194eced6f6f1dac3.jpg",
"https://i.pinimg.com/originals/f3/96/2e/f3962ebd97aa51f9e1f330791304a27c.jpg",
"https://i.pinimg.com/280x280_RS/c8/c2/2f/c8c22f25f9df9bf3ab03019e142d19d1.jpg",
"https://i.pinimg.com/280x280_RS/8a/e4/a2/8ae4a201e9b8badb804cfb3b65982728.jpg",
"https://i.pinimg.com/736x/d4/4c/7a/d44c7af872a27eab8d54e70f4dfafbb0.jpg",
"https://i.pinimg.com/originals/eb/5c/b2/eb5cb2ddcd8f4708bf4144f658d591c2.jpg",
"https://i.pinimg.com/564x/77/bb/10/77bb10c65f73e74ad164010b1a96554f.jpg",
"https://i.pinimg.com/236x/7e/14/9e/7e149e1fbb817ede1e489f5512cbc7dd.jpg",
"https://i.pinimg.com/originals/16/de/73/16de739b9ead960cf60bd2029847b958.jpg",
"https://i.pinimg.com/280x280_RS/c7/d8/2d/c7d82dfeb55aec698e9f939171faa1a7.jpg",
"https://i.pinimg.com/originals/b3/b4/e0/b3b4e0cf63daf5bdbc1c4da23da3c7cc.jpg",
"https://i.pinimg.com/280x280_RS/70/8e/92/708e920318c59de32f7d89ab6d4701fa.jpg",
"https://i.pinimg.com/736x/9e/a3/7b/9ea37bb0330d03d87a8d14a429291c6e.jpg",
"https://i.pinimg.com/originals/45/26/a0/4526a0eef6529eaf8e809751e0e4809b.jpg",
"https://i.pinimg.com/280x280_RS/cc/a9/49/cca94970d39e5e3df8da246ef44833a0.jpg",
"https://i.pinimg.com/564x/ae/01/94/ae019489d096e88083c2a2b875f7557a.jpg",
"https://i.pinimg.com/736x/6b/41/a8/6b41a87deef4a76a904be176c5e4a75e.jpg",
"https://i.pinimg.com/564x/a0/33/6d/a0336d6ed85f329059eae57fc5e2501e.jpg",
"https://i.pinimg.com/736x/59/82/f0/5982f0dcf9f0bf3b3e6c626eb3bc5877.jpg",
"https://i.pinimg.com/564x/3c/4e/66/3c4e66ee61c3844bd31909a8cce1c9d4.jpg",
"https://i.pinimg.com/originals/82/3e/45/823e454fe6f44d56676d5bae778a0511.jpg"},
"https://i.pinimg.com/280x280_RS/f5/00/55/f500557d046cd40de346015973255951.jpg",
"https://i.pinimg.com/originals/87/d3/32/87d3326039e7cd064e0ece96ef48f8e0.jpg",
"https://i.pinimg.com/236x/e7/f0/5a/e7f05a8d2b374053836d5c1d04fce0f5.jpg",
"https://i.pinimg.com/280x280_RS/d3/96/fb/d396fb3e1a82dd19b4ede130df01a0be.jpg",
"https://i.pinimg.com/564x/ce/c3/01/cec301d511fa90a03132e864a5c4802d.jpg",
"https://i.pinimg.com/originals/12/82/72/128272b11617745e53e0adb834aa0ee4.jpg",
"https://i.pinimg.com/736x/3d/48/66/3d4866d800075c42fddba25aa2a5dada.jpg",
"https://i.pinimg.com/originals/aa/a0/51/aaa0513adb0d6d69d2559c499caa6658.jpg",
"https://i.pinimg.com/736x/f1/9a/21/f19a211124679565dfb74cee8e43b070.jpg",
"https://i.pinimg.com/originals/1c/62/ce/1c62ce261cd133645fd344bc87fcf947.jpg",
"https://i.pinimg.com/280x280_RS/26/c1/45/26c145484dd2bfc23a191a31cde0b1d2.jpg",
"https://i.pinimg.com/280x280_RS/1b/2e/33/1b2e3341debc748eb919880e2e725caf.jpg",
"https://i.pinimg.com/originals/7b/df/e6/7bdfe6870d38bfe32217687ac764b73f.jpg",
"https://i.pinimg.com/236x/d7/be/1c/d7be1cbefcfa89bf0db5172fdada0a8f--jellal-fairytail.jpg",
"https://i.pinimg.com/280x280_RS/60/9d/05/609d05a174162208ae1b445e3588eee5.jpg",
"https://i.pinimg.com/280x280_RS/5a/58/b6/5a58b6b6c3f9fce5fa7607f7b0d2c6bd.jpg",
"https://i.pinimg.com/564x/c2/d5/eb/c2d5eb37e4156416cc3c312cd286e975.jpg",
"https://i.pinimg.com/280x280_RS/91/82/89/918289aa65805ef5b9642f1a193ef9fd.jpg",
"https://i.pinimg.com/736x/fa/ea/14/faea1456e5d8cb90428cd6919589644c.jpg",
"https://i.pinimg.com/originals/6d/d4/52/6dd452f1ba7ea1dd0b024ebc8b135b2f.jpg",
"https://i.pinimg.com/280x280_RS/5d/47/dd/5d47dd91ddad7fc0aa758ebd7632a59c.jpg",
"https://i.pinimg.com/280x280_RS/7a/90/6f/7a906f4a7b7c465e3d96d1820cf81262.jpg",
"https://i.pinimg.com/736x/48/8b/2f/488b2fae137ff8c3d07ce4fcaa3a8ff2.jpg",
"https://i.pinimg.com/236x/0a/fa/68/0afa680e2d8ea3851fff2bc45d88a615.jpg",
"https://i.pinimg.com/originals/a0/d7/76/a0d776890f9bb92e15fcd68c5c364e3c.jpg",
"https://i.pinimg.com/236x/b7/1a/41/b71a410d425a37d314100eea90bc0231--fairy-tail-couples-anime-love.jpg",
"https://i.pinimg.com/280x280_RS/29/7d/56/297d56ad4abec2b60744ca42c9f2c8d5.jpg",
"https://i.pinimg.com/736x/de/d8/20/ded82074f46f6bd4140c852417148e90.jpg",
"https://i.pinimg.com/280x280_RS/be/14/b6/be14b6bf498beb621a69992045569afc.jpg",
"https://i.pinimg.com/originals/81/d9/d8/81d9d8099718ad250cb00107430aba04.jpg",
"https://i.pinimg.com/280x280_RS/29/0d/94/290d941059844e9e499161241c2d8dee.jpg",
"https://i.pinimg.com/736x/7a/2c/fe/7a2cfe502fb0728825a16dcdf6c7a33a.jpg",
"https://i.pinimg.com/originals/f9/23/73/f923739cdd77fa008885fa30f8951b26.jpg",
"https://i.pinimg.com/280x280_RS/53/8b/08/538b0823f693344f69c607224e05e411.jpg",
"https://i.pinimg.com/280x280_RS/3b/f9/dc/3bf9dc48ec2f81d87d4453568e3be628.jpg",
"https://i.pinimg.com/originals/19/98/ed/1998edf0d0b5a46a2080d8553789eb13.jpg",
"https://i.pinimg.com/originals/c0/76/7b/c0767b61a3364035afcf3925c9181bd4.jpg",
"https://i.pinimg.com/474x/98/2c/9e/982c9ee9ad7e2708f28309cef0fef483.jpg",
"https://i.pinimg.com/originals/0f/71/62/0f7162b018419615f9ebc25bfade3334.jpg",
"https://i.pinimg.com/236x/c3/d2/f1/c3d2f19591f20ca4b721173a42580254.jpg",
"https://i.pinimg.com/564x/50/fb/fe/50fbfe4484f1329eff526a9406608992.jpg",
"https://i.pinimg.com/736x/94/bc/05/94bc056bc9dc684660e82084605a7b32.jpg",
"https://i.pinimg.com/736x/14/25/f3/1425f35b1ca40551c0fa70881dfe1147.jpg",
"https://i.pinimg.com/474x/e8/75/6f/e8756f2a3a62c01fd37daa58afb85a32.jpg",
"https://i.pinimg.com/originals/26/8b/9d/268b9d6ed3fb6646f7a3640bb1140e11.png",
"https://i.pinimg.com/736x/fe/23/0e/fe230ebb00eb5e05b9e6fa00221c5915.jpg",
"https://i.pinimg.com/474x/5b/07/df/5b07df4748394c1c2509116a75cea3a6.jpg",
"https://i.pinimg.com/280x280_RS/4c/84/09/4c84090ffe08d8eb0b0c5739e172ef02.jpg",
"https://i.pinimg.com/originals/08/69/74/0869747e3a840451ad1471b07f65fa4e.jpg"
]