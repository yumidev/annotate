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
  updateLyric: (lyricid) => {
    return axios.put(`/lyricdata/${lyricid}`)
  },
  deleteLyric: (lyricid) => {
    return axios.delete(`/lyricdata/${lyricid}`).then((response) => {console.log("Delete succeeded");})
  }
};

export default LyricHelpers;
