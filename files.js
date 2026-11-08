const fs = require('fs');
 //Reading files
fs.readFile('./document/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
   });

console.log('Last line of code'); 
//Writing files
fs.writeFile('./document/blog1.txt', 'Hello, this is a Lesson 2.', () => {
    console.log('File was written');
} );

fs.writeFile('./document/blog2.txt', 'Hello, this is a new file in Lesson 2.', () => {
    console.log('File was written');
} ); 

//Directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){    
            console.log(err);
        }
        console.log('Folder created');
    });
}   else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder deleted');
    });
}

//Deleting files
if(fs.existsSync('./document/deleteme.txt')){
    fs.unlink('./document/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }   
        console.log('File deleted');
    });
}