import * as types from '../types/charactersTypes'
import { fetch } from '../../webservices/webservices'
import * as qs from "qs";



function updateCharactersList(list, total) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        list,
        total
    }
}

export function updateCharactersListOffset(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST_OFFSET,
        value,
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

export function initCharactersList() {
    return(dispatch, getState) => {

        dispatch(updateCharactersList( [], 0 ))
        dispatch(updateCharactersListOffset( 0 ))
        dispatch(fetchCharactersList())

    }
}


export function fetchCharactersListByName( characterName ){
        return(dispatch, getState) => {
            // const fetchURL = '/characters?name=abyss'
            const fetchURL = `/characters?name=${characterName}`

            fetch(fetchURL)
                .then(response =>{
                    const item = response.data
                    console.log("fetchCharactersListByName response", response)
                    console.log("fetchURL", fetchURL)
                    dispatch(updateCharactersList(item))
                })
                .catch(error => {
                    console.log("Error: ", error)
                })

        }
}

export function fetchCharactersList(){

    return(dispatch, getState) => {

        dispatch(setCharactersFetching(true))

        const state = getState()
        const list = state.charactersReducers.list
        const offset = state.charactersReducers.offset
        const limit = 10
        const filters = {
            offset: offset,
            limit : limit
        }

        // const fetchURL = '/characters?limit=100&offset=0'
        const fetchURL = '/characters?' + qs.stringify(filters)
        console.log("fetchURL: ", fetchURL)

        fetch(fetchURL)
        .then(response =>{
            dispatch(setCharactersFetching(false))
            const newList = [...list, ...response.data.results]
            dispatch(updateCharactersList(newList, response.data.total))
        })
        .catch(error => {
            dispatch(setCharactersFetching(false))
            console.log("Error: ", error)
        })

    }
}








