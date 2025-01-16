import React, {useEffect, useState} from "react";
import Header from "./Header";
import contactLady from "../assets/images/contact/contact_lady_1.png";
import ContactFrom from "./widget/ContactForm";
import MapboxMap from "./widget/MapboxMap";

const Contact = () => {
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
      {/* <section className="section p-t-100 contact-section">
        <div className="container">
          <div className="row no-gutters align-items-stretch">
            <div className="col-lg-5 contact-content m-l-15">
              <div className="page-heading">
                <h2 className="title-1 title-sub--c8">
                  Your Partner.
                </h2>
                <p className="m-t-30" style={{ fontSize: '1.2em' }}>
                  If you're visiting Nova Design with a specific project in mind, <br />
                  click email us now so we can get started, or feel free to call us directly and tell us more about your project.
                </p>

                <div className="d-flex justify-content-between">
                <a className="nova-black-btn nova-black-btn--arrow flex-fill mr-2 d-flex align-items-center justify-content-between" href="tel:+19195000186">
                  <span>CALL NOW</span>
                  <i className="zmdi zmdi-arrow-right ic-arrow"></i>
                </a>
                <a className="nova-btn nova-btn--arrow flex-fill ml-2 d-flex align-items-center justify-content-between" href="mailto:admin@novadesign.ai">
                  <span>EMAIL US</span>
                  <i className="zmdi zmdi-arrow-right ic-arrow"></i>
                </a>
              </div> 
              </div>
            </div>
            <div className="col-lg-6 contact-content m-l-15">
              <div className="page-heading">
                <h2 className="title-1 title-sub--c8" style={{ color: "#E03C31" }}>
                  Our Footprints
                </h2>
                <h4>Licensed in: NC, SC, TX, GA.</h4>
              </div>
              <div className="map-wrapper m-b-60 m-t-15">
                <MapboxMap />
              </div> 
            </div>
          </div>
        </div>
      </section> */}
      <section className="section p-t-40">
        <div className="container">
          <div className="row no-gutters align-items-stretch">
            <div className="col-lg-12 contact-content m-l-15">
              <div className="page-heading">
                <hr style={{ border: 'none', borderTop: '3px solid #E03C31', width: '50px', margin: '16px 0' }} />
                <h2 className="title-1 title-sub--c8"> Your Partner. </h2>
                <p className="m-t-30" style={{ fontSize: '1.2em' }}>
                At Nova Design, we specialize in transforming ideas into extraordinary spaces. <br />
                Whether you have a specific project in mind or need expert guidance to bring your vision to life, we’re here to help.
                </p>

                <div className="d-flex justify-content-between p-t-30">
                <a className="nova-black-btn nova-black-btn--arrow flex-fill mr-2 d-flex align-items-center justify-content-between" href="tel:+19195000186">
                  <span>CALL NOW</span>
                  <i className="zmdi zmdi-arrow-right ic-arrow"></i>
                </a>
                <a className="nova-btn nova-btn--arrow flex-fill ml-2 d-flex align-items-center justify-content-between" href="mailto:admin@novadesign.ai">
                  <span>EMAIL US</span>
                  <i className="zmdi zmdi-arrow-right ic-arrow"></i>
                </a>
              </div> 
              </div>
            </div> 
          </div>
          <div className="row no-gutters align-items-stretch"> 
            <div className="col-lg-12 contact-content m-l-15">
              <div className="page-heading">
                <h2 className="title-1 title-sub--c8" style={{ color: "#E03C31" }}>
                  Our Footprints
                </h2>
                <h4>Licensed in: NC, TX, FL, VA.</h4>
              </div>
              <div className="map-wrapper m-b-60 m-t-15">
                <MapboxMap />
              </div> 
            </div>
          </div>
        </div>
      </section>
    </main>
);
}

export default Contact;
