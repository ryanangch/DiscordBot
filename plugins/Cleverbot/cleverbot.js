exports.commands = [
    "talk"
]

var AuthDetails = require("../../auth.json");

var cleverbot = require("cleverbot-node");
talkbot = new cleverbot;
talkbot.configure({"botapi":AuthDetails.cleverbot_api});

exports.talk = {
    usage: "<message>",
    description: "Talk directly to the bot",
    process: function(bot, msg, suffix) {
        var conv = suffix.split(" ");
        talkbot.write(suffix, response =>{
            msg.channel.send("", {
                embed: {
                    color: 0x8698FE,
                    author: {
                        name: "Cleverbot",
                        icon_url: "https://lh5.ggpht.com/DiNbF90a-ecMdyG7c49ARdKdm2mlhLDyNswLcmDm3WM6yDADmMMWtTO1XL96-LCEXIc=w300"
                    },
                timestamp: new Date(),
                    description: response.message,
                }
            }).catch(console.error);
        });
    }
}
