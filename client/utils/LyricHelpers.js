import axios from 'axios';

// router.post('/addlyric', function(req, res) {
//   router.put('/:id', function(req, res) {
//     router.delete('/:id', function(req, res) {


const LyricHelpers = {
  getLyricData: () => {
    return axios.get(`//localhost:3001/lyricdata`);
  },
  getOneLyric: (lyricid) => {
    return axios.get(`//localhost:3001/lyricdata/${lyricid}`)
  },
  addLyric: (data) => {
    return axios.post(`//localhost:3001/lyricdata`, data).then((response) => {console.log("Lyric saved")})
  },
  updateLyric: (id) => {

  },
  deleteLyric: (id) => {

  }
};

export default LyricHelpers;
