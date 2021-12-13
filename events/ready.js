const client = require("..");
const roleClaim = require('../role-claim');
const roleClaimYT = require('../role-claim-youtubers');
var config = (global.prefix);

client.on('ready', () => {
    const guild = client.guilds.cache.get('736846645211168820');
    let activities = [
      `${config}ajuda para obter Ajuda`//,
      //`Bot em Desenvolvimento`
    ],
    i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
      }), 1000 * 60);
      //roleClaim(client);
      roleClaimYT(client);
});