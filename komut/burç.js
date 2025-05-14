const { ActionRowBuilder, StringSelectMenuBuilder, Events } = require("discord.js")
const info = require("../info.json")
module.exports.run = (client, message, args, interaction) => {
 if (message.member.id !== info.rolessahip) return;

 var rolesmesaj = `<:kardes_yildiz1:1368306970410483802> Aşağıda bulunan menüden **Burç** rollerinden dilediğinizi alabilirsiniz.`

 const takım = new ActionRowBuilder()
 .addComponents(
   new StringSelectMenuBuilder()
    .setCustomId('burcseç')
    .setPlaceholder('Burç Rolleri')
    .addOptions(
        {
            label: 'Akrep',
            value: 'b1',
            emoji: '♏',
        },
        {
            label: 'Boğa',
            value: 'b2',
            emoji: '♉'

        },
        {
            label: 'Başak',
            value: 'b3',
            emoji: '♍'

        },
    )
    .addOptions(
        {
            label: 'İkizler',
            value: 'b4',
            emoji: '♊'
        },
        {
            label: 'Kova',
            value: 'b5',
            emoji: '♒'

        },
        {
            label: 'Koç',
            value: 'b6',
            emoji: '♈'

        },
    )
    .addOptions(
        {
            label: 'Yengeç',
            value: 'b7',
            emoji: '♋'
        },
        {
            label: 'Oğlak',
            value: 'b8',
            emoji: '♑'
        },
        {
            label: 'Terazi',
            value: 'b9',
            emoji: '♎'
        },
    )
    .addOptions(
        {
            label: 'Aslan',
            value: 'b10',
            emoji: '♌'
        },
        {
            label: 'Balık',
            value: 'b11',
            emoji: '♓'
        },
        {
            label: 'Yay',
            value: 'b12',
            emoji: '♐'
        },
    )
    .addOptions(
        {
            label: 'Temizle',
            description: 'Üzerinizden oyun rollerini alır',
            value: 'b13',
            emoji: '🚯'
        },
    )
 )
message.delete()
message.channel.send({ content: `${rolesmesaj}`, components: [takım] })

}
module.exports.name ="role-burç",
module.exports.use = ['rb','burç']
