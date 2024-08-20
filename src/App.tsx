import React from 'react';
import Header from './components/Navbar';
import ListenAgain from './components/ReplaySection';
import QuickPicks from './components/SongRecommendations';
import SimilarArtists from './components/SimilarArtists';
import RecommendedAlbums from './components/SuggestedRecords';
import PlaybackBar from './components/PlaybackBar;
import { similarArtists, user, headerData, playlists, quickPicksSongs, recommendedAlbums } from './data/data';
import './App.css';

const artist1 = {
  name: "Artist 1",
  image: "path/to/artist1-image.jpg", // Reemplaza con la ruta correcta de la imagen
};

const App: React.FC = () => {
  const currentTrack = quickPicksSongs[0]; // Seleccionar la primera canción como ejemplo

  return (
    <div className="app">
      <Header user={user} headerData={headerData} />
      <main>
        <ListenAgain user={user} playlists={playlists} />
        <SimilarArtists artistName={artist1.name} similarArtists={similarArtists} user={user} />
        <QuickPicks userImage={user.profileImage} songs={quickPicksSongs} />
        <RecommendedAlbums user={user} albums={recommendedAlbums} />
      </main>
      <PlaybackBar
        albumImage={currentTrack.albumImage}
        artistName={currentTrack.artistName}
        songTitle={currentTrack.songTitle}
      />
    </div>
  );
};

export default App;
