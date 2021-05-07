import React from 'react';
import ArtistItem from './ArtistItem';
import Spinner from '../ui/Spinner';

const ArtistGrid = ({items, isLoading})=>{
    return isLoading ? <Spinner /> : <section className = "cards">
        {items.results.map( item =>(
            <ArtistItem key={item.trackId} item = {item}></ArtistItem>
        ))}
    </section>
}

export default ArtistGrid;