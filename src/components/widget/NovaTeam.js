import React, { useEffect } from "react";
import greyProfile from "../../assets/images/grey_image.jpeg"

const NovaTeam = () => { 

  return (
    <div>
        <section className="p-t-100" >
            <div className="container p-b-40">
                <div className="section-title"> 
                    <h2 className="title-1">Who We Are</h2>
                    <hr className="p-b-50" style={{ border: 'none', borderTop: '3px solid #E03C31', width: '50px', margin: '16px auto' }} />
                    <p className="media__text">At Nova Design Group, we believe in the transformative power of design. Our philosophy revolves around the idea that good design isn't just about aesthetics; 
                                it's about creating spaces that cater to the multifaceted needs of their occupants, owners, operators, and communities.</p>
                </div>
            </div> 
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
                        <img className="media__img img--rounded" src="images/aboutUs/grey_image.jpeg" alt="Brad Green"/>
                    </figure> 
                </article>   
            </div> 
            <div class="container p-b-40">
                <div class="row">
                    <div class="col-lg-12 center-flex">
                        <div class=""> 
                            {/* <a class="nova-black-btn nova-black-btn--arrow" href="tel:+19195000186" target="_blank">GET IN TOUCH
                                <i class="zmdi zmdi-arrow-right ic-arrow"></i>
                            </a> */}
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </div>
  ); 
};

export default NovaTeam;
