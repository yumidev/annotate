var mongoose = require('mongoose');

// Create a new schema for our lyric data
var schema = new mongoose.Schema({
    title       : String
  , singer     : String
  , content     : Text
});

// Create a static getLyrics method to return lyric data from the db
schema.statics.getLyrics = function(page, skip, callback) {
  //
  // var lyrics = [],
  //     start = (page * 10) + (skip * 1);
  //
  // // Query the db, using skip and limit to achieve page chunks
  // Lyric.find({},'twid active author avatar body date screenname',{skip: start, limit: 10}).sort({date: 'desc'}).exec(function(err,docs){
  //
  //   // If everything is cool...
  //   if(!err) {
  //     tweets = docs;  // We got tweets
  //     tweets.forEach(function(tweet){
  //       tweet.active = true; // Set them to active
  //     });
  //   }

    // Pass them back to the specified callback
    // callback(lyrics);

  });

};

// Return a Tweet model based upon the defined schema
module.exports = Lyric = mongoose.model('Lyric', schema);
