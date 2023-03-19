#!/usr/bin/env node

"use strict";

const EScripts = require("./EScripts");

const args = process.argv.slice(2);
const script = Object.values(EScripts).find((x) =>
  args.findIndex((y) => x.arg == y)
);

if (script) {
  try {
    const scriptFunction = require(`./scripts/${script.file}`);
    scriptFunction();
  } catch (error) {
    console.log("Error running script!");
  }
} else {
  console.log("Invalid script!");
}
