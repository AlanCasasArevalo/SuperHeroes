import * as types from '../types/heroesTypes'
import { fetch } from '../../webservices/webservices'



function updateHeroesList(value) {
    return {
        type: types.HEROES_SET_FETCHING,
        value
    }
}

export function fetchHeroesList(){
    return(dispatch, getState) => {

        const fetchURL = '/getAllHeroes'

        fetch(fetchURL)
            .then(response =>{

                console.log("respuesta del servidor response: ", response)
                const list = response.results
                dispatch(updateHeroesList(list))
            })
            .catch(error => {
                console.log("Error: ", error)
            })

    }
}










