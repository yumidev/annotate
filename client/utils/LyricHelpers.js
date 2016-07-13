import axios from 'axios';


// var config = {
//   headers: {'Acces-Control-Allow-Origin' : '*'}
// };
// var config = {
// headers: {'Access-Control-Allow-Origin': '*',
// 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
// 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}
// }
const LyricHelpers = {
  getLyricData: (lyricname) => {
    return axios.get(`//localhost:3001/lyricdata`);
  },
  updateLyricData: (id) => {

  }
};
// LyricHelpers.getUserInfo("jashkenas").then(function (req) {
//   console.log( req.data );
// });

export default LyricHelpers;
