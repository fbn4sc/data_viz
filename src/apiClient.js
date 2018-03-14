import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://delta-api.herokuapp.com"
});

const apiClient = {
  getDevelopers: () => {
    return axiosInstance
      .get(`/developers`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });
  },

  getCommits: email => {
    return axiosInstance
      .get(`/commits?email=${email}`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });
  }
};

export default apiClient;
