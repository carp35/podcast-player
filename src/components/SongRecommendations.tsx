import React from 'react';
import '../css/SongRecommendations.css';

interface Track {
  coverImage: string;
  artist: string;
  title: string;
}

interface RecommendationsProps {
  profileImage: string;
  tracks: Track[];
}

const SongRecommendations: React.FC<RecommendationsProps> = ({ profileImage, tracks }) => {
  return (
    <section className="song-recommendations">
      <div className="recommendations-header">
        <div className="profile-info">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="header-content">
            <h2>Create Radio from a Track</h2>
            <h3>Song Recommendations</h3>
          </div>
        </div>
        <div className="play-all-section">
          <button className="play-all-btn">Play All</button>
          <div className="carousel-controls">
            <button className="carousel-btn prev-btn" aria-label="Previous Track">❮</button>
            <button className="carousel-btn next-btn" aria-label="Next Track">❯</button>
          </div>
        </div>
      </div>
      <div className="recommendations-list">
        {tracks.map((track, idx) => (
          <div key={idx} className="recommendation-item">
            <img src={track.coverImage} alt={`Cover of ${track.title}`} className="cover-image" />
            <div className="track-info">
              <p className="track-title">{track.title}</p>
              <p className="track-artist">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SongRecommendations;
