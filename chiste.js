try {
module.exports = {
    name: 'chiste',
    description: 'Chiste random ja ja ja',
    execute(message, args) {
        let replies = ['¿Que le dijo Jaimito a pochi?\nSoy jaime y vos? \n GUAU!', 'pov: Gigante noble *explota*', 'Kroleo tronk', 'Niño con cancer: Doctor, quiero conocer algun futbolista\n -Tranquilo, ya vas a conocer a uno\n -¡A QUIEN! :D\n -A Maradona :(', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4LqbkhWeFEb7ilCR74UWC3ovayjde1_fSZA&usqp=CAU Hay un impostor ._.']
        let res = Math.floor(Math.random() * replies.length)

        message.channel.send(res)
    }
}
} catch(error) {
    console.log(error)
}