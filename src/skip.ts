import { BaseModule, Module, StoreContext, CallNextModule } from "pure-cat";
import { ClientEvents } from "discord.js";

export class Skip extends BaseModule implements Module {
    public name = "skip";

    async messageCreate(
        args: ClientEvents["messageCreate"],
        ctx: StoreContext,
        next: CallNextModule,
    ): Promise<void> {
        const [message] = args;

        if (message.content.includes("no-check") || message.content.length > 100) {
            return;
        }

        await next();
    }
}
