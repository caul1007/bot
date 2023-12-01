let handler = async (m, { conn }) => {
conn.reply(m.chat, `_List Group VynaaMD_
*Offcial Group*
${link.gc}

*Abarai Renji. Telegram*
https://t.me/Renjii1ii
`, m)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i

export default handler 
