const axios = require('axios')

module.exports = {
  forEach(items, callback){
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  },
  getUsers() {
    return axios.get('/user.json').then(resp => resp.data);
  }
}
