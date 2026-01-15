import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/africa/ghana/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/africa/ghana/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function GhanaGdpr() {
  const benefits = [
    "Greater transparency and control over personal data processing",
    "Lower exposure to regulatory fines, disputes, and contractual risks",
    "Increased trust from EU clients, partners, and supervisory authorities",
    "Clearly defined privacy roles, responsibilities, and escalation procedures",
    "Enhanced brand reputation as a privacy-conscious organization",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "IT companies, software developers, and managed service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS platforms, cloud service providers, and digital startups",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce businesses and online subscription platforms",
    },
    {
      icon: "bi-headset",
      title: "Business process outsourcing and data processing firms",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Banks, fintech organizations, and payment service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, research, and life sciences entities",
    },
    {
      icon: "bi-bar-chart-line",
      title:
        "Marketing agencies, analytics companies, and data-driven consultancies",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Discovery & Scoping",
      description:
        "Identify personal data sources, flows, and processing activities",
    },
    {
      number: "2",
      title: "Privacy Risk Assessment",
      description: "Evaluate compliance gaps and risk exposure",
    },
    {
      number: "3",
      title: "Governance Design",
      description:
        "Develop privacy policies, notices, registers, and internal controls",
    },
    {
      number: "4",
      title: "Control Deployment",
      description:
        "Implement access restrictions, retention schedules, and response workflows",
    },
    {
      number: "5",
      title: "Training & Awareness",
      description: "Conduct GDPR training for employees and management",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Review effectiveness and close outstanding gaps",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description: "Support continuous compliance and regulatory updates",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Ghana | Expert EU Data Protection & Privacy
          Compliance Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve GDPR Certification in Ghana? First Cert provides end-to-end GDPR advisory services, covering data protection assessments, privacy governance design, workforce training, and ongoing compliance support to help organizations meet EU data protection requirements effectively."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Ghana, GDPR consultants Ghana, GDPR compliance Ghana, GDPR audit Ghana, GDPR documentation Ghana, GDPR certification cost Ghana, data privacy services Ghana, GDPR implementation Ghana, EU GDPR Ghana, privacy compliance Ghana, GDPR training Ghana, GDPR advisory Ghana, First Cert GDPR Ghana"
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
          <h1 className="main-title">GDPR Certification in Ghana</h1>
          <p className="small-desc">
            Enabling Trusted and Lawful Data Management
          </p>
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
                alt="GDPR Certification in Ghana"
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
                <b>GDPR Certification in Ghana</b> helps organizations manage
                personal data relating to EU residents in a compliant,
                transparent, and accountable manner. As Ghanaian companies
                increasingly participate in global digital services,
                outsourcing, e-commerce, cloud computing, and cross-border data
                processing, GDPR compliance has become a critical requirement
                for international operations.
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
                <b>First Cert</b> supports organizations across Ghana in
                embedding GDPR principles directly into business processes. Our
                focus is on building practical privacy governance structures,
                strengthening accountability, and reducing regulatory
                risk—ensuring compliance is sustainable and aligned with
                business growth.
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
            What GDPR Certification in Ghana Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Ghana</b> confirms that an organization's
            personal data practices align with the core principles of the EU
            General Data Protection Regulation. It ensures that data is
            processed lawfully, fairly, securely, and only for clearly defined
            purposes.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A comprehensive GDPR compliance program generally includes:
          </p>

          <ul className="iso-list">
            {[
              "Identification and documentation of lawful bases for data processing",
              "Defined controls for data access, retention, storage, and international transfers",
              "Procedures for responding to data subject rights requests",
              "Technical and organizational safeguards to protect personal data",
              "Breach detection, response, and notification mechanisms",
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
            Certification reflects a structured and responsible approach to
            privacy and data protection management.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Ghana That Must Consider GDPR Compliance
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR applies to organizations in Ghana that collect, process, or
                manage personal data of individuals located within the European
                Union, regardless of physical location. Commonly impacted
                organizations include:
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
                        <a href="iso-9001-certification-in-ghana">
                          ISO 9001 Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-ghana">
                          ISO 27001 Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-ghana">
                          CMMI Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-ghana">
                          HIPAA Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-ghana">
                          VAPT Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-ghana">
                          GDPR Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-ghana">
                          SOC 1 Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-ghana">
                          SOC 2 Certification in Ghana
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              GDPR compliance allows Ghanaian organizations to operate
              confidently within the EU regulatory environment.
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
                Business Advantages of GDPR Certification in Ghana
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve GDPR Certification in Ghana benefit
                from both regulatory assurance and strategic value, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Ghana"
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
                GDPR compliance positions privacy as a core component of
                business credibility and long-term sustainability.
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
                First Cert's GDPR Implementation Framework in Ghana
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
                First Cert delivers GDPR consulting services in Ghana through a
                structured, business-focused methodology:
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
          GDPR Certification Cost in Ghana
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
                  The cost of GDPR Certification in Ghana varies based on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">Organizational size and complexity</li>
                  <li className="check">
                    Volume and sensitivity of personal data processed
                  </li>
                  <li className="check">
                    Cross-border data transfers and third-party relationships
                  </li>
                  <li className="check">
                    Scope of documentation, training, and advisory services
                    required
                  </li>
                  <li className="check">
                    Existing maturity of privacy and information security
                    controls
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a GDPR readiness assessment to provide
                  a clear and customized cost estimate aligned with
                  organizational objectives.
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
                  Get GDPR Certified in Ghana with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Ghana,
                  helping organizations design, implement, and maintain
                  effective data protection frameworks aligned with EU
                  regulations. Our consultants emphasize clarity, practicality,
                  and long-term compliance resilience.
                </div>

                <div className="title small-title">
                  From initial assessments to ongoing advisory support, First
                  Cert ensures your GDPR journey strengthens governance, builds
                  international trust, and supports global business expansion.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your GDPR Certification journey in Ghana with First Cert
                  and establish a strong, privacy-driven foundation for
                  regulatory confidence and international success.
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

export default GhanaGdpr;
