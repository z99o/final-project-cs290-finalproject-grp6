var http = require('http');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var app = express();
var port = process.env.PORT || 3000;

var mongoHost = "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = "cs290_morelloz";
var mongoPassword = "BigDatabaseEnergy";
var mongoDBName = "cs290_morelloz";

var mongoURL ='mongodb://' + mongoUser + ':' + mongoPassword + '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(express.static('public'));


var topNewsAR;
var tNews;
var tCS;
var tAsk;
var tClub;

//get the top news when any page is loaded and update it
app.get('*',function(req,res,next){
  var newsDB = db.collection("newsPosts");
  var csDB = db.collection("csPosts");
  var askDB = db.collection("askPosts");
  var clubDB = db.collection("clubPosts");
  //update top post for news
  newsDB.find().sort({comments:-1}).limit(1).toArray(function(err,top){
    if (err) {
      res.status(500).send({
        error: "Error fetching newsPosts from DB"
      });
    } else {
      console.log("==news top post:",top[0].postContent);
        tNews = top[0].postContent;
    }
  });
  //update top post for cs
  csDB.find().sort({comments:-1}).limit(1).toArray(function(err,top){
    if (err) {
      res.status(500).send({
        error: "Error fetching newsPosts from DB"
      });
    } else {
      console.log("==cs top post:",top[0].postContent);
        tCS = top[0].postContent;
    }
  });
  //update top post for ask
  askDB.find().sort({comments:-1}).limit(1).toArray(function(err,top){
    if (err) {
      res.status(500).send({
        error: "Error fetching newsPosts from DB"
      });
    } else {
        tAsk = top[0].postContent;
        console.log("==ask top post:",top[0].postContent);
    }
  });
  //update top post for clubs
  clubDB.find().sort({comments:-1}).limit(1).toArray(function(err,top){
    if (err) {
      res.status(500).send({
        error: "Error fetching newsPosts from DB"
      });
    } else {
        console.log("==club top post:",top[0].postContent);
        tClub = top[0].postContent;
    }
  });

     //topNewsAR = JSON.stringify([{text:tNews, link:"/news"},{text:tCS, link:"/computer-science"},{text:tAsk, link:"/ask-anything"},{text:tClub, link:"/clubs"}]);
    next();
});

//main page
app.get('/',function(req,res,next){
    var collection = db.collection('topnews')
    console.log("==Server Displaying Mainpage");
            res.status(200).render('mainPage',{
                //news:topNewsAR,
                newsText:tNews,
                csText:tCS,
                askText:tAsk,
                clubText:tClub,
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
                //news:topNewsAR,
                newsText:tNews,
                csText:tCS,
                askText:tAsk,
                clubText:tClub,
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
                //news:topNewsAR,
                newsText:tNews,
                csText:tCS,
                askText:tAsk,
                clubText:tClub,
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
                //news:topNewsAR,
                newsText:tNews,
                csText:tCS,
                askText:tAsk,
                clubText:tClub,
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
                //news:topNewsAR,
                newsText:tNews,
                csText:tCS,
                askText:tAsk,
                clubText:tClub,
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
