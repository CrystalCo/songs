// Action creator
export const selectSong = song => {
    // Return an action.  Type always required; Payload optional
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};


