import React from 'react';

const ArtistItem = ({item})=>{
    return (
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
            <h1>{item.trackName}</h1>
              <img src={item.artworkUrl100} alt='' />
              
            </div>
            <div className='card-back'>
              
              <ul>
                <li>
                  <strong>Collection Name:</strong> {item.collectionName}
                </li>
                <li>
                    <audio src={item.previewUrl} type='audio/mp4'controls width="50px" height="50px"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
}

export default ArtistItem;