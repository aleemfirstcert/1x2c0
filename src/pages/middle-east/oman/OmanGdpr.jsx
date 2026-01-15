import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/middle-east/oman/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/middle-east/oman/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function OmanGdpr() {
  const benefits = [
    "Greater visibility and control over personal data handling",
    "Reduced exposure to regulatory fines and contractual risks",
    "Enhanced trust among European customers and partners",
    "Clear ownership and accountability for data protection activities",
    "Stronger reputation as a privacy-focused and responsible organization",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title:
        "IT services, software development, and digital solution providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS platforms, cloud service operators, and technology startups",
    },
    {
      icon: "bi-cart-check",
      title:
        "E-commerce businesses, online marketplaces, and subscription models",
    },
    {
      icon: "bi-headset",
      title: "Business process outsourcing and data processing firms",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Financial services, fintech companies, and payment processors",
    },
    {
      icon: "bi-file-earmark-medical",
      title:
        "Healthcare, research institutions, and life sciences organizations",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing, analytics, and data-centric consulting firms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Mapping & Scoping",
      description:
        "Identify personal data flows, systems, and processing activities",
    },
    {
      number: "2",
      title: "Risk & Gap Assessment",
      description: "Compare current practices against GDPR requirements",
    },
    {
      number: "3",
      title: "Privacy Framework Design",
      description:
        "Develop policies, notices, consent mechanisms, and records of processing",
    },
    {
      number: "4",
      title: "Operational Controls",
      description:
        "Implement access management, retention rules, and response procedures",
    },
    {
      number: "5",
      title: "Employee Enablement",
      description: "Deliver role-based GDPR training and awareness programs",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Review control effectiveness and close identified gaps",
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
          GDPR Certification in Oman | Expert GDPR Compliance & Data Privacy
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Planning for GDPR Certification in Oman? First Cert provides comprehensive GDPR compliance support, including privacy risk assessments, governance frameworks, workforce training, and continuous advisory services to help organizations meet EU data protection requirements with confidence."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Oman, GDPR consultants Oman, GDPR compliance Oman, GDPR audit Oman, GDPR documentation Oman, GDPR certification cost Oman, data privacy consultants Oman, GDPR implementation Oman, EU GDPR Oman, privacy compliance Oman, GDPR training Oman, GDPR advisory services Oman, GDPR audit support Oman, First Cert GDPR Oman"
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
          <h1 className="main-title">GDPR Certification in Oman</h1>
          <p className="small-desc">
            Embedding Privacy into Business Operations
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
                alt="GDPR Certification in Oman"
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
                <b>GDPR Certification in Oman</b> helps organizations manage
                personal data responsibly when engaging with customers,
                partners, or individuals located within the European Union. As
                Omani businesses expand across digital services, outsourcing,
                cloud platforms, and international trade, adherence to EU data
                protection standards has become an essential requirement for
                sustainable global engagement.
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
                <a href="/">First Cert</a> works with organizations throughout
                Oman to develop GDPR compliance programs that are practical,
                adaptable, and closely aligned with day-to-day operations. Our
                focus is on integrating privacy principles into governance and
                decision-making, rather than treating compliance as a purely
                legal exercise.
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
            What GDPR Certification in Oman Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Oman</b> demonstrates that an organization
            has aligned its data protection practices with the core principles
            of the EU General Data Protection Regulation. GDPR governs how
            personal data is collected, processed, stored, transferred, and
            protected across its entire lifecycle.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A strong GDPR-aligned framework typically covers:
          </p>

          <ul className="iso-list">
            {[
              "Lawful, transparent, and purpose-driven data processing",
              "Defined controls for data storage, retention, and sharing",
              "Processes to support and respond to data subject rights",
              "Protection measures for sensitive and confidential information",
              "Incident response and breach notification preparedness",
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
            GDPR compliance confirms that privacy management is embedded within
            enterprise risk and governance structures.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Oman Affected by GDPR
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR applies to Oman-based organizations that process personal
                data of individuals residing in the European Union, regardless
                of whether the organization has a physical presence in Europe.
                Sectors commonly impacted include:
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
                        <a href="iso-9001-certification-in-oman">
                          ISO 9001 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-oman">
                          ISO 27001 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-oman">
                          CMMI Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-oman">
                          HIPAA Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-oman">
                          VAPT Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-oman">
                          GDPR Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-oman">
                          SOC 1 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-oman">
                          SOC 2 Certification in Oman
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              GDPR compliance enables Omani organizations to operate confidently
              in EU markets while meeting international privacy expectations.
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
                Business Value of GDPR Certification in Oman
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve GDPR Certification in Oman realize
                both regulatory and strategic advantages, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Oman"
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
                GDPR positions data protection as a business enabler that
                supports international growth and long-term credibility.
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
                First Cert's GDPR Compliance Framework in Oman
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
                First Cert follows a structured and business-aligned GDPR
                implementation approach in Oman:
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
          GDPR Certification Cost in Oman
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
                  The cost of GDPR Certification in Oman depends on several
                  factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and structural complexity
                  </li>
                  <li className="check">
                    Volume, type, and sensitivity of personal data processed
                  </li>
                  <li className="check">
                    IT environment complexity and cross-border data transfers
                  </li>
                  <li className="check">
                    Scope of documentation, training, and advisory support
                  </li>
                  <li className="check">
                    Existing maturity of privacy and information security
                    controls
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial GDPR readiness assessment to
                  provide a clear and customized cost estimate aligned with your
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
                  Get GDPR Certification in Oman with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Oman,
                  supporting organizations in designing and maintaining
                  effective privacy management systems aligned with EU
                  regulations. Our consultants prioritize clarity, operational
                  relevance, and sustainable compliance outcomes.
                </div>

                <div className="title small-title">
                  From early-stage privacy assessments to ongoing advisory
                  support, First Cert ensures your GDPR journey strengthens data
                  protection governance and enhances international trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your GDPR Certification journey in Oman with First Cert
                  and build a strong, privacy-driven foundation for global
                  confidence and long-term business success.
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

export default OmanGdpr;
