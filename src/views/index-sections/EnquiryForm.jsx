import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../assets/css/certificates.css";
import ReactGA from "react-ga4";

const EnquiryForm = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xxvx1n",
        "template_r18dlen",
        e.target,
        "C2MELbGdO70klMVdY"
      )
      .then(
        () => {
          setSuccessMsg("Your message has been sent successfully! 🎉");
          e.target.reset();

          ReactGA.event({
            action: "submit",
            category: "Form",
            label: "Submit Button Clicked",
          });

          setTimeout(() => setSuccessMsg(""), 4000);
        },
        () => {
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <form className="iso-enquiry-form shadow-lg p-4" onSubmit={sendEmail}>
      {successMsg && (
        <div className="alert alert-success text-center mb-3">
          {successMsg}
        </div>
      )}

      <h4 className="text-center mb-3 fw-bold text-primary">📩 Enquire Now</h4>

      <div className="mb-3">
        <input
          type="text"
          name="name"
          className="form-control iso-input"
          placeholder="Your Full Name"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control iso-input"
          placeholder="Your Email"
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="tel"
          name="phone"
          className="form-control iso-input"
          placeholder="Your Phone Number"
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          name="message"
          className="form-control iso-textarea"
          placeholder="Briefly describe your requirement for a quick quote…"
          rows="4"
          required
        ></textarea>
      </div>

      <button className="btn iso-submit-btn w-100" type="submit">
        Request for Quote
      </button>
    </form>
  );
};

export default EnquiryForm;
