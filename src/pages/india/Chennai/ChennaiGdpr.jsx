import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/asia/maldives/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/asia/maldives/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ChennaiGdpr() {
  const benefits = [
    "Clear oversight of personal data processing",
    "Reduced exposure to penalties and legal disputes",
    "Greater confidence from EU customers and regulators",
    "Stronger accountability across departments",
    "Enhanced brand reputation as a trusted data handler",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "IT and software development companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS and cloud service providers",
    },
    {
      icon: "bi-cart-check",
      title: "Online travel, booking, and e-commerce platforms",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Financial services, fintech, and payment processors",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, research, and analytics organizations",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Identification",
      description: "Identify how and where personal data is stored and used",
    },
    {
      number: "2",
      title: "Risk Assessment",
      description: "Assess privacy risks and compliance gaps",
    },
    {
      number: "3",
      title: "Policy & Governance",
      description: "Create GDPR-aligned policies and governance structures",
    },
    {
      number: "4",
      title: "Control Implementation",
      description:
        "Implement access control, retention, and incident response measures",
    },
    {
      number: "5",
      title: "Training",
      description: "Train teams on privacy responsibilities",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Validate compliance and close remaining gaps",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Provide ongoing advisory as regulations and operations evolve",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Chennai | EU Data Privacy & Services – First
          Cert
        </title>
        <meta
          name="description"
          content="Achieve GDPR Certification in Chennai with First Cert. We help organizations manage EU personal data through privacy assessments, governance frameworks, and compliance support."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Chennai, GDPR consultants Chennai, GDPR compliance Chennai, GDPR audit Chennai, GDPR documentation Chennai, GDPR certification cost Chennai, data privacy services Chennai, GDPR implementation Chennai, EU GDPR Chennai, privacy compliance Chennai, GDPR training Chennai, GDPR advisory Chennai, First Cert GDPR Chennai"
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
          <h1 className="main-title">GDPR Certification in Chennai</h1>
          <p className="small-desc">Supporting Secure and Lawful Data Use</p>
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
                alt="GDPR Certification in Chennai"
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
                <b>GDPR Certification in Chennai</b> enables organizations to
                lawfully collect, process, and protect personal data belonging
                to individuals in the European Union. With Chennai serving as a
                major hub for IT services, SaaS platforms, fintech, outsourcing,
                travel technology, and cloud operations, compliance with
                European privacy regulations has become essential for global
                business engagement.
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
                <b>First Cert</b> assists Chennai-based companies in building
                privacy-first operating models that align with regulatory
                expectations while maintaining smooth business workflows.
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
            What GDPR Certification in Chennai Confirms
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Chennai</b> verifies that an organization
            has established strong controls for handling personal data across
            its full lifecycle, from collection to deletion. It ensures
            transparency, accountability, and protection of individual privacy
            rights.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A GDPR-aligned framework typically includes:
          </p>

          <ul className="iso-list">
            {[
              "Defined legal bases for data processing",
              "Controls for data retention, deletion, and minimization",
              "Procedures to manage consent and user rights",
              "Technical and organizational safeguards for privacy",
              "Breach response and regulatory reporting mechanisms",
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
            Certification shows that data protection is built into everyday
            operations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs GDPR in Chennai
              </h2>

              <p className="text-center section-sub mb-5">
                Any organization in Chennai that handles personal data of EU
                residents must comply with GDPR, including:
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
                        <a href="iso-9001-certification-in-chennai">
                          ISO 9001 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-chennai">
                          ISO 27001 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-chennai">
                          CMMI Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-chennai">
                          HIPAA Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-chennai">
                          VAPT Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-chennai">
                          GDPR Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-chennai">
                          SOC 1 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-chennai">
                          SOC 2 Certification in Chennai
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              GDPR compliance allows Chennai businesses to work with European
              partners confidently and without regulatory risk.
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
                Business Benefits of GDPR Certification in Chennai
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve GDPR Certification in Chennai benefit
                from:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Chennai"
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
                First Cert's GDPR Implementation Approach in Chennai
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
                First Cert follows a practical and business-focused GDPR
                framework for organizations in Chennai:
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
          GDPR Certification Cost in Chennai
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
                  The cost of GDPR Certification in Chennai depends on:
                </div>

                <ul className="features">
                  <li className="check">Organizational size and structure</li>
                  <li className="check">
                    Volume and sensitivity of EU personal data
                  </li>
                  <li className="check">Use of third-party processors</li>
                  <li className="check">
                    Scope of documentation and training required
                  </li>
                  <li className="check">
                    Existing maturity of privacy and security practices
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs a GDPR readiness review to provide a
                  transparent and customized cost estimate.
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
                  Get GDPR Certified in Chennai with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable GDPR consulting partner in Chennai,
                  helping organizations design privacy frameworks that are
                  practical, audit-ready, and aligned with EU regulations. Our
                  experts integrate GDPR controls into real business processes
                  to ensure long-term compliance and data protection.
                </div>

                <div className="title small-title">
                  From initial assessment to continuous privacy advisory, First
                  Cert supports Chennai organizations in safeguarding personal
                  data, meeting European regulatory standards, and building
                  lasting international trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your GDPR Certification journey in Chennai with First
                  Cert and build a strong foundation for privacy, compliance,
                  and global credibility.
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

export default ChennaiGdpr;
