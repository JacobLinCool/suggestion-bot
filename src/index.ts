import { Bot } from "pure-cat";
import { Ignore } from "pure-cat-module-ignore";
import { MongoStore } from "pure-cat-store-mongo";
import { I18n } from "pure-cat-module-i18n";
import { Suggestion } from "pure-cat-module-suggestion";

new Bot()
    .use(new Ignore())
    .use(new MongoStore(process.env.MONGO_URL || ""))
    .use(new I18n({ controller_prefix: "!linter lang" }))
    .use(
        new Suggestion({
            controller_prefix: "!linter",
            pass(content: string) {
                return content.length > 100 || content.includes("no-check");
            },
        }),
    )
    .start()
    .then(() => console.log("Bot started!"));

/**
 * Invitation: https://discord.com/oauth2/authorize?client_id=1026910413067137054&permissions=274877910016&scope=bot
 */
