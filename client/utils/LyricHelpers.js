import axios from 'axios';

const LyricHelpers = {
  getLyricData: () => {
    return axios.get(`/lyricdata`);
  },
  getOneLyric: (lyricid) => {
    return axios.get(`/lyricdata/${lyricid}`)
  },
  addLyric: (data) => {
    return axios.post(`/lyricdata`, data)
  },
  updateLyric: (lyricid) => {
    return axios.put(`/lyricdata/${lyricid}`)
  },
  deleteLyric: (lyricid) => {
    return axios.delete(`/lyricdata/${lyricid}`)
  }
};

export default LyricHelpers;
