import {ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITE} from '../actions'

const initialMoviesState=
{
    list:[],
    favourites:[],
    showFavourites:false
}
export default function movies (state=initialMoviesState,action)
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
        default:
          return state;
      }
}