import { expect } from 'chai';
import { isAnagram } from '../src/anagrams';

describe('anagrams - basic functionality', () => {
  it('in - both empty string, out - true', () => {
    const expected = true;
    const actual = isAnagram('', '');
    expect(expected).to.deep.equal(actual);
  });

  it('in - first one empty, second one with letter count 1, string, out - false', () => {
    const expected = false;
    const actual = isAnagram('', 'cat');
    expect(expected).to.equal(actual);
  });

  it('in - second one empty, first one with letter count 1, string, out - false', () => {
    const expected = false;
    const actual = isAnagram('cat', '');
    expect(expected).to.equal(actual);
  });

  it('in - two anagrams, with letter count 1, out - true', () => {
    const expected = true;
    const actual = isAnagram('cat', 'tac');
    expect(expected).to.equal(actual);
  });

  it('in - two not anagrams, with letter count + 1, out - false', () => {
    const expected = false;
    const actual = isAnagram('cacadd', 'caccda');
    expect(expected).to.equal(actual);
  });

  it('in - two anagrams, one with spaces, out - true', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices rant on');
    expect(expected).to.equal(actual);
  });

  it('in - two anagrams, with different casing, out - true', () => {
    const expected = true;
    const actual = isAnagram('STATE', 'taste');
    expect(expected).to.equal(actual);
  });
});
