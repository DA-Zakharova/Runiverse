import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer, { setFavorites } from "./favoritesSlice";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },
});

const STORAGE_KEY = "runiverse_favorites";

try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
        store.dispatch(setFavorites(parsed));
        }
    }
    } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
}

store.subscribe(() => {
    try {
        const items = store.getState().favorites.items;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
    }
});