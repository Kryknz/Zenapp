//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, ᴠᴏxᴄ, update, store) => {
  try {
    if (!VօxB໐t.args[0] && isNaN(VօxB໐t.args[0])) {
      await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} ID_
> _get the ID from ${VօxB໐t.prefix}${pfname}chordlist command!_`
      );
    }

    let data = await VօxB໐t.axios.get(
      "http://app.chordindonesia.com/?json=get_post&id=" + VօxB໐t.args[0]
    );
    var clean = (data) => {
      let regex = /(<([^>]+)>)/gi;
      data = data.replace(/(<br?\s?\/>)/gi, " \n");
      return data.replace(regex, "");
    };
    let result = data.data;
    chordFound = "*• Chord Music Found*\n";
    chordFound += `*- Title:* ${result.post.title.replace(
      /[0-9]|[#&;]/gi,
      ""
    )}\n\n`;
    chordFound += clean(result.post.content);
    try {
      var кяуяєsi = await VօxB໐t.fetch(
        global.apiGet("https://wall.alphacoders.com/api2.0", "/get.php", {
          auth: "3e7756c85df54b78f934a284c11abe4e",
          method: "search",
          term: "random",
        })
      );
      var bson = await кяуяєsi.json();
      var bsoni =
        bson.wallpapers[Math.floor(Math.random() * bson.wallpapers.length)];
      await VօxB໐t.imgB(
        VօxB໐t,
        ᴠᴏxᴄ,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:* 
> ${chordFound}`,
        bsoni.url_image
      );
    } catch {
      await VօxB໐t.imgB(
        VօxB໐t,
        ᴠᴏxᴄ,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:* 
> ${chordFound}`,
        "./src/VօxB໐t_beta.jpg"
      );
    }
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
  }
};
