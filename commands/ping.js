exports.run = (client, message, args) => {
  message.reply('Pong!').catch(console.error);
};

exports.name = 'ping';
