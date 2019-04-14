export const REQUEST_ALBUM_DATA = 'REQUEST_ALBUM_DATA'
export const RECEIVE_ALBUM_DATA = 'RECEIVE_ALBUM_DATA'
export const GET_SEARCH_STRING = 'GET_SEARCH_STRING'

export const requestAlbumData = () => {
    return {
        type: REQUEST_ALBUM_DATA,
        payload: {}
    }
}

export const receiveAlbumData = (data) => {
    return {
        type: RECEIVE_ALBUM_DATA,
        payload: data
    }
}

export const getSearchString = (searchValue) => {
    return {
        type: GET_SEARCH_STRING,
        payload: searchValue
    }
} 