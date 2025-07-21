import React, { useRef } from 'react';

const images = [
  {
    src: '/divinecore pc.jpg',
    title: 'Project One',
    link: 'https://www.ecommified.in/',
  },
  {
    src: '/divinecore pc.jpg',
    title: 'Project Two',
    link: '#',
  },
  {
    src: '/divinecore pc.jpg',
    title: 'Project Three',
    link: '#',
  },
  {
    src: '/divinecore pc.jpg',
    title: 'Project Four',
    link: '#',
  },

];

const ImageCards = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="slider-wrapper">
      <button onClick={scrollLeft} className="nav-btn side-btn left-btn">←</button>

      <div className="cards-container" ref={sliderRef}>
        {images.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.src} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="card-buttons">
                <a href={item.link} className="btn" target="_blank" rel="noopener noreferrer">
                  Visit Link
                </a>
                <button className="btn">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={scrollRight} className="nav-btn side-btn right-btn">→</button>

      {/* Mobile buttons */}
      <div className="mobile-buttons">
        <button onClick={scrollLeft} className="nav-btn">←</button>
        <button onClick={scrollRight} className="nav-btn">→</button>
      </div>
    </div>
  );
};

export default ImageCards;
