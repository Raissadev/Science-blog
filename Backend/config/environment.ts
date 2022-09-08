import { config } from "dotenv";
import dotenvParseVariables from "dotenv-parse-variables";

let env: any = config({});

if (env.error) throw env.error;

env = dotenvParseVariables(env.parsed);

console.log(env);

export default env;