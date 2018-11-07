const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuute,");
const client = new Discord.Client();




 const devs = ['483743143989084161' , '483743143989084161' , '4483743143989084161' , '483743143989084161', '483743143989084161', '483743143989084161'];
const adminprefix = "-";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**  ${argresult} ply .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**  ${argresult} wt .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**  ${argresult} ls .. :white_check_mark:**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/muuuuuute");
      message.channel.sendMessage(`**  ${argresult} st .. :white_check_mark:**`)
    }
  if (message.content.startsWith(adminprefix + 'us')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**us ..**${argresult}** `)
  } else
  if (message.content.startsWith(adminprefix + 'av')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**avatar ... :** `);
  }
  });

  


client.on("message", message => {
var prefix = "_";
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



  

client.login(process.env.BOT_TOKEN);
