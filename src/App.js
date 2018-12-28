import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



const movies = [
  {
    title:"Matrix",
    poster:"https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
  },
  {
    title:"Full Metal Jacket",
    poster:"https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
  },
  {
    title:"Old boy",
    poster:"https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
  },
  {
    title:"Star Wars",
    poster:"https://upload.wikimedia.org/wikipedia/en/4/4a/Star_Tours%E2%80%94The_Adventures_Continue_poster.jpg"
  }
]


class App extends Component {




  render() {
return(
  <div className="App">
  {movies.map((movie, index) =>{

return <Movie title={movie.title} poster={movie.poster} key={index}/>
  })}

  </div>
);      
    
}
}

export default App;
