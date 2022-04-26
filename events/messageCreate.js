const DDG = require('duck-duck-scrape');

// SECTION - Post Water Function
/**
 * Posts a random image of water
 * @param {any} message User message
 * TODO: Move function to another file.
 */
const postWater = async (message) => {
  const waterImages = await DDG.searchImages('water', {
    safeSearch: DDG.SafeSearchType.STRICT,
  });

  // NOTE: randImgIndex will become a function for general use in a "methods" folder as randIndex in the near future
  const randImgIndex = Math.floor(Math.random() * waterImages.results.length);
  const randImg = waterImages.results[randImgIndex];

  const waterEmbed = {
    color: 0x1e90ff,
    title: 'Water',
    description: 'Stay Hydrated!',
    image: {
      url: randImg.image,
    },
    timestamp: new Date(),
    footer: {
      text: `Source: ${randImg.url}`,
    },
  };

  message.reply({ embeds: [waterEmbed] });
};
// !SECTION


module.exports = (client, message) => {
  // Ignore bots
  if (message.author.bot) return;

  // Check if message has the word "thirsty", "hydrate", or "aqua" in it and post a random image of a cup of water.
  checkWater = /(thirst*)\w|(hydra*)\w|(aqua*)\w|(water*)\w/gi;

  if (checkWater.test(message.content.toString())) {
    postWater(message);
  }
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition
  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Emap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};
