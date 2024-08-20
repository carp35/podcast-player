import React from 'react';
//import '../css/SuggestedRecords.css';

interface SuggestedRecordsProps {
  profile: {
    avatarUrl: string;
  };
  records: { coverUrl: string; title: string }[];
}

const SuggestedRecords: React.FC<SuggestedRecordsProps> = ({ profile, records }) => {
  return (
    <section className="suggested-records">
      <div className="profile-section">
        <img src={profile.avatarUrl} alt="Profile" className="avatar-img" />
        <div className="profile-details">
          <p className="heading">Suggested Records</p>
        </div>
      </div>
      <div className="nav-controls">
        <button className="nav-btn prev-btn">❮</button>
        <button className="nav-btn next-btn">❯</button>
      </div>
      <div className="records-list">
        {records.map((record, index) => (
          <div key={index} className="record-card">
            <img src={record.coverUrl} alt={record.title} className="record-img" />
            <p className="record-title">{record.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuggestedRecords;

