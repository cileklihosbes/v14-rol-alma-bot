const { ActionRowBuilder, StringSelectMenuBuilder, Events } = require("discord.js")
const info = require("../info.json")
module.exports.run = (client, message, args, interaction) => {
 if (message.member.id !== info.rolessahip) return;

 var rolesmesaj = `:white_small_square: Kendinize uygun **Oyun** rollerini aşağıda ki açılır menüden alabilirsiniz.`

 const takım = new ActionRowBuilder()
 .addComponents(
   new StringSelectMenuBuilder()
    .setCustomId('oyunseç')
    .setPlaceholder('Oyun Rolleri')
    .addOptions(
        {
            label: 'Mobile Legends',
            value: 'oyun1',
            emoji: '🕹️',
        },
        {
            label: 'CS:GO',
            value: 'oyun2',
            emoji: '🕹️'

        },
        {
            label: 'PUBG',
            value: 'oyun3',
            emoji: '🕹️'

        },
    )
    .addOptions(
        {
            label: 'League of Legends',
            value: 'oyun4',
            emoji: '🕹️'
        },
        {
            label: 'Valorant',
            value: 'oyun5',
            emoji: '🕹️'

        },
        {
            label: 'Gta V',
            value: 'oyun6',
            emoji: '🕹️'

        },

        },
        {
            label: 'Minecraft',
            value: 'oyun7',
            emoji: '🕹️'

        },
    )
    .addOptions(
        {
            label: 'Temizle',
            description: 'Üzerinizden oyun rollerini alır',
            value: 'oyun8',
            emoji: '🚯'
        },
    )
 )
message.delete()
message.channel.send({ content: `${rolesmesaj}`, components: [takım] })

}
module.exports.name ="role-oyun",
module.exports.use = ['ro','oyun']
