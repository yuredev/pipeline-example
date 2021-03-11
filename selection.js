import { readFileSync, writeFileSync } from 'fs';

/**
 * @param {string} filePath 
 * @param {string} desiredLetter 
 */
export function select(filePath, desiredLetter) {
  const data = readFileSync(filePath).toString();
  const lineBreaker = process.platform === 'linux' ? '\n' : '\r\n';
  const names = data.split(lineBreaker);
  
  if (names[names.length - 1].length === 0) {
    names.pop();
  }
  const filteredNames = names.filter(name => (
    name[0] === desiredLetter
  ));
  const textToWrite = filteredNames.map(name => name + lineBreaker).join('');
  
  writeFileSync('selected.txt', textToWrite);
}

