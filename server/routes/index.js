var express = require('express');
var router = express.Router();

var models = require("../models");

/* GET LyricShow page */
router.get('/:id', function(req, res) {

  models.Lyrics.find({
    where: {
      id: req.params.id
    }
  }).then(function(lyric){
    res.json(lyric)
  });
});

/* GET LyricIndex page. */
router.get('/', function(req, res) {
  models.Lyrics.all().then(function(taskList) {
    res.json(taskList);
  });
});

router.post('/', function(req, res) {
  models.Lyrics
        .build({
            title: req.body.title,
            artist: req.body.artist})
        .save()
  res.end("Success Hmm?")

});

router.put('/:id', function(req, res) {
  models.Lyrics.find({
    where: {
      id: req.params.id
    }
  }).then(function(task) {
    if(task) {
      task.updateAttributes({
        title: req.body.title,
        singer: req.body.singer
      }).then(function(task) {
        res.send(task);
      });
    }
  });
});


router.delete('/task/:id', function(req, res) {
  models.Lyrics.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(task) {
    res.json(task);
  });
});


module.exports = router;
