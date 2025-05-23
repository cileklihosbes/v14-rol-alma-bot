const { ActionRowBuilder, StringSelectMenuBuilder, Events } = require("discord.js")
const info = require("../info.json")
module.exports.run = (client, message, args, interaction) => {
 if (message.member.id !== info.rolessahip) return;

 var rolesmesaj = `:white_small_square:  Kendinize uygun **İlişki** rollerini aşağıdaki açılır menüden alabilirsiniz.`

 const iliski = new ActionRowBuilder()
 .addComponents(
   new StringSelectMenuBuilder()
    .setCustomId('iliskiseç')
    .setPlaceholder('İlişki Rolleri')
    .addOptions(
        {
            label: 'Sevgilim var',
            value: 'i1',
            emoji: '👩🏻‍❤️‍👨🏻'
        },
        {
            label: 'Sevgilim yok',
            value: 'i2',
            emoji: '💔'

        },
        {
            label: 'Temizle',
            description: 'üzerinizden ilişki rolünü alır',
            value: 'i3',
            emoji: '🚯'

        },
    )
 )
message.delete()
message.channel.send({ content: `${rolesmesaj}`, components: [iliski] })

}
module.exports.name ="role-ilişki",
module.exports.use = ['ri','ilişki']
