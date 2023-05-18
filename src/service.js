import axios from 'axios';

const apiUrl = process.env.RENDER_URL
axios.defaults.baseURL= apiUrl
axios.interceptors.response.use(function (response) {
  console.log("succesfuly")
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  console.log("error",error)
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default {
  getTasks: async () => {
    // const result = await axios.get(`${apiUrl}`)    
    // return result.data;
    console.log('gggggggg')
    const result = await axios.get()    
    return result.data;
  },

  addTask: async(name)=>{
    var item={Id:0,Name:name,IsComplete:false}
    await axios.post('',item)
    console.log('addTask', item)
    //TODO
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    await axios.put(`/${id}`,{IsComplete:isComplete})
    console.log('setCompleted', {id, isComplete})
    //TODO
    return {};
  },

  deleteTask:async(id)=>{
    await axios.delete(`/${id}`)
    console.log('deleteTask')
  }
};
