import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.id}>
                    <div className="right floated content">
                        <button 
                          className="ui button primary"
                          onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content"> {song.title} </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list"> {this.renderList()} </div>
    }
}

// Every time 'Select' button is pressed, it calls this f(x):
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

/**
 * When we pass in our action creators, the connect() does a special operation 
 * on the f's inside the Obj.  Wraps them all up in another JS f(x)
 * Takes the action that's returned and automatically calls the DISPATCH f(x)
 */
export default connect(mapStateToProps, { selectSong })(SongList);