import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    // Load the HubSpot script dynamically
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Initialize the HubSpot form once the script is loaded
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45057484",
          formId: "01b3f468-f1f8-43d0-b4a3-f8ec10896a5f",
          target: "#hubspotForm", // Target div for the form
        });
      }
    };

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="hubspotForm"></div>; // Target div for HubSpot form
};

export default ContactForm;
