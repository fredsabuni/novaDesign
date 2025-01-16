import React from "react";

const SliderSection = () => {
  return (
    <section>
      <div className="rev_slider_wrapper rev_slider_wrapper--p80 tp-overflow-hidden">
        <div
          className="rev_slider fullwidthabanner js-rev"
          data-version="5.4.4"
          style={{ display: "none" }}
          data-rev-layout="fullscreen"
          data-rev-stylearrow="au-rev-arrow-1"
          data-rev-bullets="true"
          data-rev-stylebullet="au-rev-bullet-1"
          data-rev-voffbullet="55"
        >
          <ul>
            {/* First Slide */}
            <li className="rev-item rev-item-1" data-transition="crossfade">
              <img
                className="rev-slidebg"
                src="images/slide/home.jpeg"
                alt="Master Slider 01"
              />
              <h4
                className="tp-caption tp-resizeme rev-text-1"
                data-frames={`[
                  {"delay":0,"speed":1800,"frame":"0","from":"y:[-100%];opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},
                  {"delay":"wait","speed":800,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}
                ]`}
                data-x="left"
                data-y="middle"
                data-hoffset="0"
                data-voffset="-118"
                style={{ paddingLeft: 15, paddingRight: 15, color: "#fff", fontWeight: 400, fontSize: 18 }}
              >
                Nova Design
              </h4>
              <h2
                className="tp-caption tp-resizeme rev-text-2"
                data-frames={`[
                  {"delay":800,"speed":2100,"frame":"0","from":"x:[-100%];opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},
                  {"delay":"wait","speed":800,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}
                ]`}
                data-x="left"
                data-y="center"
                data-hoffset="0"
                data-voffset="-35"
                style={{
                  lineHeight: "60px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "48px",
                  textAlign: "left",
                }}
              >
                Where Design Meets Innovation
              </h2>
              <a
                href="./novaAbout.html"
                className="tp-caption tp-resizeme"
                target="_self"
                data-frames={`[
                  {"delay":0,"speed":1800,"frame":"0","from":"y:[100%];opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},
                  {"delay":"wait","speed":800,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}
                ]`}
                data-x="left"
                data-y="center"
                data-hoffset="15"
                data-voffset="87"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="rev-btn-1"
                  style={{
                    color: "#fff",
                    border: "2px solid #fff",
                    padding: "10px 20px",
                    display: "inline-block",
                  }}
                >
                  View More
                  <span className="arrow" style={{ paddingLeft: 5 }}>
                    <i className="zmdi zmdi-arrow-right"></i>
                  </span>
                </span>
              </a>
            </li>

            {/* Second Slide */}
            <li
              className="rev-item rev-item-1"
              data-transition="slotslide-horizontal"
            >
              <img
                className="rev-slidebg"
                src="images/slide/home_1.jpeg"
                alt="Master Slider 01"
              />
              <h4
                className="tp-caption tp-resizeme rev-text-1"
                data-frames={`[
                  {"delay":0,"speed":1800,"frame":"0","from":"y:[-100%];opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},
                  {"delay":"wait","speed":800,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}
                ]`}
                data-x="left"
                data-y="middle"
                data-hoffset="0"
                data-voffset="-118"
                style={{ paddingLeft: 15, paddingRight: 15, color: "#fff", fontWeight: 400, fontSize: 18 }}
              >
                Nova Design
              </h4>
              <h2
                className="tp-caption tp-resizeme rev-text-2"
                data-frames={`[
                  {"delay":800,"speed":2100,"frame":"0","from":"x:[-100%];opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},
                  {"delay":"wait","speed":800,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}
                ]`}
                data-x="left"
                data-y="center"
                data-hoffset="0"
                data-voffset="-35"
                style={{
                  lineHeight: "60px",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "48px",
                  textAlign: "left",
                }}
              >
                Experience the Evolution
              </h2>
              <a
                href="./novaAbout.html"
                className="tp-caption tp-resizeme"
                target="_self"
                data-frames={`[
                  {"delay":0,"speed":1800,"frame":"0","from":"y:[100%];opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},
                  {"delay":"wait","speed":800,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}
                ]`}
                data-x="left"
                data-y="center"
                data-hoffset="15"
                data-voffset="87"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="rev-btn-1"
                  style={{
                    color: "#fff",
                    border: "2px solid #fff",
                    padding: "10px 20px",
                    display: "inline-block",
                  }}
                >
                  View More
                  <span className="arrow" style={{ paddingLeft: 5 }}>
                    <i className="zmdi zmdi-arrow-right"></i>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rev-spacer"></div>
    </section>
  );
};

export default SliderSection;
