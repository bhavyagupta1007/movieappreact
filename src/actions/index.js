

//action types
export const ADD_MOVIES="ADD_MOVIES";
export const ADD_FAVOURITE="ADD_FAVOURITES";
export const REMOVE_FAVOURITE="REMOVE_FAVOURITES";
export const SHOW_FAVOURITE="SHOW_FAVOURITES";
export const ADD_MOVIES_TO_LIST="ADD_MOVIES_TO_LIST";
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';

//action creators
export function addMovies(movies)
{
    return ({
        type: ADD_MOVIES,
        movies: movies
       });
}

export function addFavourite(movie)
{
    return ({
        type: ADD_FAVOURITE,
        movie
       });
}
export function removeFavourite(movie)
{
    return ({
        type: REMOVE_FAVOURITE,
        movie
       });
}

export function setshowFavourite(value)
{
    return ({
        type: SHOW_FAVOURITE,
        value
    })
}
export function addMoviesToList(movie)
{
    
    return ({
        type: ADD_MOVIES_TO_LIST,
        movie: movie
       });
}
export function handleMovieSearch(movie)
{
  
  const url=`http://www.omdbapi.com/?apikey=f28dee88&t=${movie}`;
  return function(dispatch)
  {
  fetch(url)
  .then(response=>response.json())
  .then(movie=>{
     dispatch(addMovieSearchResult(movie))
  });
}
}
export function addMovieSearchResult(movie)
{
    return(
    {
        type: ADD_SEARCH_RESULT,
        movie
    });
}