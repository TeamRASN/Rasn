const axios = require('axios')

axios
  .post('http://127.0.0.1:3001/getAnimalsJSON', {
    todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })