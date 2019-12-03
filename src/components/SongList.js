import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState ([
    {title: 'hello', id: 1},
    {title: 'bue', id: 2},
    {title: 'byeye', id: 3},
  ]);

  const [age, setAge] = useState (20);

  const addSong = title => {
    setSongs ([...songs, {title, id: uuid ()}]);
  };
  useEffect (
    () => {
      console.log ('useffect', songs);
    },
    [songs]
  );
  return (
    <div className="song-list">
      <ul>
        {songs.map (song => {
          return <li key={song.id}>{song.title}</li>;
        })}

      </ul>
      <NewSongForm addSong={addSong} />
      <div className="age">{age}</div>
      <button onClick={() => setAge (age + 1)}>Add 1 to age</button>
    </div>
  );
};

export default SongList;
