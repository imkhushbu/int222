const express = require("express")
const multer = require("multer")
const app = express()

var storage = multer.diskStorage({
destination: function(req, res, cb){
cb(null, "uploads") },
filename: function(req, file, cb){
cb(null, file.fieldname + Date.now());
}
}
)
const maxSize = 1*1000*1000;
var uploads = multer({
storage: storage,
limits: {fileSize: maxSize},
}).single("file");

app.get("/", function(req, res){
res.sendFile(__dirname+'/multer.html');
})
app.post("uploadFile", function(req, res, next){
upload(req, res, function(err){
if(err)
{
res.send("File size is too large")
}
else
{
res.send("Success, Uploaded!")
}
})
})
app.listen(2000, function(error){
if(error) throw error
console.log("Server created Sucessfully.")
})