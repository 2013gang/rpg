
var
http = require('http'),
path = require('path'),
fs = require('fs');
 
//helper function handles file verification
function getFile(filePath,res,page404){
    //does the requested file exist?
    fs.exists(filePath,function(exists){
        //if it does...
        if(exists){
            //read the fiule, run the anonymous function
            fs.readFile(filePath,function(err,contents){
                if(!err){
                    //if there was no error
                    //send the contents with the default 200/ok header
                    res.end(contents);
                } else {
                    //for our own troubleshooting
                    console.dir(err);
                };
            });
        } else {
            //if the requested file was not found
            //serve-up our custom 404 page
            fs.readFile(page404,function(err,contents){
                //if there was no error
                if(!err){
                    //send the contents with a 404/not found header 
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.end(contents);
                } else {
                    //for our own troubleshooting
                    console.dir(err);
                };
            });
        };
    });
};
 
//a helper function to handle HTTP requests
function requestHandler(req, res) {
    var
    fileName = path.basename(req.url) || 'index.html',
    dirName = path.dirname(req.url),
    localFolder = __dirname + '/' + dirName + '/',
    page404 = __dirname + '/404.html';
 
    //call our helper function
    //pass in the path to the file we want,
    //the response object, and the 404 page path
    //in case the requestd file is not found
    getFile((localFolder + fileName),res,page404);
};
 

http.createServer(requestHandler)
 

.listen(3000);