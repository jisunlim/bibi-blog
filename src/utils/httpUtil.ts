import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.github.com/repos/jisunlim/bibi-blog'
})

export default http
