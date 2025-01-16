import React,  { useState, useEffect } from 'react';
import Header from './Header'; 

import strategy from "../assets/images/process/1.png"; 
import design from "../assets/images/process/4.png"; 
import implementation from "../assets/images/process/3.png"; 
import review from "../assets/images/process/2.png";  
import useVisibleOnScroll from "../components/animations/useVisibleOnScroll"


const OurProcess = () => { 
    const ref = useVisibleOnScroll(); 
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
        
    
     
    return(
        <main ref={ref} className='process-section'> 
            <Header className={isSticky ? 'sticky' : ''} /> 
            <section class="section p-t-100 p-b-65">
                <div class="container">
                    <div class="page-heading"> 
                        <h2 class="title-2">Our Process</h2>
                    </div>
                </div>
            </section> 
            <section className="p-t-50" > 
            <div id="strategy" className="p-b-40">
                <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-lg-5">
                    <h3 className='text-process'>01</h3>
                    <h2 className='text-process'>Strategy</h2>
                    <p>
                        In the Strategy phase, Nova Design Group works closely with you to clearly define your
                        project's objectives and outline the desired outcomes. We ensure every aspect of the
                        project aligns with your vision by identifying key stakeholders, conducting thorough
                        property evaluations, consumer research, and operational analysis to assess the viability
                        and challenges of your project. We also craft a compelling narrative that encapsulates your
                        brand values and project goals, guiding all subsequent design and operational decisions.
                    </p>
                    </div>
                    <div className="col-lg-7 image">
                    <img src={strategy} alt="Contact Lady" />
                    </div>
                </div>
                </div>
            </div>
            <div id="design" className="p-b-40">
                <div className="container">
                <div className="row no-gutters align-items-stretch">

                    <div className="col-lg-7 image">
                        <img src={review} alt="Contact Lady" />
                    </div>
                    <div className="col-lg-5">
                    <h3 className='text-process'>02</h3>
                    <h2 className='text-process'>Design</h2>
                    <p>
                        During the Design phase, we focus on developing detailed plans and renderings that align
                        with the established goals. Our team collaborates to create innovative solutions that not
                        only meet but exceed your expectations, ensuring every detail contributes to a cohesive whole.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div id="implementation" className="p-b-40">
                <div className="container">
                <div className="row no-gutters align-items-stretch">
                    <div className="col-lg-5">
                    <h3 className='text-process'>03</h3>
                    <h2 className='text-process'>Implementation</h2>
                    <p>
                    In the Implementation phase, Nova Design Group manages the bidding process and negotiates contracts to ensure favorable terms while 
                    maintaining project quality and budget. We handle the acquisition of materials and services to ensure timely and cost-effective project 
                    execution. Our team oversees the construction process to ensure compliance with design specifications, timelines, and budgets, 
                    and conducts regular site visits to monitor progress and resolve any issues promptly, ensuring high standards are maintained throughout.
                    </p>
                    </div>
                    <div className="col-lg-7 image">
                    <img src={implementation} alt="Contact Lady" />
                    </div>
                </div>
                </div>
            </div>
            <div id="review">
                <div className="container">
                <div className="row no-gutters align-items-stretch"> 
                    <div className="col-lg-7 image">
                        <img src={design} alt="Contact Lady" />
                    </div>
                    <div className="col-lg-5">
                    <h3 className='text-process'>05</h3>
                    <h2 className='text-process'>Review</h2>
                    <p>
                    Post-completion, the Review process includes conducting detailed evaluations to assess the building’s performance and user satisfaction. 
                    We create standardized processes and designs based on successful outcomes to improve efficiency and consistency in future projects. Periodic reviews of the project ensure that it continues to meet your needs and adapts to any changes in use or requirements over time.

                    This format provides a detailed, narrative-driven explanation of each service, emphasizing the continuous and integrated 
                    approach Nova Design Group takes from the initial stages through to post-completion evaluations.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </main>
    );
 
    };

export default OurProcess;