var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/KM035";
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
if (err) throw err;
console.log("Database created!");
db.close();
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/KM035";
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
if (err) throw err;
var dbo = db.db("KM035");
dbo.createCollection("User_data", function(err, res) {
if (err) throw err;
console.log("Collection created");
db.close();
});
});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/KM035";
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
if (err) throw err;
var dbo = db.db("KM035");
var myobj=[
{name:'Manoj',course:'Node js', marks:98,Grade:'O', Mode: 'Regular' },
{name:'Dhoni',course:'Node js', marks:98},
{name:'Anu',course:'React js', marks:98},
{name:'Ram',course:'HTML', marks:98},
{name:'Tej',course:'Angular js', marks:98},
];
dbo.collection("User_data").insertMany(myobj, function(err, data) {
if (err) throw err;
console.log("Number of documents inserted: " + data.insertedCount);
db.close();
});});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
if (err) throw err;
var dbo = db.db("KM035");
var request = { course: "Angular js" };
var newdata = { $set: {course:"Node js", marks: 90 } };
dbo.collection("User_data").updateMany(request, newdata, function(err,data) {
if (err) throw err;
console.log("updated"); db.close(); });});