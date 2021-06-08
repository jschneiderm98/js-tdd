import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';
export const isAnagram = (string1, string2) => {
  const letterCount1 = getLetterCount(string1.toLowerCase());
  const letterCount2 = getLetterCount(string2.toLowerCase());
  return isEqual(letterCount1, letterCount2);
};