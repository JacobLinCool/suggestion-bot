import { Bot } from "pure-cat";
import { Ignore } from "pure-cat-module-ignore";
import { Suggestion } from "pure-cat-module-suggestion";
import { Skip } from "./skip";

new Bot()
    .use(new Ignore())
    .use(new Skip())
    .use(new Suggestion())
    .start()
    .then(() => console.log("Bot started!"));

/**
 * Invite link: https://discord.com/oauth2/authorize?client_id=1026910413067137054&permissions=274877910016&scope=bot
 */
