/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = {};
    for (let i = 0; i < this.words.length -1; i++){
      let currentWord = this.words[i];
      let nextWord = this.words[i + 1];

      if(!chains[currentWord]){
        chains[currentWord] = [];
      }
      chains[currentWord].push(nextWord);
    }
    return chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO

    let startIndex = Math.floor(Math.random() + this.words.length);
    let currentWord = this.words[startIndex];
    let result = [currentWord];

    for (let i = 0; i < this.words.length -1; i++){
      if(this.chains[currentWord]){
        let nextWords = this.chains[currentWord];

        let nextIndex = Math.floor(Math.random() * nextWord.length);
        let nextWord = nextWords(nextIndex);
          
          result.push(nextWord)
        nextWord = currentWord;
      } else {
        break;
      }

    }
    return result.join('') 
  }
  
}


module.exports = {
  MarkovMachine,
};