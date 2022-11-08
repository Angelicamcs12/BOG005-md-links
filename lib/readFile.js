const fs = require('fs')

/* const readingFile = (arrayFile) =>{
    let content = new Promise((resolve, reject) => {
        let links = []
    })
} */

fs.readFile('/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/prueba.md', 'utf-8', (error, data) =>{
    if (!error) {
        console.log(data);
    } else {
        console.log(error);
    }
})