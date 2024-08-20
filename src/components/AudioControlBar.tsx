import React from 'react';
//import rewindIcon from '../assets/images/rewind.png';
//import playPauseIcon from '../assets/images/playPause.png';
//import forwardIcon from '../assets/images/forward.png';
//import thumbsUpIcon from '../assets/images/thumbsUp.png';
//import thumbsDownIcon from '../assets/images/thumbsDown.png';
//import loopIcon from '../assets/images/loop.png';
//import speakerIcon from '../assets/images/speaker.png';
//import '../css/AudioControlBar.css';

interface AudioControlBarProps {
  coverImage: string;
  artist: string;
  track: string;
}

const AudioControlBar: React.FC<AudioControlBarProps> = ({ coverImage, artist, track }) => {
  return (
    <div className="audio-control-bar">
      <div className="main-controls">
        <button className="control-btn">
          <img src={rewindIcon} alt="Rewind" className="control-img" />
        </button>
        <button className="control-btn">
          <img src={playPauseIcon} alt="Play/Pause" className="control-img" />
        </button>
        <button className="control-btn">
          <img src={forwardIcon} alt="Forward" className="control-img" />
        </button>
      </div>
      <div className="track-info-section">
        <img src={coverImage} alt={artist} className="album-cover" />
        <div className="track-details">
          <span className="track-name">{track}</span>
          <span className="artist-name">{artist}</span>
        </div>
        <div className="track-actions">
          <button className="control-btn">
            <img src={thumbsUpIcon} alt="Like" className="control-img" />
          </button>
          <button className="control-btn">
            <img src={thumbsDownIcon} alt="Dislike" className="control-img" />
          </button>
        </div>
      </div>
      <div className="extra-controls">
        <button className="control-btn">
          <img src={loopIcon} alt="Loop" className="control-img" />
        </button>
        <button className="control-btn">
          <img src={speakerIcon} alt="Volume" className="control-img" />
        </button>
      </div>
    </div>
  );
};

export default AudioControlBar;

