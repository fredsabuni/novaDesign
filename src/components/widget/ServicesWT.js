import React, { useEffect } from "react";
import novaSummerMeadows from "../../assets/images/logo.png"

const ServicesWT = () => { 

  return (
    <div>
        <section className="p-t-50" >
        <div class="container">
                    <div class="section-title m-b-100"> 
                        <h2 class="title-1">Our services</h2>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-md-6 col-lg-3">
                            <article class="media media-service"> 
                                <div class="media__title">
                                    <h3 class="title" style={{textAlign:'left'}}>
                                        <a href="#">Research</a>
                                    </h3>
                                </div>
                                <p class="media__text p-t-50">
                                    <ul class="checklist">
                                        <li>Consumer/User Research</li>
                                        <li>Branding</li>
                                        <li>Operational Analysis</li>
                                        <li>Design Brief/Narrative</li>
                                        <li>Real Estate Evaluation</li>
                                    </ul>
                                </p>
                            </article>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <article class="media media-service"> 
                                <div class="media__title">
                                    <h3 class="title" style={{textAlign:'left'}}>
                                        <a href="#">Design</a>
                                    </h3>
                                </div>
                                <p class="media__text p-t-50">
                                    <ul class="checklist">
                                        <li>Concept development</li>
                                        <li>Concept Refinement</li>
                                        <li>Furniture and Finish Selections</li>
                                        <li>Renderings and Visualizations</li>
                                        <li>Testing & Analysis</li>
                                        <li>Conceptual Pricing</li>
                                        <li>Construction Documents </li>
                                        <li>Engineering and consultant Coordination</li>
                                        <li>Permit Coordination</li> 
                                    </ul>
                                </p>
                            </article>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <article class="media media-service"> 
                                <div class="media__title">
                                    <h3 class="title" style={{textAlign:'left'}}>
                                        <a href="#">Project Implementation</a>
                                    </h3>
                                </div>
                                <p class="media__text p-t-50">
                                    <ul class="checklist">
                                        <li>Bidding and Contract Negotiation</li>
                                        <li>Sourcing and Procurement</li>
                                        <li>Construction Administration</li>
                                        <li>Site Inspections</li> 
                                    </ul>
                                </p>
                            </article>
                        </div>
                        <div class="col-md-6 col-lg-3">
                            <article class="media media-service"> 
                                <div class="media__title">
                                    <h3 class="title" style={{textAlign:'left'}}>
                                        <a href="#">Post-Project Review</a>
                                    </h3>
                                </div>
                                <p class="media__text p-t-50">
                                    <ul class="checklist">
                                        <li>Post Occupancy Evaluations</li>
                                        <li>Development of Design Standards</li>
                                        <li>Design Review</li> 
                                    </ul>
                                </p>
                            </article>
                        </div>
                    </div>                   
            </div>    
            <div class="container p-b-40">
                <div class="row">
                    <div class="col-lg-12 center-flex">
                        <div class=""> 
                            <a class="nova-btn nova-btn--arrow" href="tel:+19195000186" target="_blank">CALL NOW
                                <i class="zmdi zmdi-arrow-right ic-arrow"></i>
                            </a>
                        </div>
                    </div> 
                </div>
            </div>
        </section> 
    </div>
  ); 
};

export default ServicesWT;
