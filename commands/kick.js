const { Permissions } = require('discord.js');

/**
 * Function that sends an embed after a user is kicked
 * @param {Message} msg Message that the kick command appeared in
 * @param {GuildMember} member (Past) guild member that was targeted in the command
 * @param {string} kickReason Readon why (past) member got kicked
 *
 * TODO: Add exeption handling
 */
function sendKickEmbed(msg, member, kickReason) {
  const kickEmbed = {
    color: 0xff5349,
    author: {
      name: `[KICK]${member.user.tag}`,
      icon_url: member.displayAvatarURL(),
    },
    thumbnail: {
      url: member.displayAvatarURL(),
    },
    title: 'User kicked',
    description:
      'lol get rekt\n*(In case of any moderation abuse report to owner)*',
    fields: [
      {
        name: 'User',
        value: member.toString(),
        inline: true,
      },
      {
        name: 'Moderator',
        value: msg.author.toString(),
        inline: true,
      },
      {
        name: 'Reason',
        value: kickReason.join(' ').toString(),
        inline: true,
      },
    ],
    image: {
      url: 'https://media.giphy.com/media/C51woXfgJdug/giphy.gif',
    },
    timestamp: new Date().toString(),
    footer: {
      text: this.timestamp,
    },
  };

  msg.channel.send({ embeds: [kickEmbed] });
}

exports.run = (client, message, [mention, ...reason]) => {
  // TODO: Find a better way to handle errors and exeptions, especially finding a mod role
  //// const modRole = message.guild.roles.cache.find(
  ////   (role) => role.name === 'Mods'
  //// );
  //// if (!modRole) return console.log('The Mods role does not exist');

  //// if (!message.member.roles.cache.has(modRole.id))
  ////   return message.reply("You can't use this command.");

  if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBER)) {
    return message.reply("You don't have the permission to kick this user.");
  }
  if (message.mentions.members.size === 0)
    return message.reply('Please mention a user to kick.');

  if (!message.guild.me.permissions.has('KICK_MEMBERS'))
    return message.reply("I don't have the `KICK_MEMBERS` permission.");

  // member to kick
  const kickMember = message.mentions.members.first();

  if (!kickMember.kickable)
    return message.reply('This member cannot be kicked.');

  kickMember
    .kick(reason)
    .then(() => {
      sendKickEmbed(message, kickMember, reason);
    })
    .catch((err) => console.error(err));
};
exports.name = 'kick';
