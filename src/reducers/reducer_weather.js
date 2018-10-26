import {FETCH_WEATHER} from '../actions/index'

export default function(state=[],action){
    console.log('data is ',action.payload)
    switch(action.type){
        case 'FETCH_WEATHER' : return(
            [action.payload.data, ...state]
        )
    }
    return state
}