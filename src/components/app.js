import React, { Component } from 'react';
import styles from './app.css';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
      tracks: {},
      list: [0, 1, 2, 3, 4],
    };
  }
  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks, list } = this.state;

    return (
      <div className={styles.root}>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {tracks.items && <SongItem songData={tracks.items[0]} />}
        <div className="listStuff">
          {list.map(numb => <div key={numb}>{numb}</div>)}
        </div>
        <button onClick={() => this.setState({ list: [1, 2, 3, 4, 5] })}>change</button>
      </div>
    );
  }
}
