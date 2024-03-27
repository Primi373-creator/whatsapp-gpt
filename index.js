const config = require("./config");

Object.keys(config.characterai).forEach((character) => {
  console.log(`${character}: ${config.characterai[character].id}`);
});
