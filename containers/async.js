import { requestAlbumData, receiveAlbumData, getSearchString } from './actions.js';

export const getAlbumDataFromApi = () => (dispatch) => {

    fetch('http://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(response => {
        let getalbumData = response;
        dispatch(receiveAlbumData(getalbumData))
    });
}

export const searchAlbumData = (searchString) => (dispatch) => {
    if(searchString !== '') {
        fetch('http://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json())
        .then(response => {
            let getalbumData = response;
            let lowerSearchString = searchString.toLowerCase();
            let filteredAlbum = getalbumData.filter((item) => {
                let tempTitle = item.title.toLowerCase();
               if(tempTitle.indexOf(lowerSearchString) !== -1) {
                 return true;
               }
               return false;
            });
            dispatch(receiveAlbumData(filteredAlbum))
           
        });
       
    } else {
        dispatch(getAlbumDataFromApi())
    }
    
}