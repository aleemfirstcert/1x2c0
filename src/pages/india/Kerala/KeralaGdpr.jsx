import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/india/kerala/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/india/kerala/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function KeralaGdpr() {
  const benefits = [
    "Stronger governance over personal data handling",
    "Lower exposure to regulatory penalties and legal disputes",
    "Greater confidence from European clients and regulators",
    "Clear assignment of privacy responsibilities across teams",
    "Improved corporate image as a data-protective organization",
    "Competitive positioning in international business environments",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "Software development and IT service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud-based platforms and SaaS businesses",
    },
    {
      icon: "bi-cart-check",
      title: "Online retail, travel, and booking platforms",
    },
    {
      icon: "bi-headset",
      title: "Business process and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Financial technology and payment service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, research, and data analytics organizations",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Mapping",
      description: "Mapping of personal data across systems and workflows",
    },
    {
      number: "2",
      title: "Risk Identification",
      description: "Identification of privacy gaps and compliance risks",
    },
    {
      number: "3",
      title: "Policy Development",
      description: "Development of GDPR-compliant policies and governance",
    },
    {
      number: "4",
      title: "Control Deployment",
      description:
        "Deployment of access control, retention, and incident response processes",
    },
    {
      number: "5",
      title: "Workforce Training",
      description: "Workforce training on privacy obligations",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Internal reviews to validate compliance",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Ongoing advisory support as business and regulations evolve",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Kerala | EU Data Privacy & Compliance Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Achieve GDPR Certification in Kerala with First Cert. We offer privacy audits, GDPR frameworks, and ongoing compliance support to protect EU personal data securely."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Kerala, GDPR consultants Kerala, GDPR compliance Kerala, GDPR audit Kerala, GDPR documentation Kerala, GDPR certification cost Kerala, data privacy services Kerala, GDPR implementation Kerala, EU GDPR Kerala, privacy compliance Kerala, GDPR training Kerala, GDPR advisory Kerala, First Cert GDPR Kerala"
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
          <h1 className="main-title">GDPR Certification in Kerala</h1>
          <p className="small-desc">Driving Trust Through Data Privacy</p>
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
                alt="GDPR Certification in Kerala"
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
                <b>GDPR Certification in Kerala</b> allows organizations to
                manage, store, and process personal data belonging to EU
                residents in a lawful and transparent manner. As Kerala expands
                its footprint in IT services, cloud platforms, healthcare
                technology, and global digital commerce, meeting EU privacy
                regulations has become a key requirement for international
                partnerships.
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
                <b>First Cert</b> supports Kerala-based organizations by
                designing privacy-focused systems that align regulatory
                obligations with efficient business operations.
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
            What GDPR Certification in Kerala Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Kerala</b> confirms that an organization
            has established effective controls for handling personal data
            throughout its lifecycle. It ensures transparency, accountability,
            and protection of individual privacy rights across all departments.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A GDPR-aligned framework includes:
          </p>

          <ul className="iso-list">
            {[
              "Legal authorization for data collection and processing",
              "Policies governing data retention, limitation, and secure removal",
              "Procedures for managing user consent and rights requests",
              "Safeguards to protect data confidentiality and integrity",
              "Structured response plans for data breaches and regulatory reporting",
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
            Certification proves that privacy protection is embedded into
            everyday operations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs GDPR Certification in Kerala
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR Certification in Kerala is essential for organizations that
                process or store EU personal data:
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
                        <a href="iso-9001-certification-in-kerala">
                          ISO 9001 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-kerala">
                          ISO 27001 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-kerala">
                          CMMI Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-kerala">
                          HIPAA Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-kerala">
                          VAPT Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-kerala">
                          GDPR Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-kerala">
                          SOC 1 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-kerala">
                          SOC 2 Certification in Kerala
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              GDPR compliance enables Kerala businesses to engage confidently
              with European markets.
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
                Benefits of GDPR Certification in Kerala
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that complete GDPR Certification in Kerala gain:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Kerala"
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
                GDPR helps organizations turn privacy compliance into a
                strategic advantage.
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
                First Cert's GDPR Implementation Framework in Kerala
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
                First Cert applies a structured GDPR approach for organizations
                in Kerala:
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
          GDPR Certification Cost in Kerala
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
                  The cost of GDPR Certification in Kerala depends on:
                </div>

                <ul className="features">
                  <li className="check">Organizational size and complexity</li>
                  <li className="check">
                    Volume and sensitivity of EU personal data
                  </li>
                  <li className="check">
                    Data processing and transfer activities
                  </li>
                  <li className="check">
                    Documentation, training, and advisory scope
                  </li>
                  <li className="check">
                    Existing privacy and security maturity
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a readiness review to provide a
                  transparent and tailored cost proposal.
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
                  Get GDPR Certified in Kerala with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Kerala,
                  delivering privacy frameworks that are practical, audit-ready,
                  and aligned with EU regulations. Our team integrates data
                  protection controls into real business processes to ensure
                  long-term compliance.
                </div>

                <div className="title small-title">
                  From initial assessment through ongoing advisory, Kerala
                  organizations can protect personal data, meet European
                  regulatory expectations, and strengthen global trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your GDPR Certification in Kerala with First Cert and
                  establish a strong foundation for privacy, compliance, and
                  international credibility.
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

export default KeralaGdpr;
