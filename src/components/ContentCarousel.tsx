import React from 'react';
//import '../css/ContentCarousel.css';

interface ContentItem {
  imageUrl: string;
  headline: string;
  description?: string;
}

interface CarouselProps {
  profilePicture: string;
  profileName: string;
  carouselTitle: string;
  contentItems: ContentItem[];
  displayShape: 'rectangle' | 'circle';
}

const ContentCarousel: React.FC<CarouselProps> = ({ profilePicture, profileName, carouselTitle, contentItems, displayShape }) => {
  return (
    <section className="content-carousel">
      <div className="carousel-container">
        <div className="carousel-header">
          <img src={profilePicture} alt={profileName} className="profile-image" />
          <h2>{carouselTitle}</h2>
        </div>
        <div className="carousel-content">
          {contentItems.map((content, index) => (
            <div key={index} className={`carousel-item ${displayShape}`}>
              <img src={content.imageUrl} alt={content.headline} className="carousel-image" />
              <div className="item-details">
                <p className="item-title">{content.headline}</p>
                {content.description && <p className="item-description">{content.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCarousel;
