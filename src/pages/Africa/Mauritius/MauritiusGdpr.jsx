import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/africa/mauritius/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/africa/mauritius/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MauritiusGdpr() {
  const benefits = [
    "Clear control and traceability over personal data",
    "Reduced exposure to regulatory fines and contractual penalties",
    "Higher trust from European customers and regulators",
    "Well-defined privacy roles and escalation processes",
    "Stronger brand reputation as a responsible data custodian",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "Software and IT service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS platforms, cloud providers, and digital startups",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce websites and online marketplaces",
    },
    {
      icon: "bi-headset",
      title: "Outsourcing firms and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Financial services, fintech, and payment processors",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, research, and life sciences organizations",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing agencies and analytics-driven businesses",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Mapping",
      description: "Identify where and how personal data is processed",
    },
    {
      number: "2",
      title: "Risk Review",
      description: "Detect gaps and privacy vulnerabilities",
    },
    {
      number: "3",
      title: "Policy Development",
      description: "Create GDPR-aligned documentation and governance",
    },
    {
      number: "4",
      title: "Control Implementation",
      description: "Establish access, retention, and response mechanisms",
    },
    {
      number: "5",
      title: "Training",
      description: "Build awareness across teams and leadership",
    },
    {
      number: "6",
      title: "Validation",
      description: "Test compliance and close identified gaps",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description: "Maintain alignment with regulatory changes",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Mauritius | EU Data Privacy & Compliance
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Need GDPR Certification in Mauritius? First Cert provides professional GDPR compliance services including privacy risk analysis, data governance frameworks, staff training, and ongoing advisory to help organizations meet EU data protection obligations with confidence."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Mauritius, GDPR consultants Mauritius, GDPR compliance Mauritius, GDPR audit Mauritius, GDPR documentation Mauritius, GDPR certification cost Mauritius, data privacy services Mauritius, GDPR implementation Mauritius, EU GDPR Mauritius, privacy compliance Mauritius, GDPR training Mauritius, GDPR advisory Mauritius, First Cert GDPR Mauritius"
        />
      </Helmet>

      <IndexNavbar />

      <div
        className="certificate-hero"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        <div className="certificate-overlay">
          <h1 className="main-title">GDPR Certification in Mauritius</h1>
          <p className="small-desc">Strengthening Global Data Trust</p>
        </div>
      </div>

      <a
        href="https://wa.me/918073358319?text=Thank you for contacting First Cert"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <div className="iso-content-section py-4">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* LEFT SIDE — IMAGE + TEXT */}
            <div className="col-md-6">
              <img
                src={imggdpr}
                alt="GDPR Certification in Mauritius"
                className="img-fluid rounded-2 mb-3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                <b>GDPR Certification in Mauritius</b> enables organizations to
                lawfully and securely manage personal data belonging to
                individuals in the European Union. With Mauritius-based
                companies increasingly serving international clients through
                SaaS platforms, fintech services, outsourcing, digital
                marketing, and cloud operations, compliance with GDPR is
                essential for maintaining credibility and contractual trust.
              </p>

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                <b>First Cert</b> helps organizations in Mauritius establish
                privacy-led operating models that balance regulatory compliance
                with efficient business operations.
              </p>
            </div>

            {/* RIGHT SIDE — ENQUIRY FORM */}
            <div className="col-md-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>

      <section className="certificate-details-section">
        <div className="container">
          {/* HEADING 1 */}
          <h2
            className="details-title text-primary"
            style={{ fontSize: "1.8rem" }}
          >
            What GDPR Certification in Mauritius Means
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Mauritius</b> confirms that an organization
            has implemented structured controls to protect personal data
            throughout its lifecycle. It ensures that data is collected, stored,
            processed, and shared in accordance with EU privacy regulations.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A complete GDPR compliance framework includes:
          </p>

          <ul className="iso-list">
            {[
              "Lawful basis and transparency for all data processing activities",
              "Strong controls over data access, retention, and deletion",
              "Processes for handling subject access, erasure, and consent requests",
              "Technical and organizational safeguards for data protection",
              "Breach response, notification, and regulatory communication procedures",
            ].map((item, index) => (
              <li key={index} className="mb-3">
                {item}
              </li>
            ))}
          </ul>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            GDPR certification reflects a disciplined, accountable, and
            privacy-first governance model.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs GDPR Compliance in Mauritius
              </h2>

              <p className="text-center section-sub mb-5">
                Any organization in Mauritius that processes EU personal data
                must comply with GDPR, including:
              </p>

              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
                <div className="col-lg-9">
                  <div className="row g-4">
                    {industryData.map((item, index) => (
                      <div className="col-12 col-sm-6 col-md-4" key={index}>
                        <div className="hipaa-card text-center p-3">
                          <i className={`bi ${item.icon} hipaa-icon`}></i>
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT SIDE INTERNAL LINKS BOX */}
                <div className="col-lg-3">
                  <div className="iso-links-box tall-sidebar">
                    <h5>Our Expertise</h5>
                    <ul>
                      <li>
                        <a href="iso-9001-certification-in-mauritius">
                          ISO 9001 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-mauritius">
                          ISO 27001 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-mauritius">
                          CMMI Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-mauritius">
                          HIPAA Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-mauritius">
                          VAPT Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-mauritius">
                          GDPR Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-mauritius">
                          SOC 1 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-mauritius">
                          SOC 2 Certification in Mauritius
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              GDPR compliance allows Mauritius organizations to engage with EU
              clients and partners without legal or reputational risk.
            </p>
          </section>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of GDPR Certification in Mauritius
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve GDPR Certification in Mauritius
                benefit from:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Mauritius"
                className="img-fluid rounded-3"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Benefits List - Right Side */}
            <div className="col-md-6">
              <div className="benefits-list ps-md-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start mb-3 p-2"
                  >
                    <div
                      className="bullet-icon text-primary me-3 flex-shrink-0"
                      style={{ fontSize: "1.5rem", lineHeight: "1.4" }}
                    >
                      •
                    </div>
                    <p
                      className="mb-0 flex-grow-1"
                      style={{
                        color: "#000000",
                        lineHeight: "1.5",
                        fontWeight: "400",
                      }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Last Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                GDPR transforms privacy compliance into a strategic business
                enabler.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="iso-process-section py-5 position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-light"
          style={{ marginTop: "-3rem" }}
        ></div>
        <div className="container position-relative">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="display-5 fw-bold mb-3 text-primary">
                First Cert's GDPR Consulting Approach in Mauritius
              </h2>
              <p
                className="text-center"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                First Cert applies a practical, audit-ready GDPR framework
                tailored to organizations in Mauritius:
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="process-timeline position-relative">
                {/* Connecting Line */}
                <div className="process-line position-absolute top-0 start-50 translate-middle-x h-100 d-none d-md-block"></div>

                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="process-step position-relative mb-4"
                  >
                    <div className="row align-items-center">
                      {/* Step Number & Icon - Alternating sides */}
                      <div
                        className={`col-md-5 ${
                          index % 2 === 0 ? "" : "order-md-2"
                        }`}
                      >
                        <div className="step-number-container text-center text-md-end">
                          <div className="step-number d-inline-flex align-items-center justify-content-center position-relative">
                            <div className="number-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                              {step.number}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step Content - Alternating sides */}
                      <div
                        className={`col-md-7 ${
                          index % 2 === 0 ? "" : "order-md-1"
                        }`}
                      >
                        <div
                          className={`step-card p-4 rounded-3 shadow-sm h-100 ${
                            index % 2 === 0 ? "ms-md-4" : "me-md-4"
                          }`}
                        >
                          <h4 className="text-primary fw-bold mb-3">
                            {step.title}
                          </h4>
                          <p
                            className="mb-0 lh-lg"
                            style={{
                              fontSize: "0.95rem",
                              color: "#212529",
                              fontWeight: "500",
                            }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          GDPR Certification Cost in Mauritius
        </h2>

        <div className="container">
          <div className="row justify-content-center align-items-start">
            {/* CARD 1 */}
            <div className="col-md-6 mb-4">
              <div
                className="plan-card"
                style={{ "--accent-color": "#fa0038" }}
              >
                <div className="title small-title">
                  The cost of GDPR Certification in Mauritius depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and operational structure
                  </li>
                  <li className="check">
                    Volume and sensitivity of personal data processed
                  </li>
                  <li className="check">
                    Use of third parties and international data transfers
                  </li>
                  <li className="check">
                    Documentation, training, and advisory scope
                  </li>
                  <li className="check">
                    Existing privacy and security maturity
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs a GDPR readiness review to provide a
                  transparent, customized cost estimate aligned with your
                  compliance goals.
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-6 mb-4">
              <div
                className="plan-card"
                style={{ "--accent-color": "#164fa9" }}
              >
                <div className="title small-title">
                  Get GDPR Certified in Mauritius with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a leading GDPR consulting provider in Mauritius,
                  supporting organizations with practical, regulation-aligned
                  privacy frameworks. Our consultants integrate GDPR
                  requirements into everyday operations to ensure long-term
                  compliance and global trust.
                </div>

                <div className="title small-title">
                  From initial assessments to continuous compliance support,
                  First Cert helps Mauritius-based organizations protect
                  personal data, meet EU regulatory expectations, and grow
                  confidently in international markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your GDPR Certification journey in Mauritius with First
                  Cert and build a strong foundation for privacy, compliance,
                  and international credibility.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoFooter />
    </>
  );
}

export default MauritiusGdpr;
