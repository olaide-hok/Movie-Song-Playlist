import {createSlice} from '@reduxjs/toolkit'
import {reset} from '../actions'

const songSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            // action.payload = string
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
    },
    extraReducers(builder) {
        // shows different ways to access the actionCreator string
        // builder.addCase('movie/reset', (state, action) => {
        //     return []
        // })
        // builder.addCase(
        //     moviesSlice.actions.reset.toString(),
        //     (state, action) => {
        //         return []
        //     }
        // )
        // builder.addCase(moviesSlice.actions.reset, (state, action) => {
        //     return []
        // })
        builder.addCase(reset, (state, action) => {
            return []
        })
    },
})

export const {addSong, removeSong} = songSlice.actions
export const songsReducer = songSlice.reducer
