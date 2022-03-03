import minimist from "minimist";
import { coinFlip, flipACoin } from "./modules/coin.mjs";

const args = minimist((process.argv.slice(2)))

args['call']

const call = args.call || process.env.call;

console.log(flipACoin(call));