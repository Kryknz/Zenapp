`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
require(`../../Sakura🛰️Server/konfs`);
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Pokemon = require(`../../Sakura🍃Goose/pokemon`);
const Economy = require(`../../Sakura🍃Goose/economy`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const fetch = require(`node-fetch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require(`parse-ms`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
const { PokeList } = require("../../Sakura🛰️Server/pokelist");
`|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!`
        );
      }
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      const hold = require(`../../Sakura🛰️Server/Hold`);
      hold.Hold(ֆǟӄʊʀǟ);
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      let BasePoke = PokeList[Math.floor(Math.random() * PokeList.length)];
      let Worth = Math.ceil(Math.random() * 500);
      Pokemon.findOne(
        {
          ID: ꜱᴇɴᴅᴇʀɪᴅ,
        },
        async (Error, userPoke) => {
          console.log(userPoke);
          if (Error) console.log(Error);
          if (!userPoke) {
            var newPokeUser = new Pokemon({
              ID: ꜱᴇɴᴅᴇʀɪᴅ,
              Pokemons: 0,
              CurrentLimitTime: Date.now(),
              PermanentLimitTime: 21600000,
            });
            await newPokeUser
              .save()
              .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            return Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════════◇╝

╔════◇🌿𝗡𝗮𝗺𝗲: You Found Poop!
║◇ *Type:* Worthless
║◇ *Worth:* 0coins
╚════════════╝`
            );
          } else {
            Economy.findOne(
              {
                ID: ꜱᴇɴᴅᴇʀɪᴅ,
              },
              async (Error, userEco) => {
                if (Error) console.log(Error);
                if (!userEco) {
                  var newUser = new Economy({
                    ID: Receiver,
                    money: 0,
                    daily: 0,
                    timeout: 0,
                    fish: 0,
                    fishdone: 0,
                    fishtimeout: 0,
                    workdone: 0,
                    worktimeout: 0,
                  });
                  await newUser
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🍹𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍹

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${personreceived}
╚════════════╝`
                  );
                } else {
                  let res = await fetch(
                    API(`https://some-random-api.ml`, `/pokedex`, {
                      pokemon: BasePoke.toLowerCase(),
                    })
                  );
                  let PokemonData = await res.json();
                  console.log(PokemonData);
                  `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
                  if (
                    userPoke.PermanentLimitTime -
                      (Date.now() - userPoke.CurrentLimitTime) >
                    0
                  ) {
                    let time = ms(
                      userPoke.PermanentLimitTime -
                        (Date.now() - userPoke.CurrentLimitTime)
                    );
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🍹𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍹

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗛𝘂𝗻𝘁𝗶𝗻𝗴 𝗦𝘁𝗮𝘁𝘂𝘀: You've recently went in a forest!
║🪵 𝗡𝗲𝘅𝘁 𝗛𝘂𝗻𝘁𝗶𝗻𝗴: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
                    );
                    `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
                  } else {
                    userEco.money = Worth;
                    userPoke.CurrentLimitTime = Date.now();
                    await userEco
                      .save()
                      .catch((Error) =>
                        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                    await userPoke
                      .save()
                      .catch((Error) =>
                        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                    const media = await ӄʀǟӄɨռʐ.prepareMessage(
                      ֆǟӄʊʀǟ.chatId,
                      { url: PokemonData.sprites.normal },
                      MessageType.image,
                      { mimetype: Mimetype.png }
                    );
                    return await ӄʀǟӄɨռʐ
                      .sendMessage(
                        ֆǟӄʊʀǟ.chatId,
                        {
                          contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════════◇╝

╔════◇🌿𝗡𝗮𝗺𝗲: ${PokemonData.name.toString().toUpperCase()}
║◇ *Type:* ${PokemonData.type}
║◇ *Abilities:* ${PokemonData.abilities}
║◇ *Base Exp:* ${PokemonData.base_experience}
║◇ *Gender:* ${PokemonData.gender}
║◇ *Worth:* ${Worth}coins
╚════════════╝

𝐁𝐮𝐭𝐭𝐨𝐧 𝐓𝐨 𝐋𝐞𝐚𝐫𝐧 𝐌𝐨𝐫𝐞👇🏻
`.trim(),
                          footerText: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭\n${Clock}`,
                          buttons: [
                            {
                              buttonId: `${ᴋᴇɪ}pokedex ${BasePoke.toLowerCase()}`,
                              buttonText: {
                                displayText: `${ᴋᴇɪ}pokedex ${BasePoke.toLowerCase()}`,
                              },
                              type: 1,
                            },
                          ],
                          headerType: 4,
                          imageMessage: media.message.imageMessage,
                        },
                        MessageType.buttonsMessage,
                        {
                          quoted: chat,
                          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
                        }
                      )
                      .catch((Error) =>
                        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                  }
                }
              }
            );
          }
        }
      );
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
`|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
