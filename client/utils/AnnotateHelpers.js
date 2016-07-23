import axios from 'axios';

// router.post('/addlyric', function(req, res) {
//   router.put('/:id', function(req, res) {
//     router.delete('/:id', function(req, res) {

const AnnotateHelpers = {
  getAnnotateData: () => {
    return axios.get(`//localhost:3001/annotatedata`);
  },
  getOneAnnotate: (annotateid) => {
    return axios.get(`//localhost:3001/annotatedata/${annotateid}`)
  },
  addAnnotate: (data) => {
    return axios.post(`//localhost:3001/annotatedata`, data).then((response) => {console.log("Annotate saved")})
  },
  updateAnnotate: (annotateid) => {
    return axios.put(`//localhost:3001/annotatedata/${annotateid}`)
  },
  deleteAnnotate: (annotateid) => {
    return axios.delete(`//localhost:3001/annotatedata/${annotateid}`)

  }
}

export default AnnotateHelpers;
