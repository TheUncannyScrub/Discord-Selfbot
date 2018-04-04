const Discord = require("discord.js"); // Discord Package
const client = new Discord.Client(); //Discord Client
const fs = require("fs"); //Json Read/Write 
const config = require('./config.json')

client.login(config.token)


// Variables

let version = "0.0.1"
let botname = "ScrubBot"
let prefix = config.prefix





client.on('ready', () =>{
    console.log(`[START] Bot Starting Up`)
    console.log(`[ BOT ] Bot is online`)
    setTimeout(function(){
    console.log(`[ BOT ] Bot connected to ${client.user.username}'s Account Succesfully`)
    }, 500)
    console.log(`[ BOT ] Memory Usage: ${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)} MB`)
    setTimeout(function(){
        console.log(`[ BOT ] Bot is now awaiting commands`)
    },1000)
    

});


client.on('guildCreate', guild =>{
    console.log(`[ LOG ] You were added to or joined ${guild.name} (${guild.id})`)
});
client.on('guildDelete', (guild) =>{
    console.log(`[ LOG ] You were removed from or you left Guild: ${guild.name} (${guild.id})`)
});
client.on('reconnecting',  ()=>{
    console.log(`[ LOG ] Reconnecting to WebSocket`)
});
client.on('resume',  ()=>{
    console.log(`[ LOG ] Resumed Connection to WebSocket`)
});
client.on('disconnect',  ()=>{
    console.log(`[ LOG ] Disconnected from WebSocket`)
});



client.on('message', message =>{
    if(message.author == client.user && message.content.startsWith(prefix)){
        console.log(`[ CMD ] ${message}`)
    }
});


