import minimist from "minimist";
import { coinFlips, countFlips } from "./modules/coin.mjs";

const args = minimist((process.argv.slice(2)))

args['number']

const number = args.number || process.env.number || 1;

function flips() {
    
    let arr = coinFlips(number);
    let obj = countFlips(arr);
    console.log(arr);
    console.log(obj);

}

flips(number);
