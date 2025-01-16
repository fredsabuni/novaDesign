import React, {useEffect, useState} from 'react';
import Header from './Header'; 
import design from '../assets/images/process/sketch.png'

const Expertise = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [showBoundary, setShowBoundary] = useState(true);
    

    useEffect(() => {
            const handleScroll = () => {
                setShowBoundary(window.scrollY < 100);  
                setIsSticky(window.scrollY > 100); 
              };
          
              const updateSliderHeight = () => {
                const headerHeight = document.querySelector('header').offsetHeight; 
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
    <main>
        <Header className={isSticky ? 'sticky' : ''}/>
        <section className="p-t-100 p-b-30" style={{ marginBottom: '32px' }}>
                <div className="container"> 
                <div className="row">
                    <div className="col-lg-5">
                        <div className="media__body">
                            <hr style={{ border: 'none', borderTop: '3px solid #E03C31', width: '50px', margin: '16px 0' }} />
                            <h3 className="title-1 text-process p-b-50">Our Story</h3>
                            <p className="media__text">Nova Design Group was born from a simple idea: design should be about you. We believe that buildings 
                                should serve the needs of everyone who interacts with them – the owners, the users, the community.
                                We're a team of passionate architects and designers based in Raleigh, NC.  <br/><br/>
                                Our diverse backgrounds in architecture, engineering, construction, and even fields like finance and research give us a unique perspective. 
                                We use this diverse expertise to create innovative and functional spaces that go beyond expectations.
                                </p>
                            
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="media__img js-line">
                            <img src={design} alt="About" style={{maxHeight: '100%'}}/> 
                        </div>
                    </div>
                </div>
                <div className="row p-t-100">
                    <div className="col-lg-12">
                        <div className="media__body">
                            {/* <h5 className="title-sub">about us</h5> */}
                            <h2 className="text-process ">What makes us different?</h2> 
                            <p style={{fontSize: '16px'}}>At Nova, we're more than just architects. We're your partners in creating spaces that inspire, connect, and perform.</p> 
                        </div>
                    </div> 
                </div>
                <div className="row p-t-40">
                    <div className="col-lg-3">
                        <div className="card service-card">
                            <div className="card-body">
                                <h2 className="card-title">We listen.</h2>
                                <p className="card-text">
                                    We believe the best designs come from truly understanding your vision, your goals, and your challenges.
                                </p> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card service-card">
                            <div className="card-body">
                                <h2 className="card-title">We collaborate.</h2>
                                <p className="card-text">
                                    We work closely with you throughout the entire process, ensuring your voice is heard every step of the way.
                                </p> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card service-card">
                            <div className="card-body">
                                <h2 className="card-title">We innovate.</h2>
                                <p className="card-text">
                                    We're not afraid to challenge conventional thinking and explore new ideas to find the best solutions for your project.
                                </p> 
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-3">
                        <div className="card service-card">
                            <div className="card-body">
                                <h2 className="card-title">We deliver.</h2>
                                <p className="card-text">
                                    We're committed to excellence in everything we do, from the initial concept to the final construction.
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-t-100">
                    <div className="col-lg-12">
                        <div className="media__body">
                            <h3 className='text-process'>The Importance of You</h3> 
                            <p style={{fontSize: '16px', marginTop: '16px', fontStyle:'italic'}}>At Nova Design Group, we believe that great design starts with you.
                                We know that every building project is unique. It has its own set of goals, challenges, and most importantly, people. 
                                That's why we put you – the owners, users, and community – at the heart of everything we do.</p> 
                        </div>
                    </div>    
                </div>
                </div>
        </section>
    </main>
)};

export default Expertise;
