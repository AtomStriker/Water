exports.run = (client, message, args) => {
  const helpEmbed = {
    color: 0x9400d3,
    title: 'All commands',
    // url: "github command list url",
    author: {
      name: `[HELP]${message.author.tag}`,
      icon_url: message.author.displayAvatarURL(),
    },
    description: 'Helping by listing all commands',
    fields: [
      {
        name: '~',
        value: 'Prefix that this bot uses',
      },
      {
        name: 'Help',
        value: 'Lists all commands\nCommand: `~help',
      },
      {
        name: 'Ping',
        value: 'Pings the user with a reply\nCommand: `~ping`',
      },
      {
        name: 'Reload',
        value: 'Reloads specified command\nCommand:`~reload [commandName]`',
      },
      {
        name: 'Kick',
        value:
          'Kicks a mentioned member (requires kick permisions)\nCommand: `~kick [mentionedMember]`',
      },
      {
        name: 'Repo',
        value: 'Sends link to main repo of the bot\nCommand: `~repo`',
      },
    ],
  };

  message.channel.send({ embeds: [helpEmbed] });
};

exports.name = 'help';
