const { MarkovMachine } = require('./markov');

describe('MarkovMachine', () => {
  test('constructor initializes words and chains', () => {
    const text = 'The cat in the hat.';
    const markovMachine = new MarkovMachine(text);
    expect(markovMachine.words).toEqual(['The', 'cat', 'in', 'the', 'hat.']);
    expect(markovMachine.chains).toBeDefined();
  });

  // Test the makeChains method
  test('makeChains method sets up chains correctly', () => {
    const text = 'The cat in the hat.';
    const markovMachine = new MarkovMachine(text);
    markovMachine.makeChains();
    const expectedChains = new Map([
      ['The', ['cat']],
      ['cat', ['in']],
      ['in', ['the']],
      ['the', ['hat.']],
      ['hat.', [null]],
    ]);
    expect(markovMachine.chains).toEqual(expectedChains);
  });

  // Test the choice method
  test('choice method returns a valid choice from an array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = MarkovMachine.choice(array);
    expect(array).toContain(result);
  });

  // Test the makeText method
  test('makeText method generates random text', () => {
    const text = 'The cat in the hat.';
    const markovMachine = new MarkovMachine(text);
    const generatedText = markovMachine.makeText(5); 
    expect(generatedText.split(' ')).toHaveLength(5);
  });
});
