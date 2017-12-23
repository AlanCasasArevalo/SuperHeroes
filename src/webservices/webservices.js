import axios from 'axios'
import * as constants from './constants'

export function configureAxios() {
    axios.defaults.baseURL  = constants.BASE_URL
    axios.defaults.headers.common['Referer'] = constants.MARVEL_REFERER;
    axios.defaults.headers.post['Content=Type'] = constants.BASE_CONTENT_TYPE
}

export function fetch(url){

    const urlToAxiosFetch = url + '&apikey=' + constants.MARVEL_PUBLIC_API_KEY

    return axios
        .get(urlToAxiosFetch)
        .then((response) => {
            return response.data
        }).catch((error) => {
            throw error
        })
}
