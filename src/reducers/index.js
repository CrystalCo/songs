import { combineReducers } from 'redux';

// static list of songs/static Array
const songsReducer = () => {
    return [
        { title: 'Keep On Lying', duration: '5:35' },
        { title: 'Eventually', duration: '4:03' },
        { title: 'I Dreamt I Saw You In A Dream', duration: '3:42'},
        { title: 'A Walk', duration: '2:59'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    // The keys of this obj are going to be the keys that are in our state obj
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

