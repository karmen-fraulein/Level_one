import React, { useEffect, useState } from "react";
import { fetchData } from "../fetch/Fetch";

const  SongsData = ({ songs, loadHandler }) => {
  const [data, setData] = useState([]);

  let url = `https://itunes.apple.com/search?term=${songs}`;

  let onPlayHandler = (e) => {
    console.log(e);
  };

  let getData = (url) => {
    loadHandler(true);
    console.log(data);
    fetchData(url, { mode: 'no-cors'})
      .then((data) => {
        setData(
          data.results.map((track) => ({
            track_name: track.trackName,
            artist_name: track.artistName,
            trackViewUrl: track.previewUrl,
            img: track.artworkUrl100,
            play: false
          }))
        );
      })
      .catch((error) => console.log(error));
    loadHandler(false);
  };

  useEffect(() => {
    getData(url);
  }, []);

  useEffect(() => {
    getData(url);
  }, [songs]);

  return (
    <div className="container">
      {data.length != 0 ? (
        <ul className="container-songs">
          {typeof data != "undefind"
            ? data.map((e, index) => (
                <li key={index}>
                  <img src={e.img} />
                  <div>
                    <h4>{e.track_name}</h4>
                    <h6>{e.artist_name}</h6>
                  </div>
                  <div>
                    <audio controls>
                      <source onClick={onPlayHandler} src={e.trackViewUrl} />
                    </audio>
                  </div>
                </li>
              ))
            : false}
        </ul>
      ) : (
        <h2 className="alert">No Results</h2>
      )}
    </div>
  );
}

export default SongsData;
