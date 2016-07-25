import axios from 'axios';

const AnnotateHelpers = {
  getAnnotateData: () => {
    return axios.get(`/annotatedata`);
  },
  getOneAnnotate: (annotateid) => {
    return axios.get(`/annotatedata/${annotateid}`)
  },
  addAnnotate: (data) => {
    return axios.post(`/annotatedata`, data)
  },
  updateAnnotate: (annotateid) => {
    return axios.put(`/annotatedata/${annotateid}`)
  },
  deleteAnnotate: (annotateid) => {
    return axios.delete(`/annotatedata/${annotateid}`)

  }
}

export default AnnotateHelpers;
