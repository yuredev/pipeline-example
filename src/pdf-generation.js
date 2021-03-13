//Required package
import pdf from 'pdf-creator-node';
import { readFileSync } from 'fs';
import { resolve } from 'path';

(async () =>  {
  const data = readFileSync(resolve('..', 'sorted.txt')).toString();


  const html = readFileSync('pdf-template.html', 'utf8');
  const options = {
    format: 'A3',
    orientation: 'portrait',
    border: '10mm',
    header: {
      height: '45mm',
      contents: '<div style="text-align: center;">Author: Yure, Carlos, Antonio</div>',
    },
  };
  
  const lineBreaker = process.platform === 'linux' ? '\n' : '\r\n';
  const names = data.split(lineBreaker);
  
  if (names[names.length - 1].length === 0) {
    names.pop();
  }

  const document = {
    html,
    data: {
      names,
    },
    path: './output.pdf',
    type: '',
  };
  
  try {
    const response = await pdf.create(document, options);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
