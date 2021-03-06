const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const prefix = '+'

const config = require('./config.json')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.on('ready', () => {
    client.user.setActivity('A el que se gasta 6 de elixir', {type: "WATCHING"})
    console.log('A juga')
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()

    if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Espera que alguien me quiso poner con 5 de elixir (Error)');
	}

    if(command === 'github') {
        message.channel.send('Acá esta el codigo del bot: https://github.com/iYae/gigante')
    }
})

client.login(config.token)