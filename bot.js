const Discord = require('discord.js');
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
var canvas = require("canvas");
const canvas = Canvas.createCanvas({options});
const token = 'BOT_TOKEN';
const prefix = '+';
const antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
const antijoin = JSON.parse(fs.readFileSync('./antijoin.json' , 'utf8'));
let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));
const WelcomeChannel = JSON.parse(fs.readFileSync('./welcomer.json', "utf8")) 


client.on('ready', () => {

  client.user.setGame (`${prefix}help | Dev Zeldox55`,'https://www.twitch.tv/peery13');

  console.log('---------------');

  console.log(' Bot Is Online')

  console.log('---------------')
 
 console.log('by zeldox55')

});
 























  client.on("message", message =>{
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  if(command === "welcome") {
      let welcomechann = args.join(" ");
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You must have the **`ADMINISTRATOR`** permission!")
      if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply("I must have the **`ADMINISTRATOR`** permissions!")
      if(!message.member.guild.channels.find(x => x.name === welcomechann)) return message.reply("Usage: **`(channel name)`**");
      message.reply("تمتبنجاح الويلكم بـ**`" + welcomechann + "`**")
      WelcomeChannel[message.guild.id] = {
          guild: message.guild.name,
          channel: welcomechann
      }
      fs.writeFile("./welcomer.json", JSON.stringify(WelcomeChannel, null, 4), err => {
          if(err) throw err;
  });
}
});
client.on('guildMemberAdd', async function (Monster) {
  const WelcomeChannelMK =  Monster.guild.channels.find(mk => mk.name === WelcomeChannel[Monster.guild.id].channel);
  if(!WelcomeChannelMK) return;
  Monster.guild.fetchInvites().then(guildInvites => {
      const uses = guildInvites.find(codes => codes.uses);
      const UserInvited = client.users.get(uses.inviter.id);
            let itsMe = client.emojis.find(copy => copy.name === "diamondmk");
            var EmbedWelcome = new Discord.RichEmbed()
            .setDescription(`${itsMe} __**New Member Joined**__
            ➤ Welcome <@${Monster.user.id}> To **${Monster.guild.name}**
            ➤ You Are Nr: **${Monster.guild.memberCount}**
            ➤ Invited By: <@${UserInvited.id}>`)
            .setColor('#383c41');
  const MKPIC = ['./imgs/w1.png'];
  let Image = Canvas.Image,
     CodesMK = new Canvas(400, 200),
     ctx = CodesMK.getContext('2d');
 fs.readFile(MKPIC, function (err, Background) {
     if (err) return console.log(err);
     let BG = Canvas.Image;
     let ground = new Image;
     ground.src = Background;
     ctx.drawImage(ground, 0, 0, 400, 200);
         let url = Monster.user.displayAvatarURL.endsWith(".webp") ? Monster.user.displayAvatarURL.slice(100) + ".png" : Monster.user.displayAvatarURL;
         jimp.read(url, (err, ava) => {
             if (err) return console.log(err);
             ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                 if (err) return console.log(err);
                  ctx.font = "bold 16px Arial";
                  ctx.fontSize = '20px';
                  ctx.fillStyle = "#f1f1f1";
                  ctx.textAlign = "center";
                  ctx.fillText(Monster.guild.name, 254, 67);
                  ctx.font = "bold 16px Arial";
                  ctx.fontSize = '20px';
                  ctx.fillStyle = "#f1f1f1";
                  ctx.textAlign = "center";
                  ctx.fillText(Monster.guild.memberCount, 338, 161);
                  ctx.font = "bold 16px Arial";
                  ctx.fontSize = '20px';
                  ctx.fillStyle = "#f1f1f1";
                  ctx.textAlign = "center";
                  ctx.fillText(Monster.user.username, 77, 183);
                  let Avatar = Canvas.Image;
                  let ava = new Avatar;
                  ava.src = buf;
                  ctx.beginPath();
                  ctx.arc(77, 101, 62, 0, Math.PI*2);
                  ctx.stroke();
                  ctx.clip();
                  ctx.drawImage(ava, 13, 38, 128, 126);
          WelcomeChannelMK.send({embed: EmbedWelcome, file: CodesMK.toBuffer()});
              })
          })
      });
  })
});

const yourID = "411613098923786241"; 
const setupCMD = `${prefix}activterole`
let initialMessage = ``;
const roles = ["√ SVG | Members •"];
const reactions = ['✅'];
 

 
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";
 
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
     for (let role of roles) messages.push(` لتتبيت هويتك اضغط على الاموجي ✅ ورح تاخد رتبة **"${role}"** role!`); 
    return messages;
}
 
 
client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                }
            });
        }
    }
})


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
