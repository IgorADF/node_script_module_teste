#!/usr/bin/env node

'use strict';

const EScripts = require("./EScripts");

const args = process.argv.slice(2);
const scriptIndex = args.findIndex(
    x => Object.values(EScripts).find(y => y.arg === x)
);

if (scriptIndex >= 0) {
    try {
        const scriptFunction = require(`./scripts/${args[scriptIndex]}`)
        scriptFunction()
    } catch (error) {
        console.log('Error running script!')
    }
} else {
    console.log('Invalid script!')
}
