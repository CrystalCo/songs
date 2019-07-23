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
          Song ID: {song.id}
          <br />
          Title: {song.title}
          <br />
          Artist: {song.artist}
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