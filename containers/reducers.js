import { REQUEST_ALBUM_DATA, RECEIVE_ALBUM_DATA, GET_SEARCH_STRING  } from './actions.js'

const initialState = {
    albums: [],
    searchValue: '',
}

const albumsReducers = (state = initialState, action) => {
   
    switch(action.type) {
        case REQUEST_ALBUM_DATA:
            return {
                ...state,
                albums: [],
            };
        case RECEIVE_ALBUM_DATA:
       
            return {
                ...state,
                albums: action.payload
            }
        case GET_SEARCH_STRING:
           return {
               ...state,
               searchValue: action.payload
           }
        default:
            return state;
    }
}

export default albumsReducers;