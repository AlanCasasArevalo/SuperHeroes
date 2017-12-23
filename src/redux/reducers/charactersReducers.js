import * as types from '../types/charactersTypes'

const initialState = {
    isFetching: false,
    list: [],
    item: null
}

export default function reducer (state = initialState, action = {}) {

    switch (action.type){

        case types.CHARACTERS_SET_FETCHING:
            return {
                ...state,
                list: action.value
            }

        case types.CHARACTERS_UPDATE_SERIE:
            return {
                ...state,
                list: action.value
            }

        default:
            return state
    }
}








