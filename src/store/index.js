import {configureStore} from '@reduxjs/toolkit'
import {addSong, removeSong, songsReducer} from './slices/songSlice'
import {addMovie, moviesReducer, removeMovie} from './slices/movieSlice'
import {reset} from './actions'

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
    },
})

export {addMovie, addSong, removeMovie, removeSong, reset, store}
