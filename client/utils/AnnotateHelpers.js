import axios from 'axios';

// router.post('/addlyric', function(req, res) {
//   router.put('/:id', function(req, res) {
//     router.delete('/:id', function(req, res) {

const AnnotateHelpers = {
  getAnnotateData: () => {
    return axios.get(`/annotatedata`);
  },
  getOneAnnotate: (annotateid) => {
    return axios.get(`/annotatedata/${annotateid}`)
  },
  addAnnotate: (data) => {
    return axios.post(`/annotatedata`, data).then((response) => {console.log("Annotate saved")})
  },
  updateAnnotate: (id) => {

  },
  deleteAnnotate: (id) => {

  }
}

export default AnnotateHelpers;
