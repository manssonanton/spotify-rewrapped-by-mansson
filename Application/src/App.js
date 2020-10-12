import React, { useEffect } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Components/Login'
import Wrapped from './Components/Wrapped'
import { getTokenFromResponse } from './Shared/Spotify';
import { useStateValue } from "./Components/StateProvider";

const spotify = new SpotifyWebApi();
function App() {

  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse(); //get token
    window.location.hash = ""; // clear url
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      // spotify.getMyTopArtists({ limit: 10, offset: 20 }).then((response) =>
      //   dispatch({
      //     type: "SET_TOP_ARTISTS",
      //     top_artists: response,
      //   })
      // );

      spotify.getMyTopArtists({ limit: 5, time_range: 'short_term' }).then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      spotify.getMyTopTracks({ limit: 5, time_range: 'long_term' }).then((response) =>
        dispatch({
          type: "SET_TOP_TRACKS",
          top_artists: response,
        })
      );


      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, [token, dispatch])

  return (
    <div className="App">
      <header className="App-header">
        {!token ? <Login /> : <Wrapped spotify={spotify} />}
      </header>
    </div>
  );
}

export default App;
