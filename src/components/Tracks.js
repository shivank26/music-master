import React from 'react';

class Tracks extends React.Component {

    state = { playing: false, audio: null, playingPreview: null};

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        if (!this.state.playing) {
            audio.play();
            this.setState({playing: true, audio, playingPreview: previewUrl})
        }
        else {
            this.state.audio.pause();
            if (this.state.playingPreview === previewUrl) {
                this.setState({playing: false});
            }
            else {
                audio.play();
                this.setState({audio, playingPreview: previewUrl})
            }
        }
    }

    trackIcon = track => {
        if (!track.preview_url) {
            return <span>N/A</span>
        }
        if (
            this.state.playing &&
            this.state.playingPreview === track.preview_url
        ) {
            return <span>| |</span>;
        }
        return <span className="play-btn">&#9654;</span>;
    }

    render() {

        const { tracks } = this.props;

        return(
            <div className="album">
                <div className="container-fluid">
                    {
                        tracks.map(track => {
                            const { id, name, album, preview_url } = track;

                            return (
                                <div className="album-card" key={id}  onClick={this.playAudio(preview_url)}>
                                    <img src={album.images[1].url} alt="track-poster"/>
                                    <p className="album-name">{name}</p>
                                    <p className="playButton">{this.trackIcon(track)}</p>
                                </div>
                            )
                        })
                    }
                </div>  
            </div>
        );
    }
}

export default Tracks;