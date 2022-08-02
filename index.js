import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import * as url from 'url';
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import fetch from 'node-fetch';

function dealErr(err){
    throw new Error(chalk.underline.bgRed(err));
}

async function catchFile(relativePath){
    const absolutePath = path.join(__dirname, relativePath);
    const encoding = "utf-8";
    try{
        const files = await fs.promises.readdir(absolutePath, { encoding }); //the second parameter is an object with encoding and withFileTypes, as the object item and the encoding variable have the same names, we can supress the notation { encoding: encoding } with only { encoding }
        const result = await Promise.all(files.map(async (file) => {
            const filePlace = `${absolutePath}/${file}`;
            const text = await fs.promises.readFile(filePlace, encoding);
            return extractLinks(text);
        }));
        return result;
    } catch(err){
        return dealErr(err);
    }
}



function extractLinks(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; //gm stands for global and multiline(continue catching before line wrap)

    const arrayResults = [];
    let temp;

    while((temp = regex.exec(text)) !== null){
        arrayResults.push(
            {
                [temp[1]]: temp[2],
            }
        )
    }

    
    return arrayResults.length === 0 ? 'There is no links': arrayResults;
}

export default catchFile;

// async function catchFile(filePath){
//     const encoding = 'utf-8';
//     try{
    //         const text = await fs.promises.readFile(filePath, encoding);
    //         return extractLinks(text);
//     } catch(error){
//         dealErr(error);
//     } //finally{
//     //     console.log(chalk.bgGreen('Execution Completed'));
//     // }
// }

// catchFile('./archives/text1.md');

// function catchFile(filePath){
//     const encoding = 'utf-8';

//     fs.promises
//     .readFile(filePath, encoding)
//     .then((text) => console.log(chalk.bgCyanBright.black(text)))
//     .catch((error) => dealErr(err));
// }

// function catchFile(filePath){
//     const encoding = 'utf-8';

//     fs.readFile(filePath, encoding, (err, text) =>{

//         if(err){
//             dealErr(err);
//         }

//         console.log(chalk.yellowBright(text));
//     })
// }

// const text = fs.readFile('./archives/text1.md', 'utf-8')

// const text = catchFile('./archives/text1.md');