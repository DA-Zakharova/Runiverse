import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const {kind, id} = action.payload;

            const exists = state.items.find(
                (item) => item.kind === kind && item.id === id
            );

            if (exists) {
                state.items = state.items.filter(
                    (item) => !(item.kind === kind && item.id === id)
                );
            } else {
                state.items.push({kind, id});
            }
        },

        setFavorites: (state, action) => {
            state.items = action.payload
        },

        clearFavorites: (state) => {
            state.items = []
        }
    },
})


export const { toggleFavorite, setFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;