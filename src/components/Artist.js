import React from 'react';

const Artist = ({artist}) => {

    if (!artist) return null;

    const {images, name, followers , genres} = artist;

    return (
        <div className="artistProfile">
            <img src={images[0] && images[0].url}
                alt='artist-profile'
                className="artistImage img-fluid"/>
            <h3 className="artistName">{name}</h3>
            <p>{followers.total} Followers</p>
            <p>{genres.join(' | ')}</p>
            
        </div>
    )
}

export default Artist;