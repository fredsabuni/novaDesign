import React, {useState, useEffect, useRef} from "react";  
import Slider from "./widget/slider";
import Header from './Header'; 
import OurClients from "./widget/OurClients";
import NovaTeam from "./widget/NovaTeam";
import ServicesWT from "./widget/ServicesWT"; 


const Home = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [showBoundary, setShowBoundary] = useState(true);
    const sliderRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            setShowBoundary(window.scrollY < 600);  
            setIsSticky(window.scrollY > 600); 
          };
      
          const updateSliderHeight = () => {
            const headerHeight = document.querySelector('header').offsetHeight;
            sliderRef.current.style.height = `calc(100vh - ${headerHeight}px)`;
          };

          updateSliderHeight();
      
          window.addEventListener('scroll', handleScroll);
          window.addEventListener('resize', updateSliderHeight); 
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateSliderHeight);
          };
    }, []);
     
    return (
    <>  
    {/* <div className={`header-slider-container ${showBoundary && window.innerWidth > 768 ? 'red-boundary' : ''}`}>
        <Header className={isSticky ? 'sticky' : ''}  showIcons={!showBoundary} />
        <Slider ref={sliderRef}/>
    </div> */} 
    <Header className={isSticky ? 'sticky' : ''}  showIcons={!showBoundary} />  
    <div className="custom-container">  
        <Slider ref={sliderRef}/>
    </div>  

    {/* <div className="scroll-down-animation">
      <span className="mouse">
          <span className="scroll-wheel"></span>
      </span> 
    </div> */}

    <section className="p-t-10 p-b-55">
        <div className="container">
        <div className="rev-spacer"></div>
            <div className="media-about">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="media__body">
                            {/* <h5 className="title-sub">about us</h5> */}
                            <h2 className="title-1">Transforming Spaces, Empowering Communities</h2>
                            <p className="media__text">At Nova Design Group, we believe in the transformative power of design. Our philosophy revolves around the idea that good design isn't just about aesthetics; 
                                it's about creating spaces that cater to the multifaceted needs of their occupants, owners, operators, and communities.</p>
                            <a className="au-btn au-btn--arrow" href="/expertise">Read more
                                <i className="zmdi zmdi-arrow-right ic-arrow"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="media__img js-line">
                            <img src="images/aboutUs/about-us.webp" alt="About"/>
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)' }}></div>
                            <span className="line"></span>
                            <span className="line line-bottom"></span>
                            <div className="media__img-inner wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.2s">
                                <span className="number">28</span>
                                <span className="desc">years of experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <section className="p-t-60 p-b-55">
        <div className="container">
            <div className="section-title">
                {/* <h5 className="title-sub">what we do</h5> */}
                <h2 className="title-1">Our Process</h2>
            </div>
            <div className="row no-gutters">
                <div className="col-md-6 col-lg-6">
                    <article className="media media-service">
                        <figure className="media__img">
                        <img src="images/icon/icon_1.png" style={{ maxWidth: '50%' }} alt="architecture" />
                        </figure>
                        <div className="media__title">
                            <h3 className="title">
                                <a href="#">Strategy (Pre-Design)</a>
                            </h3>
                            <span className="number">01</span>
                        </div>
                        <p className="media__text">We work closely with our clients to define project goals, identify key stakeholders, and conduct assessments to ensure a successful start to the project.</p>
                    </article>
                </div>
                <div className="col-md-6 col-lg-6">
                    <article className="media media-service">
                        <figure className="media__img">
                        <img src="images/icon/icon_2.png" style={{ maxWidth: '50%' }} alt="Interior" />
                        </figure>
                        <div className="media__title">
                            <h3 className="title">
                                <a href="#">Design</a>
                            </h3>
                            <span className="number">02</span>
                        </div>
                        <p className="media__text">We design with purpose, optimizing every aspect of the project to meet our client's goals. Our collaborative approach ensures that design excellence is promoted, and late-phase.</p>
                    </article>
                </div>
                <div className="col-md-6 col-lg-6">
                    <article className="media media-service">
                        <figure className="media__img">
                        <img src="images/icon/icon_3.png" style={{ maxWidth: '50%' }} alt="planning" />
                        </figure>
                        <div className="media__title">
                            <h3 className="title">
                                <a href="#">Implementation</a>
                            </h3>
                            <span className="number">03</span>
                        </div>
                        <p className="media__text">We assist our clients with timely communication, guidance during the construction process, and ensure that projects stay on time and within budget.</p>
                    </article>
                </div>
                <div className="col-md-6 col-lg-6">
                    <article className="media media-service">
                        <figure className="media__img">
                        <img src="images/icon/icon_4.png" style={{ maxWidth: '50%' }} alt="planning" />
                        </figure>
                        <div className="media__title">
                            <h3 className="title">
                                <a href="#">Review</a>
                            </h3>
                            <span className="number">04</span>
                        </div>
                        <p className="media__text">We communicate with stakeholders to evaluate project operations against design intent, refine our processes, and generate dependable results for future projects.</p>
                    </article>
                </div>
            </div>
        </div>
    </section>  
    <OurClients />
    <NovaTeam />
    <ServicesWT />
        </>
    );
}

export default Home;
