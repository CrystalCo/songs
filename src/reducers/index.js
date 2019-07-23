import { combineReducers } from 'redux';

// static list of songs/static Array
const songsReducer = () => {
    return [
        { id: 0, title: "All of Your Love", artist: "Hellogoodbye"},
        { id: 1, title: "All She Does is", artist: "The I.L.Y.'s"},
        { id: 2, title: "All the Small Things", artist: "blink-182"},
        { id: 3, title: "Eventually", artist: "Tame Impala"},
        { id: 4, title: "Whats My Age Again?", artist: "Blink-182"},
        { id: 5, title: "Cold",  artist: "Alison Wonderland"},
        { id: 6, title: "Thunderstruck", artist: "2CELLOS"}, 
        { id: 7, title: "Vivaldi Storm", artist: "2CELLLOS"}, 
        { id: 8, title: "You Are Too", artist: "Armin van Buuren"}, 
        { id: 9, title: "In the Morning", artist: "ZHU"}, 
        { id: 10, title: "Don't Trust Me", artist: "3OH!3"}, 
        { id: 11, title: "Piano Sonata No. 16",  artist: "Wolfgang Amadeus Mozart"}
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

