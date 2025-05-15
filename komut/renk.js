const { ActionRowBuilder, StringSelectMenuBuilder, Events } = require("discord.js")
const info = require("../info.json")
module.exports.run = (client, message, args, interaction) => {
 if (message.member.id !== info.rolessahip) return;

 var rolesmesaj = `:white_small_square:  Kendinize uygun **Renk** rollerini aşağıdaki açılır menüden alabilirsiniz.`

 const takım = new ActionRowBuilder()
 .addComponents(
   new StringSelectMenuBuilder()
    .setCustomId('renkseç')
    .setPlaceholder('Renk Rolleri')
    .addOptions(
        {
            label: 'Kırmızı',
            value: 'renk1',
            emoji: '❤️'
        },
        {
            label: 'Beyaz',
            value: 'renk2',
            emoji: '🤍'

        },
        {
            label: 'Mavi',
            value: 'renk3',
            emoji: '💙'

        },
    )
    .addOptions(
        {
            label: 'Sarı',
            value: 'renk4',
            emoji: '💛'
        },
        {
            label: 'Yeşil',
            value: 'renk5',
            emoji: '💚'

        },
        {
            label: 'Temizle',
            description: 'Üzerinizden renk rolünü alır',
            value: 'renk6',
            emoji: '🚯'

        },
    )
 )
message.delete()
message.channel.send({ content: `${rolesmesaj}`, components: [takım] })

}
module.exports.name ="role-renk",
module.exports.use = ['rr','renk']
