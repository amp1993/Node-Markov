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
    let chains = new Map();
    for (let i = 0; i < this.words.length; i++){
      let word = word[i];
      let nextWord = word[i] + 1 || null;
      if(chains.has(word)) chains.get(word).push(nextWord);
      else chains.set(word,[nextWord]);
    }
    this.chains = chains;
  }

  static choice(array){
    return array[Math.floor(Math.random() * array.length)];
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Array.from(this.chains.keys());
    let key = this.choice(keys);
    let out = [];

    white(out.length <= numWords && key != null){
      let [w1, w2] = key.split(" ");
      out.push(w1);
      key = w2 + " " + this.choice(this.chains.get(key));
    }

    return out.join(" ");
  }
}




module.exports = {
  MarkovMachine,
};