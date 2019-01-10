import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    // if song doesn't exist...
    if (!song) {
        return <div>Select a song</div>
    }
    return (
      <div> 
        <h3>Details for: </h3>
        <p>
            Title: {song.title}
            <br />
            Duration: {song.duration}
        </p> 
      
      </div>
    );
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
    // key doesn't have to be same name.  This also works:
    // return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);