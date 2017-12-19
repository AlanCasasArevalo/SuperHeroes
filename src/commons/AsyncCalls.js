import axios from 'axios'

export function fetchSuperHeroes() {
    const fetchURL = '/getAllHeroes'
    // const fetchURL = '/casas'
    console.log("FetchURL", axios.get(fetchURL))
    return axios.get(fetchURL)
}

//
// export function fetch(url){
//     return axios
//         .get(url)
//         .then((response) => {
//             return response.data
//         }).catch((error) => {
//             throw error
//         })
// }
