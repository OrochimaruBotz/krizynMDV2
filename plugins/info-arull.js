let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Humanz
║│➸ ```UMUR``` : 18thn
║│➸ ```ASAL``` : Jawa Timur
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/F6CAAOhrORm1sPdq6cRKAS
║│➸ ```ISTAGRAM``` : -
║│➸ ```WHATSAPP``` : http://wa.me/6288804947282
╰────────❉
`.trim(), m)
}

handler.help = ['infoHumanz']
handler.tags = ['main', 'utama']
handler.command = /^(infoHumanz|inforozi)$/i

handler.exp = 150

module.exports = handler
