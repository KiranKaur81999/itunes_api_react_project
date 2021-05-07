import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header';
import axios from 'axios';
import ArtistGrid from './components/artists/ArtistGrid';
import Search from './components/ui/Search';

const App = ()=>{
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');


    useEffect(()=>{
        const fetchItems = async ()=>{
          const result = await axios(`https://itunes.apple.com/search?term=${query}`,{
            mode: 'no-cors'
          });
          console.log(result.data);
          setItems(result.data);
          setIsLoading(false);
        }
        fetchItems();
    }, [query]);

     return <div className = "container">
        <Header />
        <Search getQuery={(q)=>setQuery(q)}/>
        <ArtistGrid items = {items} isLoading = {isLoading}/>
    </div>
}

export default App;
