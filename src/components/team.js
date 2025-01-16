import React,  { useState, useEffect } from 'react';
import Header from './Header';

const Team = () => {
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
        <section className="p-t-120 p-b-30" style={{ marginBottom: '32px' }}>
                <div className="container">
                    <div className="section-title m-b-70">
                        <h5 className="title-sub">Leadership</h5>
                        <h2 className='title-team text-process'>Meet the team</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <article className="media-team">
                                <figure className="media__img-wrap">
                                    <ul className="list-social list-social--light"> 
                                        <li className="list-social__item">
                                            <a className="ic-linkedin" href="https://www.linkedin.com/in/grey-isley-phd-aia-b747182" target="_blank">
                                                <i className="zmdi zmdi-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <span className="overlay"></span>
                                    <img className="media__img img--rounded" src="images/aboutUs/grey_image.jpeg" alt="Brad Green" />
                                </figure>
                                <div className="media__body">
                                    <h4 className="title--sm">
                                        <a href="https://www.linkedin.com/in/grey-isley-phd-aia-b747182" target="_blank">Grey Isley, PhD, AIA</a>
                                    </h4>
                                    <span className="title-sub--sm">CEO - NovaDesign</span>
                                </div> 
                            </article>   
                        </div> 
                        <div className="col-md-12 col-lg-12" style={{ marginBottom: '16px' }}>
                            <h4 style={{ marginBottom: '8px' }} className='text-process'>Education:</h4>
                            <li> <b>PhD in Design – North Carolina State University </b>
                                <ul>
                                    Research focused on integrated design processes, sociotechnical workflows, and performance metrics throughout the design and operation of buildings.
                                </ul>
                            </li>  
                            <li> <b>Master of Architecture – North Carolina State University</b>
                                <ul>
                                    Graduate Certificate in Energy and Technology in Architecture
                                </ul>
                            </li>   
                            <li>
                                MS in Architectural Studies, Concentrating in Sustainable Design – University of Florida
                            </li>
                            <li>
                                BS in Agriculture and Environmental Technology – North Carolina State University
                            </li> 
                        </div>
                        <div className="col-md-12 col-lg-12" style={{ marginBottom: '16px' }}>
                            <h4 style={{ marginBottom: '8px' }} className='text-process'>Professional Experience:</h4>
                            <li>
                                Grey Isley is a hands-on leader who strives to set Nova Design apart from other architectural firms by focusing on the importance of considering all people throughout a building's lifecycle. 
                                His approach reflects his belief that a building lives through its occupants and systems, continuously evolving.
                            </li> 
                            <li>
                                With over 20 years of experience in the Architecture, Engineering, and Construction (AEC) industry, Grey has worked as an architect, contractor, project manager, and environmental specialist. 
                                This diverse background informs his holistic view of building design and management.
                            </li> 
                            <li>
                                He has conducted over 600 energy evaluations of homes and multifamily units, managed multimillion-dollar projects, and designed a wide array of buildings including commercial, hospitality, religious, and multifamily structures.
                            </li> 
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <h4 style={{ marginBottom: '8px' }} className='text-process'>Academic and Professional Contributions:</h4>
                            <li>
                                Grey is a professor of practice at NC State’s College of Design, where he mentors the next generation of architects and designers.
                            </li> 
                            <li>
                                He has been recognized for his contributions to the field with various design and academic awards.
                            </li> 
                            <li>
                                Grey frequently speaks at conferences and participates in student design reviews, sharing his expertise and insights on sustainable design and integrated architectural practices.
                            </li> 
                        </div>
                    </div> 
                </div>
        </section>
    </main>
    ) 
};

export default Team;
