import React from 'react'
import '../App.css';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';
import icon from '../assets/music-master-logo.png'

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends React.Component {

  componentDidMount() {
    this.searchArtist('odesza');
  }

  state = { artist: null, tracks: []};
  

  searchArtist = artistQuerry => {
    fetch(`${API_ADDRESS}/artist/${artistQuerry}`)
    .then(response => response.json())
    .then(json => {
      console.log('json', json);

      if (json.artists.total > 0 ) {
        const artist = json.artists.items[0];
        // console.log('artist', artist);
        this.setState ({artist});

        fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        .then(response => response.json())
        .then(json => {
          this.setState({tracks: json.tracks})
          console.log('tracks', json.tracks);
          
        })
        .catch(error => alert(error.messege))
      }
    })
    .catch(error => alert(error.messege))
  }


  render() {
    return (
      <div className="App">
        <div className="appHeader">
          {/* <h2 className="headerTitle">Music Master</h2> */}
          <img src={icon} alt="Music Master Icon" className="header-icon"/>
          <Search searchArtist={this.searchArtist}/>
          <Artist artist={this.state.artist}/>
          <Tracks tracks={this.state.tracks}/>
        </div>
      </div>
    );
  }
}

export default App;
