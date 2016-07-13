var express = require('express');
var router = express.Router();

var models = require("../models");
// app.get("/json", function (req, res) {
//   var lyrics= {Hi}
//   res.json( lyrics );
// });

// router.get('/json', function(req, res) {
//   var brother = {
//     firstName: "Harpo",
//     lastName: "Marx"
//   };
//   res.json( brother );
// })


/* GET home page. */
router.get('/', function(req, res) {
  models.Lyrics.all().then(function(taskList) {
    res.json(taskList);
  });
});



router.post('/add-task', function(req, res) {
  models.Lyrics
        .build({
            title: req.body.lyricName,
            singer: req.body.singerName})
        .save()
        .then(function() {
          models.Lyrics.findAll({}).then(function(taskList) {
                res.render('index', {tasks: taskList});
            });
            res.redirect("/lyrics");
        });
});

router.put('/task/:id', function(req, res) {
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
