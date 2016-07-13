import axios from 'axios';

const LyricHelpers = {
  getLyricData: () => {
    return axios.get(`//localhost:3001/lyricdata`);
  },
  getOneLyric: (lyricid) => {
    return axios.get(`//localhost:3001/lyricdata/${lyricid}`)
  },
  updateLyricData: (id) => {

  }
};

export default LyricHelpers;
