import React, { useState, forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInterval } from 'react-use';
import homeImage1 from '../../assets/images/home_1.jpeg';
import homeImage2 from '../../assets/images/home_2.jpeg';  

const slides = [
  {
    image: homeImage1,
    title: 'Redefining <br /> Spaces',
    caption: 'Nova Design',
  },
  {
    image: homeImage2,
    title: 'Redefining <br /> Spaces',
    caption: 'Nova Design',
  },
];

const Slider = forwardRef((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Interval for auto-slide
  useInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 10000);

  // Animation for sliding
  const slideAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: { duration: 1000 },
  });

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="slider-container" ref={ref}>
      {/* <div className="left-bar"></div>  */}
      
      <div className="slider-wrapper">
        <animated.div style={slideAnimation} className="slide">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="slide-image" />
          <div className="slide-text">
            <h1 dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }} style={{ fontSize: '50px' }}></h1>
            <a href="/our-process" className="view-more-button">
              View More
            </a>
          </div>
        </animated.div>
        <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
        </div>
        <div className="bottom-right-bar">
        <div className="header-social">
          <ul className="list-social">
            <li className="list-social__item">
              <a className="ic-fb" href="#">
                <i className="zmdi zmdi-facebook"></i>
              </a>
            </li>
            <li className="list-social__item">
              <a className="ic-youtube" href="#">
                <i className="zmdi zmdi-youtube"></i>
              </a>
            </li>
            <li className="list-social__item">
              <a className="ic-twi" href="#">
                <i className="zmdi zmdi-twitter"></i>
              </a>
            </li>
            <li className="list-social__item">
              <a className="ic-linkedin" href="#">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div> 
      </div> 
      
    </section>
  );
});

export default Slider;
