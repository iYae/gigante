module.exports = {
    name: 'imagen',
    description: 'Mando mi foto mas facha',
    execute(message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor('Yo, el mas facha\n iYae obvio')
            .setImage('https://i.imgur.com/GvuYKv4.png')
            .setTitle('Mi foto mas facha')
            .setDescription('Estoy hermoso, o no?');
        message.channel.send(embed)
    }
}