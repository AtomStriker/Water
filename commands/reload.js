exports.run = (client, message, args) => {
  if (!args || args.length < 1)
    return message.reply('Must provide a command name to reload.');
  const commandName = args[0];

  // Check if the command exists and is valid
  if (!client.commands.has(commandName))
    return message.reply('That command does not exist.');

  // The path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];

  // Delete and reload the command from client.commands Emap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`${commandName} has been reloaded`);
};

exports.name = 'reload';