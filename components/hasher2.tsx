import * as React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Box from "components/Box";
import * as Text from "components/Text";
import { colorStyle } from "styled-system";
import Image from "components/Image";
import Button from "./Button";

const spotifyApi = new SpotifyWebApi();

const GetHashParams2 = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [nowPlaying, setNowPlayingName] = React.useState({
    name: "Not checked",
    albumArt: "",
  });
  const handleButtonClick = () => {
    setNowPlayingName({
      name: getNowPlaying.name,
      albumArt: "",
    });
  };
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    setUrl(window.location.href);
  });
  //   const [accessToken, setAccessToken] = React.useState(params.access_token)
  console.log("type of url is " + typeof url);
  const handleAccessToken = (params) => {
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
  };

  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = url;
    console.log(r);
    // window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    console.log("HELLO");
    console.log(hashParams);
    return hashParams;

    //     const params = getHashParams();
    //   console.log(params);
    //   handleAccessToken(params);
  };

  const params = getHashParams();
  const token = params.access_token;
  // const token= getHashParams()
  console.log(params.refresh_token);
  console.log(token);

  const getNowPlaying = () => {
    spotifyApi.getMyCurrentPlayingTrack;
    // spotifyApi.getMyCurrentPlaybackState();
    // .then((response) => {
    //   return response;
    // });
  };
  return (
    <Box>
      <Text.SectionHeader color="white">
        Hashparams is working, value is {url}
      </Text.SectionHeader>
      <Text.SectionSubheader color="white">
        Now playing: {nowPlaying.name}
      </Text.SectionSubheader>
      <Image src={nowPlaying.albumArt}></Image>
      <Button onClick={handleButtonClick}>Check now playing</Button>
    </Box>
  );
};

export default GetHashParams2;
