import * as types from '../types/heroesTypes'

const initialState = {
    isFetching: false,
    list: [],
    item: null
}

export default function reducer (state = initialState, action = {}) {

    switch (action.type){

        case types.HEROES_SET_FETCHING:
            return {
                ...state,
                list: action.value
            }

        default:
            return state
    }
}








