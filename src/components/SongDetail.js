import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({props}) => {
    console.log(props);
    return <div> Song Detail </div>
};

const mapStateToProps = state => {
    return { song: state.selectedSong };
    // key doesn't have to be same name.  This also works:
    // return { selectedSong: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);