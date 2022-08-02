#!/usr/bin/env node

import catchFile from "./index.js";
import chalk from 'chalk';
import validateURL from "./http-validation.js";

const path = process.argv;

async function handleText(filePath){
    const result = await catchFile(filePath[2]);
    // console.log(result);
    if(path[3] === 'validate'){
        console.log(chalk.yellow('Validated Links'), await validateURL(result));
    } else{
        console.log(chalk.yellow("List of Links"), result);
    }
}

handleText(path);