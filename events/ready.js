module.exports = (client) => {
  console.log(`
Ready to server for:
Channels - ${client.channels.cache.size} 
Guilds - ${client.guilds.cache.size}
Users - ${client.users.cache.size}
    `);
};
