const { Permissions } = require('discord.js');

module.exports = (client, member) => {
  const defaultChannel = member.guild.channels.cache.find((channel) =>
    channel.permissions(guild.me).has(Permissions.FLAGS.SEND_MESSAGES)
  );
  const welcomeMsg = {
    color: 0xadd8e6,
    title: `Welcome, ${member.user.name}`,
    author: {
      name: `[JOIN]${member.displayName()}`,
      icon_url: member.displayAvatarURL(),
    },
    description: 'Remember to stay hydrated!',
    thumbnail: {
      url: member.displayAvatarURL(),
    },
    timestamp: new Date(),
    footer: {
      text: this.timestamp,
    },
  };
  defaultChannel.send({ embeds: { welcomeMsg } }).catch(console.error);
};
