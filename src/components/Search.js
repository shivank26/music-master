import React from 'react';

class Search extends React.Component {
    state = {artistQuerry: ''};


    handleKeypress = event => {
        if(event.key === 'Enter') {
        this.searchArtist();
        }
    }

    updateArtistQuerry = event => {
        // console.log('event.targent.value', event.target.value);
        this.setState({artistQuerry: event.target.value})
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuerry);
    }

    render() {
        return (
            <div>
                <input
                    onChange={this.updateArtistQuerry}
                    onKeyPress={this.handleKeypress}
                    type="text"
                    placeholder='Artist Name'
                    className="form-control searchBox container"
                />
                <br/>
                <button onClick={this.searchArtist} className="btn btn-sm go-btn">
                    Search Artist  
                </button>
            </div>
        )
    }
}

export default Search;