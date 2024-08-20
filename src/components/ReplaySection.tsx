import React from 'react';
//import '../css/ReplaySection.css';

interface Profile {
  username: string;
  avatarUrl: string;
}

interface ReplaySectionProps {
  profile: Profile;
  albums: { coverImage: string; title: string }[];
}

const ReplaySection: React.FC<ReplaySectionProps> = ({ profile, albums }) => {
  return (
    <section className="replay-section">
      <div className="profile-info">
        <img src={profile.avatarUrl} alt={profile.username} className="profile-avatar" />
        <div className="profile-details">
          <p className="section-heading">Replay</p>
        </div>
      </div>
      <div className="carousel-navigation">
        <button className="nav-button prev-button">❮</button>
        <button className="nav-button next-button">❯</button>
      </div>
      <div className="album-list">
        {albums.map((album, index) => (
          <div key={index} className="album-card">
            <img src={album.coverImage} alt={album.title} className="album-cover" />
            <p className="album-title">{album.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReplaySection;

