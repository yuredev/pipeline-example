import { select } from './selection.js';
const [_, __, filePath, desiredLetter] = process.argv;

select(filePath, desiredLetter);
