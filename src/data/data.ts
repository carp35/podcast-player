import userProfileImage from '../assets/images/user.jpeg';
import menuIcon from '../assets/images/menu.png';
import youtubeLogo from '../assets/images/logoYoutube.png';

// Escuchar de nuevo
import playlist1 from '../assets/images/playlists/portada1.jpg';
import playlist2 from '../assets/images/playlists/portada2.png';
import playlist3 from '../assets/images/playlists/portada3.png';
import playlist4 from '../assets/images/playlists/portada4.png';

// Similar to
import similarArtist1 from '../assets/images/artists/artist1.jpg';
import similarArtist2 from '../assets/images/artists/artist2.jpg';
import similarArtist3 from '../assets/images/artists/artist3.jfif';
import similarArtist4 from '../assets/images/artists/artist4.jfif';

// Quick Pics
import albumImage1 from '../assets/images/albums/artist1.jpg';
import albumImage2 from '../assets/images/albums/artist2.jpg';
import albumImage3 from '../assets/images/albums/artist3.jfif';
import albumImage4 from '../assets/images/albums/artist4.jfif';
import albumImage5 from '../assets/images/albums/artist1.jpg';
import albumImage6 from '../assets/images/albums/artist2.jpg';
import albumImage7 from '../assets/images/albums/artist3.jfif';
import albumImage8 from '../assets/images/albums/artist4.jfif';

// Recomendados
import albumRecommended1 from '../assets/images/albums/artist1.jpg';
import albumRecommended2 from '../assets/images/albums/artist2.jpg';
import albumRecommended3 from '../assets/images/albums/artist3.jfif';

// Datos del header
export const headerData = {
  menuIcon: menuIcon,
  youtubeLogo: youtubeLogo,
};

// Datos del usuario
export const user = {
  name: "Pablo Campestrini",
  profileImage: userProfileImage,
};

// Datos de las listas de reproducción (Listen Again)
export const playlists = [
  { image: playlist1, name: "Lo mejor Latino" },
  { image: playlist2, name: "Rockeala" },
  { image: playlist3, name: "Música Chill" },
  { image: playlist4, name: "Lo mejor de los 90's" }
];

// Datos de los artistas similares (Similar to)
export const similarArtists = [
  { name: "Artista 1", image: similarArtist1 },
  { name: "Artista 2", image: similarArtist2 },
  { name: "Artista 3", image: similarArtist3 },
  { name: "Artista 4", image: similarArtist4 }
];

// Datos de las canciones sugeridas (Quick Picks)
export const quickPicksSongs = [
  { albumImage: albumImage1, artistName: "Artista 1", songTitle: "Canción 1" },
  { albumImage: albumImage2, artistName: "Artista 2", songTitle: "Canción 2" },
  { albumImage: albumImage3, artistName: "Artista 3", songTitle: "Canción 3" },
  { albumImage: albumImage4, artistName: "Artista 4", songTitle: "Canción 4" },
  { albumImage: albumImage5, artistName: "Artista 5", songTitle: "Canción 5" },
  { albumImage: albumImage6, artistName: "Artista 6", songTitle: "Canción 6" },
  { albumImage: albumImage7, artistName: "Artista 7", songTitle: "Canción 7" },
  { albumImage: albumImage8, artistName: "Artista 8", songTitle: "Canción 8" },
];

// Datos de álbumes recomendados
export const recommendedAlbums = [
  { image: albumRecommended1, name: 'Álbum Recomendado 1' },
  { image: albumRecommended2, name: 'Álbum Recomendado 2' },
  { image: albumRecommended3, name: 'Álbum Recomendado 3' },
];
