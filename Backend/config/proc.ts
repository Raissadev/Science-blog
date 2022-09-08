import death from "death";
import { defaultLog as log } from "./logger";
import { version } from "../app/version";

class Proc
{
    public static server: any;
    private on_death: any;

    constructor()
    {
        this.on_death = death({ uncaughtException: true });
        const ON_DEATH = ({ debug: true });
    }

    set start(server: any)
    {
        Proc.server = server;
    }

    public deathEvents(): void
    {
        this.on_death(async (sig: any, err: any) => {
            if (sig as string === "uncaughtException") {
                await log.error(`Stopping with signal [${sig}] error`, err);
                await Proc.server.close();
                process.exit(1);
            }

            await log.info(`Stopping with signal [${sig}] error`, err);
            await Proc.server.close();
            process.exit();
        });
    }

    public vertional(): void
    {
        if (
            process.argv.includes("-v") || process.argv.includes("--version")
        ) {
            console.log(`${process.title}, version: ${version}`);
            process.exit();
        }
    }
}

export default new Proc();