import * as types from '../types/charactersTypes'
import { fetch } from '../../webservices/webservices'



function updateCharactersList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value
    }
}

export function setCharactersFetching( value ) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value
    }
}

export function updateCharacterSelected( value ) {
    return {
        type: types.CHARACTERS_UPDATE_CHARACTER,
        value
    }
}


// export function fetchCharacterByName( value ){
//     return {
//         type: types.CHARACTERS_UPDATE_CHARACTER_BY_NAME,
//         value
//     }
// }
//
// export function fetchCharactersListByName( characterName ){
//     // https://gateway.marvel.com:443/v1/public/characters?name=wolverine&apikey=07914c03a174ab378544fa47df86621a
//     //https://gateway.marvel.com:443/v1/public/characters?name=wolverine&limit=50&offset=50&apikey=07914c03a174ab378544fa47df86621a
//         return(dispatch, getState) => {
//             const fetchURL = `/characters?name=${characterName}&limit=50&offset=50`
//
//             fetch(fetchURL)
//                 .then(response =>{
//                     const item = response.data
//                     console.log("fetchCharactersListByName response", response)
//                     console.log("fetchURL", fetchURL)
//                     dispatch(fetchCharacterByName( item ))
//                 })
//                 .catch(error => {
//                     console.log("Error: ", error)
//                 })
//
//         }
// }

export function fetchCharactersList(){
    
    return(dispatch, getState) => {

        dispatch(setCharactersFetching(true))
        const fetchURL = '/characters?limit=5&offset=5'
        
        fetch(fetchURL)
        .then(response =>{
                dispatch(setCharactersFetching( false ))
                const list = response.data
                dispatch(updateCharactersList(list))
            })
            .catch(error => {
                dispatch(setCharactersFetching( false ))
                console.log("Error: ", error)
            })

    }
}










