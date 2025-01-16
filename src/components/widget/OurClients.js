import React, { useEffect } from "react";
import novaSummerMeadows from "../../assets/images/logo.png"

const OurClients = () => { 

  return (
    <div>
        <section className="p-t-50" >
        <div class="container">
                    <div class="section-title m-b-100"> 
                        <h2 class="title-1">Our clients</h2>
                        <hr style={{ border: 'none', borderTop: '3px solid #E03C31', width: '50px', margin: '16px auto' }} />
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <a class="img-client" href="#">
                            <img src={novaSummerMeadows}  style={{maxWidth: "50%"}}/>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <a class="img-client" href="#">
                            <img src={novaSummerMeadows}  style={{maxWidth: "50%"}}/>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <a class="img-client" href="#">
                            <img src={novaSummerMeadows}  style={{maxWidth: "50%"}}/>
                            </a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <a class="img-client" href="#">
                            <img src={novaSummerMeadows}  style={{maxWidth: "50%"}}/>
                            </a>
                        </div> 
                    </div>
            </div>          
             
        </section>
    </div>
  ); 
};

export default OurClients;
