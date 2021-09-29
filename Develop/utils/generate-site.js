const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./develop/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }
      
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// copying file
// const copyFile = () => {
//   return new Promise((resolve, reject) => {
//     fs.copyFile('./develop/src/style.css', './develop/dist/style.css', err => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       resolve({
//         ok: true,
//         message: 'Stylesheet created!'
//       });
//     });
//   });
// };

module.exports = { writeFile, copyFile };
