import DemoFooter from "components/Footers/DemoFooter";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import aboutbg from "../../assets/img/services/about-bg.webp";

function AboutUs() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: (
      <>
        <h3 className="text-primary fw-bold mb-4 border-bottom pb-3 text-center">
          About First Cert
        </h3>
        <div className="content-space">
          <p className="text-dark mb-4 fs-6 lh-lg" style={{ color: "#212529" }}>
            <strong className="text-primary">
              <a href="/">First Cert</a>
            </strong>{" "}
            is a management consulting and certification company that provides
            the corporation with worldwide quality standards. We are available
            anywhere to assist our clients in obtaining certification. First
            Cert is committed to offering top-notch services together with the
            necessary support and direction.
          </p>
          <p className="text-dark mb-4 fs-6 lh-lg" style={{ color: "#212529" }}>
            Our skills in management consulting, auditing, and numerous ISO
            standards, including{" "}
            <strong>
              CMMI, GDPR, HIPAA, SOC, PCI DSS, CE Marking, ISO 9001, 27001,
              45001, 14001, 20000 and 22000
            </strong>
          </p>
          <p className="text-dark mb-4 fs-6 lh-lg" style={{ color: "#212529" }}>
            Our staff of consultants and auditors has years of experience in
            this industry, and they provide results with minimal effort and
            straight-forward documentation. We offer best-in-class industry
            proposals that are suitable and simple to execute and are based on
            benchmarked and model-based industry practice. Customers take use of
            our service offering for cost optimization and cycle time savings.
            We offer managed services and complete service delivery for various
            GRC and technology solution sectors. For all of our clients, we are
            proactive, value-adding service partners. Utilize existing
            high-quality vectors with enterprise-wide innovation with
            enthusiasm. Utilize e-business collaboration and idea sharing to
            phosphorescently leverage others' innovative thinking across the
            entire organization. Utilize additional resource-leveling
            convergence proactively as opposed to inter-mandated networks.
          </p>
        </div>
      </>
    ),

    privacy: (
      <>
        <h3 className="text-primary fw-bold mb-4 border-bottom pb-3 text-center">
          Privacy Policy
        </h3>
        <div className="content-space">
          <p className="text-dark mb-4 fs-6 lh-lg" style={{ color: "#212529" }}>
            Your privacy is important to us, so First Cert has created this
            Privacy Policy to explain how your information is protected,
            collected and used. This Privacy Policy applies to all First Cert
            web sites, including our publicly accessible web sites located at
            First Cert sub domain.
          </p>
          <p className="text-dark mb-4 fs-6 lh-lg" style={{ color: "#212529" }}>
            This Privacy Policy may be updated from time to time. By using First
            Cert, you consent to the terms and conditions of this Privacy Policy
            and are aware that our policies may evolve in the future. If there
            is a conflict between our Terms of Use governing your use of the
            sites and this Privacy Policy, the Terms of Use control.
          </p>

          <div className="policy-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">Collection</h5>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              Information posted on First Cert is obviously publicly available.
              Our servers are located in the United States and in the European
              Union. Therefore, if you choose to provide us with personal
              information, you are consenting to the transfer and storage of
              that information on our servers in the United States and Europe.
              We collect and store the following personal information: Email
              address, physical contact information, and (depending on the
              service used) sometimes financial information. Computer sign-on
              data, statistics on page views, traffic to and from First Cert and
              ad data (all through cookies - you can take steps to disable the
              cookies on your browser although this is likely to affect your
              ability to use the site). Other information, including your IP
              address and standard web log information.
            </p>
          </div>

          <div className="policy-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">Disclosure</h5>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              We don't sell or rent users' personal information to third parties
              for their marketing purposes without user’s explicit consent. We
              may disclose personal information to respond to legal
              requirements, enforce our policies, respond to claims that a
              posting or other content violates other's rights, or protect
              anyone's rights, property, or safety. We may also share personal
              information with: Corporate affiliates who help detect and prevent
              potentially illegal acts and provide joint services. (Our
              corporate affiliates will market only to users who ask them to).
              Service providers who help with our business operations.
            </p>
          </div>

          <div className="policy-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">Using Information</h5>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              You may use personal information gathered from First Cert only to
              follow up with another user about a specific posting, not to send
              spam or collect personal information from someone who hasn't
              agreed to that.
            </p>
          </div>

          <div className="policy-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">Security</h5>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              We use many tools (encryption, passwords, and physical security)
              to protect your personal information against unauthorized access
              and disclosure. We can't however guarantee the continuous
              functionality and liability of these tools at all times.
            </p>
          </div>

          <div
            className="p-3 rounded-3"
            style={{ backgroundColor: "#e3f2fd", border: "1px solid #bbdefb" }}
          >
            <p className="mb-0 fs-6 lh-lg" style={{ color: "#212529" }}>
              Send questions about this policy to{" "}
              <strong className="text-primary">
                info@firstcertification.com
              </strong>
              .
            </p>
          </div>
        </div>
      </>
    ),

    tnc: (
      <>
        <h3 className="text-primary fw-bold mb-4 border-bottom pb-3 text-center">
          Terms and Conditions
        </h3>
        <div className="content-space">
          <div className="terms-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">Introduction</h5>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              Thank you for visiting our website, FirstCertification, which is
              owned, published and all rights are reserved by Blue Host India.
              By using our website, you agree to be legally bound by these Terms
              and Conditions. If you do not agree to these terms, please refrain
              from using our website.
            </p>
          </div>

          <div className="terms-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">Use of Website</h5>
            <p className="text-dark">
              <strong>Acceptance of Terms:</strong> Your use of our website is
              subject to these Terms and Conditions. Whether or not you register
              your details with us, using our website constitutes acceptance of
              these terms.
              <br />
              <br />
              <strong>Revisions to Terms:</strong> We may revise these terms
              from time to time. It is your responsibility to review these legal
              statements periodically, as you are legally bound by them.
              <br />
              <br />
              <strong>Additional Terms:</strong> Certain areas of our website
              may be subject to additional terms or terms that supersede these
              ones. You will be informed of any additional terms applicable to
              specific pages.
              <br />
              <br />
              <strong>Registration:</strong> You may use our website without
              registering your details with us. However, certain areas may only
              be accessible to registered users.
            </p>
          </div>

          <div className="terms-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">Data Hosting</h5>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              The website and all associated data are hosted by Blue Host at
              <strong className="text-primary">
                {" "}
                www.firstcertification.com.
              </strong>{" "}
              We take utmost care to ensure the security and privacy of your
              information in accordance with our Privacy Policy.
            </p>
          </div>

          <div className="terms-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">
              Intellectual Property
            </h5>
            <p className="text-dark">
              <strong>Ownership:</strong> The content, design, graphics, and
              other materials on this website are owned by FirstCertification or
              licensed to us. All rights are reserved.
              <br />
              <br />
              <strong>Use of Content:</strong> You may use the website's content
              for personal and non-commercial purposes only. Any unauthorized
              use, reproduction, or distribution of the content is strictly
              prohibited.
            </p>
          </div>

          <div className="terms-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">
              Limitation of Liability
            </h5>
            <p className="text-dark">
              <strong>Information Accuracy:</strong> While we strive to provide
              accurate and up-to-date information, we do not warrant the
              completeness or accuracy of the content on our website. You use
              the information at your own risk.
              <br />
              <br />
              <strong>Third-Party Links:</strong> Our website may contain links
              to third-party websites. We do not endorse or control the content
              of these external websites and are not responsible for any damages
              or losses arising from your use of such links.
              <br />
              <br />
              <strong>Indemnity:</strong> You agree to indemnify and hold
              harmless FirstCertification, its officers, employees, and agents
              from any claims, damages, or losses arising from your use of our
              website or violation of these Terms and Conditions.
            </p>
          </div>

          <div className="terms-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">Governing Law</h5>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of India. Any disputes arising from the
              use of our website shall be subject to the exclusive jurisdiction
              of the courts in Bengaluru, Karnataka.
            </p>
          </div>
          <div className="terms-item mb-4 p-3 bg-light rounded-3">
            <h5 className="text-primary fw-semibold mb-3">
              Contact Information
            </h5>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              For any inquiries or concerns regarding these Terms and
              Conditions, <br /> please contact us{" "}
              <strong>at info@firstcertification.com / +91 8073358319.</strong>
            </p>
            <p className="fs-6 mb-0" style={{ color: "#212529" }}>
              By using FirstCertification's website, you acknowledge that you
              have read, understood, and agreed to these Terms and Conditions.
            </p>
          </div>

          <div
            className="p-2 rounded-3"
            style={{ backgroundColor: "#e3f2fd", border: "1px solid #bbdefb" }}
          >
            <p className="mb-0 fs-6 lh-lg" style={{ color: "#212529" }}>
              For inquiries, contact{" "}
              <strong className="text-primary">
                info@firstcertification.com
              </strong>{" "}
              or call <strong className="text-primary">+91 8073358319</strong>.
            </p>
          </div>
        </div>
      </>
    ),
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <IndexNavbar />

      <div className="about-page">
        {/* Header - Fixed Centering */}
        <div
          className="about-header position-relative d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            height: "50vh",
            minHeight: "300px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100 hero-bg"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${aboutbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            className="position-relative text-center px-3 w-100"
            style={{
              zIndex: 1,
              textShadow: "0 2px 4px rgba(0,0,0,0.8)",
              transform: "translateY(0)", // Ensure perfect centering
            }}
          >
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "600",
                letterSpacing: "1.5px",
                lineHeight: "1.2",
              }}
            >
              About Us
            </h1>
          </div>
          <p className="lead mb-0 fs-5" style={{ opacity: 0.95 }}>
            Excellence in Quality Standards & Certification
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="container text-center my-5">
          <div
            className="d-flex justify-content-center flex-wrap"
            style={{ gap: "1rem" }}
          >
            <button
              className={`btn px-4 py-3 fw-semibold ${
                activeSection === "about"
                  ? "btn-primary shadow"
                  : "btn-outline-primary border-2"
              }`}
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease",
                minWidth: "140px",
              }}
              onClick={() => setActiveSection("about")}
            >
              About Us
            </button>
            <button
              className={`btn px-4 py-3 fw-semibold ${
                activeSection === "privacy"
                  ? "btn-primary shadow"
                  : "btn-outline-primary border-2"
              }`}
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease",
                minWidth: "140px",
              }}
              onClick={() => setActiveSection("privacy")}
            >
              Privacy Policy
            </button>
            <button
              className={`btn px-4 py-3 fw-semibold ${
                activeSection === "tnc"
                  ? "btn-primary shadow"
                  : "btn-outline-primary border-2"
              }`}
              style={{
                borderRadius: "8px",
                transition: "all 0.3s ease",
                minWidth: "140px",
              }}
              onClick={() => setActiveSection("tnc")}
            >
              Terms & Conditions
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-11 col-lg-12">
              <div
                className="p-4 p-lg-5 rounded-4 shadow-sm"
                style={{
                  backgroundColor: "#ffffff",
                  lineHeight: "1.6",
                  border: "1px solid #e3e3e3",
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                }}
              >
                {sections[activeSection]}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoFooter />
    </div>
  );
}

export default AboutUs;
