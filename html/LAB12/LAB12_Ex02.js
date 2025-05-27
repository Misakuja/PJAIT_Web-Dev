let fs = require('fs');

const command = process.argv[2];
const fileName = process.argv[3];
const newText = process.argv.slice(4).join(' ');

const folderPath = '../../files/';

switch (command) {
    case 'open':
        fs.readFile(folderPath + fileName, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('File contents:', data);
        })
        break;
    case 'append':
        fs.appendFile(folderPath + fileName, newText, function (err) {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('Updated!');
        });
        break;
    case 'delete':
        fs.unlink(folderPath + fileName, function (err) {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('File deleted!');
        });
        break;

}