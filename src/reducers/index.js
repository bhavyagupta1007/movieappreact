import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITE,ADD_MOVIES_TO_LIST,ADD_SEARCH_RESULT} from '../actions'
import {combineReducers} from 'redux';


const initialMoviesState=
{
    list:[],
    favourites:[],
    showFavourites:false
};
export function movies(state=initialMoviesState,action)
{
   
    /*  if(action.type === ADD_MOVIES)
      {
          return {
              ...state,
              list:action.movies,

          }
      }
      return state;*/
      switch(action.type){
          case ADD_MOVIES:
          return {
            ...state,
            list:action.movies,
        }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const fav=state.favourites;
            const filteredarray=fav.filter(movie=>movie.Title!== action.movie.Title);
           
            return {
                ...state,
               favourites: filteredarray
            }
        case SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites:action.value
            }
        case ADD_MOVIES_TO_LIST:
            return {
                ...state,
                list: [action.movie,...state.list]
            }

        default:
          return state;
      }
};

const initialSearhchState= {
    showSearchResults:false,
    result:{}
};
export function search(state=initialSearhchState,action)
{
    switch(action.type)
    {
        case ADD_SEARCH_RESULT:
        return {
          ...state,
          result: action.movie,
          showSearchResults: true
      }
      case ADD_MOVIES_TO_LIST:
        return {
            ...state,
            showSearchResults: false
        }

      default:
          return state;
    }
}



export default combineReducers({
  movies: movies,
  search: search
});