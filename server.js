var http = require('http');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoURL ='mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(express.static('public'));


var topNewsAR;
//get the top news when any page is loaded and update it
app.get('*',function(req,res,next){
  var topnewsdb = db.collection('topnews')
    topnewsdb.find({}).toArray(function (err, topnews) {
        if (err) {
          res.status(500).send({
            error: "Error fetching news from DB"
          });
        }
        else{
            topNewsAR = topnews;
        }
    });
    next();
});

//main page
app.get('/',function(req,res,next){
    var collection = db.collection('topnews')
    console.log("==Server Displaying Mainpage");
            res.status(200).render('mainPage',{
                news:topNewsAR,
                fileNotFound:false
        });   
});
//news page
app.get('/news',function(req,res,next){
    var collection = db.collection('newsPosts')
    collection.find().sort({postId:-1}).limit(1).toArray(function(err,curPost){
      if (err) {
        res.status(500).send({
          error: "Error fetching newsPosts from DB"
        });
      } else {
          console.log("==curPost:", curPost);
          console.log("==postId", curPost[0].postId);
      }
    });

    console.log("==Server Displaying News Page");

    collection.find({}).toArray(function (err, newsPosts) {
        if (err) {
          res.status(500).send({
            error: "Error fetching newsPosts from DB"
          });
        } else {
            console.log("==newsPosts:", newsPosts);
            res.status(200).render('news',{
                posts: newsPosts,
                news:topNewsAR,
                fileNotFound:false
            });
        }
    });
   
});

app.post('/news', function (req, res, next) {
  var curId = 0;
  var collection = db.collection('newsPosts')
  collection.find().sort({postId:-1}).limit(1).pretty().toArray(function(err,curPost){
    if (err) {
      res.status(500).send({
        error: "Error fetching newsPosts from DB"
      });
    } else {
        console.log("==curPost:", curPost);
        curId = curPost[0].postId;
    }
  });

  console.log("== req.body:", req.body);
  if (req.postContent) {
    if (peopleData[person]) {
      peopleData[person].photos.push({
        postId: curId++,
        postContent: "test",
        comments: []
      });
      res.status(200).send("Post successfully added");
    } else {
      next();
    }
  } else {
    res.status(400).send({
      error: "something fcucked up"
    });
  }
});






//cs page
app.get('/computer-science',function(req,res,next){
    var collection = db.collection('csPosts')
    
    console.log("==Server Displaying CS Page");

    collection.find({}).toArray(function (err, csPosts) {
        if (err) {
          res.status(500).send({
            error: "Error fetching csPosts from DB"
          });
        } else {
            console.log("==csPosts:", csPosts);
            res.status(200).render('news',{
                posts: csPosts,
                news:topNewsAR,
                fileNotFound:false
            });
        }
    });
   
});
//ask anything page
app.get('/ask-anything',function(req,res,next){
    var collection = db.collection('askPosts')
    console.log("==Server Displaying Ask Page");

    collection.find({}).toArray(function (err, askPosts) {
        if (err) {
          res.status(500).send({
            error: "Error fetching askPosts from DB"
          });
        } else {
            console.log("==posts:", askPosts);
            res.status(200).render('news',{
                posts: askPosts,
                news:topNewsAR,
                fileNotFound:false
            });
        }
    });
   
});
//clubs page
app.get('/clubs',function(req,res,next){
    var collection = db.collection('clubPosts')
    console.log("==Server Displaying Clubs Page");

    collection.find({}).toArray(function (err, clubPosts) {
        if (err) {
          res.status(500).send({
            error: "Error fetching clubPosts from DB"
          });
        } else {
            console.log("==clubPosts:", clubPosts);
            res.status(200).render('news',{
                posts: clubPosts,
                news:topNewsAR,
                fileNotFound:false
            });
        }
    });
   
});
app.get('*',function(req,res,next){
    console.log("==Server Displaying 404 Page");
    res.status(404).render('news',{
      fileNotFound: true
    });
});

MongoClient.connect(mongoURL,function(err,client){
    if (err) {
        throw err;
    }
    db = mongoDBDatabase = client.db(mongoDBName);
    app.listen(port, function () {
        console.log("==Server is listening on port", port);
    });
});
