import axios from 'axios'

export var getNewsList=()=>{
  return axios.get('../../static/newslist.json')
  .then(res=>res.data)
};
export var getNewsList1=()=>{
  return axios.get('../../static/newslist1.json')
  .then(res=>res.data)
}