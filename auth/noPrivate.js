<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logs/global.js");
exports.noPrivate = async (WhatsBot, voxchat, update) => {
  if (!WhatsBot.isSudo)
    await WhatsBot.UserPrivate.findOne(
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logs/global.js");
exports.noPrivate = async (voxbot, voxchat, update) => {
  if (!voxbot.isSudo)
    await voxbot.UserPrivate.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      {
        Id: voxchat.sender,
      },
      async (error, user) => {
<<<<<<< HEAD
        if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
        if (!user) {
          new WhatsBot.UserPrivate({
=======
        if (error) return voxbot.handlerror(voxbot, voxchat, error);
        if (!user) {
          new voxbot.UserPrivate({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            Id: voxchat.sender,
            Amount: 1,
          })
            .save()
<<<<<<< HEAD
            .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
          return await WhatsBot.imagebutton(
            WhatsBot,
            voxchat,
            `*Dear* _${WhatsBot.pushname || WhatsBot.Tname}_
• This Private Is Being Guarded By WhatsBot Ai!
=======
            .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
          return await voxbot.imagebutton(
            voxbot,
            voxchat,
            `*Dear* _${voxbot.pushname || voxbot.Tname}_
• This Private Is Being Guarded By voxbot Ai!
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./public/magneum.png"
          );
        } else if (user.Amount < 4) {
          user.Amount = user.Amount + 1;
<<<<<<< HEAD
          await user.save().catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
          return await WhatsBot.imagebutton(
            WhatsBot,
            voxchat,
            `*Dear* _${WhatsBot.pushname || WhatsBot.Tname}_
• This Private Is Being Guarded By WhatsBot Ai!
=======
          await user.save().catch((error) => voxbot.handlerror(voxbot, voxchat, error));
          return await voxbot.imagebutton(
            voxbot,
            voxchat,
            `*Dear* _${voxbot.pushname || voxbot.Tname}_
• This Private Is Being Guarded By voxbot Ai!
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./public/magneum.png"
          );
        } else {
          await user
            .delete()
<<<<<<< HEAD
            .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
          return await WhatsBot
            .updateBlockStatus(voxchat.sender, "block")
            .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
=======
            .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
          return await voxbot
            .updateBlockStatus(voxchat.sender, "block")
            .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        }
      }
    );
};
