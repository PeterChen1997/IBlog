import axios from 'axios'
import config from './config'

export function request(url, callback) {

  axios
    .get(`${config.url}` + url)
    .then(res => {
      callback(res)
    })
    
}
