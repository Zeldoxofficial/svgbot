const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
const Canvas = require("canvas"); 
const token = 'BOT_TOKEN';
const antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
const antijoin = JSON.parse(fs.readFileSync('./antijoin.json' , 'utf8'));
let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));
client.on('ready', () => {

  client.user.setGame (`${prefix}help | By: Zeldox55`,'https://www.twitch.tv/peery13');

  console.log('---------------');

  console.log(' Bot Is Online')

  console.log('---------------')
 
 console.log('by zeldox55')

});


// Database
let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));
// سوي ملف وسميه prefix.json
// البرفكس الاساسي هو !
 
client.on("message", message => {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!prefixes[message.guild.id]) prefixes[message.guild.id] = {
        prefix: '#',
    };
    var prefix = prefixes[message.guild.id].prefix;
    var setp = prefixes[message.guild.id];
    if (message.content.startsWith(prefix + 'setp')) {
        if (!message.member.hasPermission(`MANAGE_GUILD`)) return message.reply(`**:x: Error: You do not have the required permissions: Manage Server.**`);
 
        let args = message.content.split(" ").slice(1);
 
        if (!args.join(" ")) return message.reply(`**:x: Error: Say The Prefix Please.**`);
 
        message.channel.send(`** Successfully set the new Prefix to  ${args.join(" ")} **`);
        setp.prefix = args.join();
 
    }
 
    fs.writeFile("./Database/prefix.json", JSON.stringify(prefixes), (err) => {
        if (err) console.error(err);
    });
});






















const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "welcome");
    welcome.send(` ||${member.user.tag}|| تمت دعوتك بواسطة ||${inviter.tag}|| invites =  ||${invite.uses}|| `)
  });
});





var prefix = prefixes[message.guild.id].prefix;
client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
});


  const devs = ['411613098923786241'];

client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!devs.includes(message.author.id)) return message.channel.send("<@429972030092476437> only this guy can do restart the bot so don't try again 😉.");
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/DynastyShop');

    } else if(message.content.startsWith(prefix + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(prefix + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` 🎶 أختر أحد الحالات');
        client.user.setStatus(argresult);


    }

  });

    


        

client.login(process.env.BOT_TOKEN);
