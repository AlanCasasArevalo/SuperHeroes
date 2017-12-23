import * as types from '../types/charactersTypes'
import { fetch } from '../../webservices/webservices'



function updateCharactersList(value) {
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value
    }
}

export function updateCharacterSelected(value ) {
    return {
        type: types.CHARACTERS_UPDATE_SERIE,
        value
    }
}

export function fetchCharactersList(){
    
    return(dispatch, getState) => {
        
        const fetchURL = '/characters?limit=50&offset=50'
        
        fetch(fetchURL)
        .then(response =>{
                const list = response.data
                dispatch(updateCharactersList(list))
            })
            .catch(error => {
                console.log("Error: ", error)
            })

    }
}










