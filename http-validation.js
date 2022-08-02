import fetch from "node-fetch";
import chalk from 'chalk';

function handleErrors(err){
    throw new Error(chalk.underline.bgRed(err.message));
}
async function checkStatus(urlsArray){
    try{
        const statusArray = await Promise
            .all(urlsArray
                .map(async url => {
                    const res = await fetch(url);
                    return `${res.status} - ${res.statusText}`;
        }));
        return statusArray;
    } catch(error){
        handleErrors(error.message);
    }
}
function generateURLsArray(linksArray){
    return linksArray
        .map(linkObject => Object
            .values(linkObject).join());
    // let urlArray = [];
    // linksArray.map((link) => {
    //     urlArray.push(Object.values(link));
    // })

    // return urlArray;
}

async function validateURL(linksArray){
    const links = generateURLsArray(linksArray[0]);
    const linksStatus = await checkStatus(links);
    const results = linksArray[0].map((obj, i) => ({ ...obj, status: linksStatus[i] }))
    return results;
}

 export default validateURL;