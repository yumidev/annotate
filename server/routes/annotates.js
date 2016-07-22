var express = require('express');
var router = express.Router();

var models = require("../models");


/* GET users listing. */
router.get('/:id', function(req, res) {
  models.Annotates.find({
    where: {
      id: req.params.id
    }
  }).then(function(annotate){
    res.json(annotate)
  });
});

/* GET LyricIndex page. */
router.get('/', function(req, res) {
  models.Annotates.all().then(function(annotateList) {
    res.json(annotateList);
  });
});

router.post('/', function(req, res) {
  models.Annotates
        .build({
            comment: req.body.comment,
            lineNumber: req.body.lineNumber,
            songId: req.body.songId
          })
        .save()
  res.end("Success Hmm?")

});

router.put('/:id', function(req, res) {
  models.Annotates.find({
    where: {
      id: req.params.id
    }
  }).then(function(task) {
    if(task) {
      task.updateAttributes({
        comment: req.body.comment,
        lineNumber: req.body.lineNumber,
        songId: req.body.songId
      })
    }
  });
});

router.delete('/:id', function(req, res) {
  models.Annotates.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
