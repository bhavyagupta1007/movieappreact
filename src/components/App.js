import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,setshowFavourite} from '../actions'

class App extends React.Component
 {
   componentDidMount()
   {
     const {store}=this.props;
     //make api call
     //dispatcg an action
     store.subscribe(()=>{

        this.forceUpdate();
     });
     store.dispatch(addMovies(data))
   }
   isMovieFavourite=(movie)=>
   {
       const {favourites}=this.props.store.getState();
       const index=favourites.indexOf(movie);
       if(index !== -1)
       return true;
       return false;
   }
  onChangeTab=(value)=>
  {
    const {store}=this.props;

    store.dispatch(setshowFavourite(value))
  }
   render()
   {
    
    const {list,favourites,showFavourites}=this.props.store.getState();
    const displayMovie= showFavourites?favourites:list;
    return (
      <div className="App">
       <Navbar />
       <div className="main">
         <div className="tabs">
           <div className={`tab ${showFavourites?'':'active-tab'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
           <div className={`tab ${showFavourites?'active-tab':''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
         </div>
         <div className="list">
           {displayMovie.map((movie,index)=>(
            <MovieCard 
            movie={movie} 
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
            isFavourite={this.isMovieFavourite(movie)}/>
          ))
           }
         </div>
         {displayMovie.length===0?<div className="no-movies"No Movies To Display></div>:null}
       </div>
      </div>
    );
      }
}

export default App;
