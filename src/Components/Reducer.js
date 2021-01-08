// import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists_short: null,
    top_artists_long: null,
    top_tracks_short: null,
    top_tracks_long: null,
    playing: false,
    item: null,
    scrollnumber: 1
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS_SHORT":
            return {
                ...state,
                top_artists_short: action.top_artists_short,
            };
        case "SET_TOP_ARTISTS_LONG":
            return {
                ...state,
                top_artists_long: action.top_artists_long,
            };

        case "SET_TOP_TRACKS_SHORT":
            return {
                ...state,
                top_tracks_short: action.top_tracks_short,
            };
        case "SET_TOP_TRACKS_LONG":
            return {
                ...state,
                top_tracks_long: action.top_tracks_long,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SCROLL_DOWN":
            return {
                ...state,
                scrollnumber: action.scrollnumber,
            };
        case "SCROLL_UP":
            return {
                ...state,
                scrollnumber: action.scrollnumber,
            };
        default:
            return state;
    }
};

export default reducer;