import axios from 'axios';

// router.post('/addlyric', function(req, res) {
//   router.put('/:id', function(req, res) {
//     router.delete('/:id', function(req, res) {


const LyricHelpers = {
  getLyricData: () => {
    return axios.get(`/lyricdata`);
  },
  getOneLyric: (lyricid) => {
    return axios.get(`/lyricdata/${lyricid}`)
  },
  addLyric: (data) => {
    return axios.post(`/lyricdata`, data).then((response) => {console.log("Lyric saved")})
  },
  updateLyric: (id) => {

  },
  deleteLyric: (id) => {

  }
};

export default LyricHelpers;
