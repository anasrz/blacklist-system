const discord = require('discord.js')
const client = new discord.Client();
const db = require('st.db')
const db = new Database({path:'blacklist.json'})
let owners = [
	'',
	'',
]////ايديات الاونرات 

const config = {
	token : '',///توكن البوت
	roleid : '', //ايدي الرول

}
client.on("ready", () => {
		console.log('ready')		

	
})

client.on('message', message => {
  if (message.author.bot) return;
  let message1 = message.content.split(" ")[0];
  if (message1 === "blacklist") {
if(!owners.includes(message.author.id)) return;
      
      
		   var member = message.mentions.members.first();
var role = message.guild.roles.cache.find(r => r.id === config.roleid);
   var userr = client.users.cache.get(member);

  db.add(`blacklist_${member.id}`,true);

				

		
member.roles.add(role);
message.channel.send('done')
       
			}
      

      
    
  

})
client.on('guildMemberAdd', scooby =>{
  
  
let user = db.get(`blacklist_${scooby.id}`)
  if(user == true) {
		scooby.guild.member(scooby).roles.add(config.roleid).then(r => {
          console.log("> **Done User Blacklisted**")
		})
	}
}); 

					client.login(config.token)
