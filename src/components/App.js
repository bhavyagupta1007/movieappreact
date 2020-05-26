import React from 'react';
import {connect} from 'react-redux';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,setshowFavourite} from '../actions';
//import { connect } from '../index';

class App extends React.Component
 {
   componentDidMount()
   {
     

     this.props.dispatch(addMovies(data))
   }
   isMovieFavourite=(movie)=>
   {
       const {movies}=this.props;
       const index=movies.favourites.indexOf(movie);
       if(index !== -1)
       return true;
       return false;
   }
  onChangeTab=(value)=>
  {
    const {dispatch}=this.props;
    dispatch(setshowFavourite(value))
  }
   render()
   {
    const {movies,search}=this.props;
    const {list,favourites,showFavourites}=movies;
    const displayMovie= showFavourites?favourites:list;
    return (
      <div className="App">
       <Navbar dispatch={this.props.dispatch} search={search}/>
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
            dispatch={this.props.dispatch}
            isFavourite={this.isMovieFavourite(movie)}/>
          ))
           }
         </div>
         {displayMovie.length===0?<div className="no-movies">No Movies To Display</div>:null}
       </div>
      </div>
    );
      }
}

//class AppWrapper extends React.Component
//{
 // render()
 // {
   // return(
   // 
    //    <StoreContext.Consumer>
    //        {(store)=> <App store={store}/>}
     //   </StoreContext.Consumer>
   // );
 // }
//}
function mapStateToProps(state)
{
  return(
  {
   movies: state.movies,
   search: state.search
  });
}
const connectedAppComponent=connect(mapStateToProps)(App)
export default connectedAppComponent;
