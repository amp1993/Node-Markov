/** Command-line tool to generate Markov text. */

const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");


function generateText(text){
    let mm = new markov.MarkovMachine(text);
    console.log(mm.makeText());

}
  
  function readFile(path) {
    fs.readFile('eggs.txt', 'utf8', function cb(err, data) {
      if (err) {
        console.error('There is an error reading file');
        process.exit(1);
      } else {generateText(data)}
      ;
    });
  }

  async function readURL(url) {
    let resp;
    try{
        resp = axios.get('url')
        }
         catch (err) {
        console.error(`Cannot read URL: ${url}: ${err}`);
        process.exit(1);
    }
    generateText(resp.data);
    
  }

  let [method, path] = process.argv.slice(2);

  if (method === "file") {
    readFile(path);
  }
  
  else if (method === "url") {
    readURL(path);
  }
  
  else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
  }