client.on('message', message =>{
if(message.author != client.user) return;
if(!message.content.startsWith(config.prefix)) return;

const args = message.content.split(/[ ]+/);



if(message.content.startsWith(config.prefix + "test")){
    message.edit(`Test Complete ${client.pings}`)
    console.log('[DEBUG] Test Complete')


}


if(message.content.startsWith(prefix + "prefix")){
    config.prefix = args[1]
    fs.writeFileSync('./config.json', JSON.stringify(config, null, 2))
    console.log(`[ LOG ] Prefix is now ${args[1]}`)
    message.delete(50)
}

if(message.content.startsWith(prefix + "uptime")){
    message.delete(50)
    let date = new Date(null);
    date.setMilliseconds(client.uptime);
    let hours = date.toISOString().substr(11, 2);
    let minutes = date.toISOString().substr(14, 2);
    let seconds = date.toISOString().substr(17, 2);
    console.log(`[DEBUG] Uptime: ${hours} Hours | ${minutes} Minutes | ${seconds} Seconds`)
}

if(message.content.startsWith(config.prefix + "help")){
    message.delete(50)

    if(args.length === 1){
        const embed = new Discord.RichEmbed()
        .setAuthor(`ScrubBot (${version}) - a Text based Discord SelfBot`)
        .setTitle(`Running on ${client.user.username}'s Account`)
        .setDescription(`To see a list off usable commands please do *${config.prefix}help commands*`)
        .setColor(0x3CE1F7)
    
    
        message.channel.send(embed)
    }
    if(args.includes("commands")){
        const embed = new Discord.RichEmbed()
        .setAuthor(`ScrubBot (${version}) - Commands`)
        .setDescription(`This SelfBot has many types of commands to see more specific ones, please add a category to the end to see which commands are available! *Example: ${prefix}help meme*`)
        .addField(`Commands categories:`, ` bot \n meme`)
        .setColor(0x3CE1F7)
        message.channel.send(embed)
    }
    if(args.includes("meme")){
        const embed = new Discord.RichEmbed()
        .setAuthor(`ScrubBot (${version}) - Commands`)
        .addField(`Single Line Ascii Art`, `${prefix}lenny \n${prefix}idc \n${prefix}doubleflip \n${prefix}tableflip \n${prefix}unflip \n${prefix}gimme \n${prefix}serious \n${prefix}money \n`)
        .addField(`Large ASCII Art`,`${prefix}facepalm \n${prefix}troll`)
        .setColor(0x3CE1F7)
        message.channel.send(embed)
    }
    if(args.includes("bot")){
        const embed = new Discord.RichEmbed()
        .setAuthor(`ScrubBot (${version}) - Commands`)
        .setDescription(` 
         **${prefix}prefix** - Sets the prefix for the bot - Example: ${prefix}prefix [prefix] \n **${prefix}help** - Shows the commands available and their categories \n
        `)
        .setColor(0x3CE1F7)
        message.channel.send(embed)
    }

}




















// SMALL ASCII TEXT
if(message.content.startsWith(config.prefix + "lenny")){
    message.channel.send(`( ͡° ͜ʖ ͡°)`)
    message.delete(50)
}
if(message.content.startsWith(config.prefix + "idc")){
    message.channel.send(`╭∩╮（︶︿︶）╭∩╮`)
    message.delete(50)
}
if(message.content.startsWith(config.prefix + "doubleflip")){
    message.channel.send(`┻━┻︵ \(°□°)/ ︵ ┻━┻`)
    message.delete(50)
}
if(message.content.startsWith(config.prefix + "tableflip")){
    message.channel.send(`(╯°□°）╯︵ ┻━┻`)
    message.delete(50)
}
if(message.content.startsWith(config.prefix + "unflip")){
    message.channel.send(`┬──┬ ノ( ゜-゜ノ)`)
    message.delete(50)
}
if(message.content.startsWith(config.prefix + "gimme")){
    message.channel.send(`༼ つ ◕_◕ ༽つ`)
    message.delete(50)
}
if(message.content.startsWith(config.prefix + "serious")){
    message.channel.send(`(ಠ_ಠ)`)
    message.delete(50)
}
if(message.content.startsWith(config.prefix + "money")){
    message.channel.send("[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]")
    message.delete(50)
}








// LARGE ASCII TEXT
if(message.content.startsWith(config.prefix + "facepalm")){
    message.channel.send(`
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄▄▄░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███▀█░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░██░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███░░██░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░▄██░░░░██░░
    ░░░░░░░░░░░░░░░░▄▄█▀▀▀▀█▄▄▄▄███▄░░░██░░
    ░░░░░░░░░░░░░▄█▀░░░░░░░░░▀▀▀▀█░▀█░░██░░
    ░░░░░░░░░░░░█▀░░░░░░░░░░░░░░░▀█▄█▀▀▀░░░
    ░░░░░░░░░░░▄▀░░░░░░░░░░░░░░░░▀█▄░░░░░░░
    ░░░░░░░░░░░▀█▄░█░░▄▀░░░░░░░▄▄█░░░░░░░░░
    ░░░░░░░░▄▄▄▄█▀▀▀██▄▄░░░░░░▄▀░░░░░░░░░░░
    ░░░░▄▄██▄▀▀░░░░░█▀░░░░░░▄██▄░░░░░░░░░░░
    ░░▄██▀▀░░░░░░░░▄█░░░░░▄█▀▄█░▀▀█▄▄▄▄▄▄▄▄
    ░██▀░░░░░░░░▄██░░░░░░▄▀▄▄▀░░░░░░░░░░░░░
    █▀▀░░░░░░▄█▀▄░▀▄▄▄▄██▀▀▀░░░░░█░░░░░░░░░
    █░░░░░▄▄▀░░░░█░░░░░░░░░░░░░░░▀░░░░░░░░░
    ░▀▀▀▀▀▀░░░░░░░█░░░░░░░░░░░░░░░▀▀█▀▀▀▀▀▀
    ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░█▀░░░░░░
    ░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░▄█░░░░░░░
    `)
    message.delete(50)
}
if(message.content.startsWith(config.prefix + "troll")){
    message.channel.send(`
        ░░░░▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄
    ░░░░█░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░▀▀▄
    ░░░█░░░▒▒▒▒▒▒░░░░░░░░▒▒▒░░█
    ░░█░░░░░░▄██▀▄▄░░░░░▄▄▄░░░█
    ░▀▒▄▄▄▒░█▀▀▀▀▄▄█░░░██▄▄█░░░█
    █▒█▒▄░▀▄▄▄▀░░░░░░░░█░░░▒▒▒▒▒█
    █▒█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄▒█
    ░█▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
    ░░█░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
    ░░░█░░██░░▀█▄▄▄█▄▄█▄████░█
    ░░░░█░░░▀▀▄░█░░░█░███████░█
    ░░░░░▀▄░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
    ░░░░░░░▀▄▄░▒▒▒▒░░░░░░░░░░█
    ░░░░░░░░░░▀▀▄▄░▒▒▒▒▒▒▒▒▒▒░█
    ░░░░░░░░░░░░░░▀▄▄▄▄▄░░░░░█
    `)
    message.delete(50)
}





}); 

