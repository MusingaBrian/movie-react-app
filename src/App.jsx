/* eslint-disable no-unused-vars */
import {useEffect} from 'react'
import Navbar from './components/Navbar'

// c372fe48

const API_KEY = "http://www.omdbapi.com?apikey=c372fe48";

function App() {

  const searchMovies = async (title) => {

    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();

    // console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, [])
  
  return (
    <div className="w-screen bg-lime-100 h-screen">
      <Navbar />
    </div>
  )
}

export default App