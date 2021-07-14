import * as React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Box from "components/Box";
import * as Text from "components/Text";
import { colorStyle } from "styled-system";
import Image from "components/Image";
import Button from "./Button";
import { getLyrics, getSong } from "genius-lyrics-api";

const spotifyApi = new SpotifyWebApi();

const GetHashParams1 = () => {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [nowPlaying, setNowPlayingName] = React.useState({
    name: "Not checked",
    albumArt: "",
  });
  const [userTracks, setUserTracks] = React.useState([]);
  const [flaggedTracks, setFlaggedTracks] = React.useState([]);
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    setUrl(window.location.href);
  });

  const handleAccessToken = (params) => {
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    return token;
    setLoggedIn(true);
  };
  const useToken = () => {
    if (token) {
      setLoggedIn(!loggedIn);
    }
  };
  // const error= console.log('ERROR HANAD NOT PLAYING')
  const getNowPlaying = () => {
    spotifyApi.getMyCurrentPlayingTrack().then((response) => {
      setNowPlayingName({
        name: response.item.name,
        albumArt: response.item.album.images[0].url,
      });
    });
  };

  let names = [];
  let tracks = [];
  let flaggedSongs = [];
  const limit = 4;
  let offset = 0;

  const flagSong = (song) => {
    let songInfo = {
      apiKey:
        "cZrzF0cQ59UJSbKbDLb8wz8bxQaxWrrhpoHp44u4-0CeguEfjmevGhIh6e5OtM9j",
      title: song.track.name,
      artist: song.track.artists[0].name,
      optimizeQuery: true,
    };

    try {
      getLyrics(songInfo).then((lyrics) => {
        if (lyrics != null && lyrics.includes(word)) {
          flaggedSongs.push(song);
        } else if (lyrics != null && lyrics.includes(word) == false) {
          names.push(song);
        } else {
          console.log(song.track.name);
        }
      });
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }

    return setFlaggedTracks(flaggedSongs), setUserTracks(names);
  };

  const getSavedSongs = async () => {
    for (let counter = 0; counter < 3; counter++) {
      await spotifyApi
        .getMySavedTracks({ limit: limit, offset: offset })
        .then((response) => {
          if (response.items.length >= 1) {
            tracks.push(response.items);
          } else {
            return;
          }
          offset += limit;
        });
    }

    tracks.forEach((item) => {
      item.forEach((item2) => {
        // names.push(item2);
        console.log("before item2 name");
        console.log(item2.track.name);

        flagSong(item2);
      });
    });

    console.log("before non-flagged songs");
    console.log(names);

    console.log("before flagged songs");
    console.log(flaggedSongs);
  };
  const word = "head";

  // const getSavedSongs1 = async (token) => {
  //   const result = await fetch(`https://api.spotify.com/v1/me/tracks`, {
  //     method: "GET",
  //     headers: { Authorization: "Bearer " + token },
  //   });

  //   const data = await result.json();
  //   return data;
  // };

  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /(access_token|refresh_token)+=?([^&;]*)/g,
      q = url;
    console.log(r);

    e = r.exec(q);
    console.log(e);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }

    return hashParams;
  };

  const params = getHashParams();
  const token = params.access_token;
  handleAccessToken(params);

  return (
    <Box>
      <Text.SectionHeader color="white">
        Hashparams is working, value is {url}
      </Text.SectionHeader>
      <Text.SectionSubheader color="white">
        Now playing: {nowPlaying.name}
      </Text.SectionSubheader>
      <Text.Body color="white">{nowPlaying.albumArt} </Text.Body>
      <Image src={nowPlaying.albumArt}></Image>

      {loggedIn && (
        <Box>
          <Button
            onClick={() => {
              getNowPlaying();
            }}
          >
            Check now playing
          </Button>

          <Box>
            <Text.SectionHeader color="white">Saved Songs</Text.SectionHeader>

            <Button
              onClick={() => {
                getSavedSongs();
              }}
            >
              Check non-flagged songs
            </Button>
            {/* <Text.Body color="white">{userTracks.track.name}</Text.Body> */}
            {/* <Text.Body color="white">{userTracks.savedAt}</Text.Body> */}
            {userTracks.map(({ track }) => (
              <Text.Body color="white">{track.name}</Text.Body>
            ))}
            <Text.SectionHeader color="white">Flagged Songs</Text.SectionHeader>
            {flaggedTracks.map(({ track }) => (
              <Text.Body color="white">{track.name}</Text.Body>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default GetHashParams1;
