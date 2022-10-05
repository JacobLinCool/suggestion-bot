import { Bot } from "pure-cat";
import { Ignore } from "pure-cat-module-ignore";
import { MongoStore } from "pure-cat-store-mongo";
import { I18n } from "pure-cat-module-i18n";
import { Suggestion } from "pure-cat-module-suggestion";

new Bot()
    .use(new Ignore())
    .use(new MongoStore(process.env.MONGO_URL || ""))
    .use(new I18n({ fallback: "en", table: {} }))
    .use(
        new Suggestion({
            pass(content: string) {
                if (content.length > 100 || content.includes("no-check")) {
                    return true;
                }
                return false;
            },
        }),
    )
    .start()
    .then(() => console.log("Bot started!"));

/**
 * Invite link: https://discord.com/oauth2/authorize?client_id=1026910413067137054&permissions=274877910016&scope=bot
 */
