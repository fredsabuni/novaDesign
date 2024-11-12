
import React from "react"; 


const Footer = () => {
    return (
        <footer className="footer">
            <div className="bg-overlay bg-overlay--p85"></div>
            <div className="container">
                
                <div className="row ">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-col">
                            <div className="widget m-b-25 align-left">
                                <a href="#">
                                    <img src="images/icon/nova_design_white.svg" style={{ width: '200px'}} alt="NovaDesign" />
                                </a>
                            </div>
                            <div className="widget widget-address align-left">
                                <ul>
                                    <li>Address : 16 West Martin Street Raleigh, Suite 301 Raleigh, NC 27601 </li>
                                    <li>Phone number : + (919) 500-0186</li>
                                    <li>Email : admin@novadesign.ai</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-col p-l-70 p-md-l-0">
                            <div className="widget widget_pages">
                                <h4 className="widget-title">Link</h4>
                                <ul>
                                    <li>
                                        <a href="#">Our Experience</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Approach</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Process</a>
                                    </li>
                                    <li>
                                        <a href="#">Team</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col p-l-70 p-md-l-0">
                            <h4 className="widget-title">Social</h4>
                            <div className="widget widget_socials">
                                <ul className="list-social list-social-2">
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
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <div className="widget widget_text">
                                <h4 className="widget-title">copyright</h4>
                                <p>© 2024 Nova Design Group. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;