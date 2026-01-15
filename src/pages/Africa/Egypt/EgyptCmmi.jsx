import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/africa/egypt/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/africa/egypt/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function EgyptCmmi() {
  const benefits = [
    "Improved predictability in project schedules and outcomes",
    "Better visibility into cost control, quality, and performance indicators",
    "Reduced rework, delivery risk, and operational variability",
    "Stronger organizational learning and process continuity",
    "Increased trust from global clients, investors, and institutional stakeholders",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Capability Assessment",
      description: "Evaluate current maturity and improvement opportunities",
    },
    {
      number: "2",
      title: "Process Alignment",
      description: "Map existing workflows to CMMI model requirements",
    },
    {
      number: "3",
      title: "Framework Design",
      description:
        "Develop SOPs, governance structures, and measurement systems",
    },
    {
      number: "4",
      title: "Team Coaching",
      description:
        "Guide teams in applying CMMI practices within live projects",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Conduct internal assessments and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Coordinate and manage formal appraisal activities",
    },
    {
      number: "7",
      title: "Post-Appraisal Optimization",
      description: "Support continuous maturity advancement",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development firms and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS platforms and technology-driven enterprises",
    },
    {
      icon: "bi bi-headset",
      title: "BPO, KPO, and shared service organizations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, EPC, and technical consulting companies",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service providers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and industrial organizations",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title:
        "Startups targeting enterprise, government, or international contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Egypt | Process Excellence & Maturity Appraisal
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain CMMI Certification in Egypt? First Cert delivers comprehensive CMMI consulting services, including capability assessment, process optimization, team capability development, and full appraisal readiness support to help organizations achieve CMMI Maturity Levels 2, 3, or 5 with confidence and measurable performance improvement."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Egypt, CMMI consultants Egypt, CMMI Level 2 Egypt, CMMI Level 3 Egypt, CMMI Level 5 Egypt, CMMI appraisal Egypt, CMMI implementation Egypt, CMMI certification cost Egypt, CMMI consulting company Egypt, SCAMPI appraisal Egypt, CMMI training Egypt, CMMI documentation Egypt, process maturity Egypt, Capability Maturity Model Integration Egypt, CMMI for IT companies Egypt, CMMI for startups Egypt, First Cert CMMI Egypt"
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
          <h1 className="main-title">CMMI Certification in Egypt</h1>
          <p className="small-desc">
            Driving Structured Execution and Process Reliability
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
              {/* IMAGE */}
              <img
                src={imgcmmi}
                alt="CMMI Certification in Egypt"
                className="img-fluid rounded-2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              {/* TEXT BELOW IMAGE */}
              <p
                className="text-dark mt-3"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                <b>CMMI Certification in Egypt</b> helps organizations establish
                disciplined, predictable, and continuously improving processes
                across projects and enterprise operations. As Egyptian
                organizations expand within IT services, engineering,
                telecommunications, manufacturing, public-sector programs, and
                outsourcing, process maturity has become essential for delivery
                stability and stakeholder confidence.
              </p>
              <p
                className="text-dark mt-3"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                <b>First Cert</b> works with organizations throughout Egypt to
                embed CMMI practices into day-to-day operations rather than
                treating them as short-term compliance exercises. Our consulting
                philosophy focuses on sustainable performance improvement that
                continues well beyond the appraisal milestone.
              </p>
            </div>

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
            Overview of CMMI Certification in Egypt
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Egypt</b> is based on the globally
            recognized Capability Maturity Model Integration framework governed
            by ISACA. The appraisal evaluates how effectively an organization
            defines, manages, measures, and improves its processes across
            projects, services, and organizational functions.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            CMMI implementation strengthens critical capability areas such as:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Standardized and repeatable organizational processes</h5>
            </div>

            <div className="vapt-card">
              <h5>Reliable planning, estimation, and execution controls</h5>
            </div>

            <div className="vapt-card">
              <h5>Objective quality assurance and governance mechanisms</h5>
            </div>

            <div className="vapt-card">
              <h5>Proactive risk identification and mitigation practices</h5>
            </div>

            <div className="vapt-card">
              <h5>Data-driven performance analysis and improvement cycles</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{
              color: "#000000",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Achieving CMMI maturity confirms that organizational outcomes are
            driven by controlled, measurable, and continuously optimized
            practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Egypt That Benefit from CMMI Certification
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Egypt is well suited for organizations seeking
            operational maturity and competitive differentiation, including:
          </p>

          <div className="row g-4">
            {/* LEFT: Industry Cards */}
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

            {/* RIGHT: Internal Links */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-egypt">
                      ISO 9001 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-egypt">
                      ISO 27001 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-egypt">
                      CMMI Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-egypt">
                      HIPAA Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-egypt">
                      VAPT Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-egypt">
                      GDPR Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-egypt">
                      SOC 1 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-egypt">
                      SOC 2 Certification in Egypt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Egyptian organizations, CMMI maturity is a decisive factor in
          winning complex, long-term, and high-value engagements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Impact of CMMI Certification in Egypt
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that attain CMMI Certification in Egypt realize
                significant operational and strategic benefits, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
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
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitscmmi}
                alt="CMMI Benefits in Egypt"
                className="img-fluid rounded-3"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <p
            className="text-center mb-5"
            style={{
              color: "#000000",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            CMMI enables organizations to scale operations while maintaining
            consistency, control, and execution confidence.
          </p>
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
                First Cert's CMMI Consulting Methodology in Egypt
              </h2>
              <p
                className="text-center mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                First Cert applies a structured yet flexible CMMI implementation
                approach tailored to organizational realities in Egypt:
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
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          CMMI Certification Cost in Egypt
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
                  The cost of CMMI Certification in Egypt depends on multiple
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">
                    Organizational size and operational complexity
                  </li>
                  <li className="check">Number and scope of active projects</li>
                  <li className="check">
                    Extent of training, mentoring, and documentation required
                  </li>
                  <li className="check">
                    SCAMPI appraisal duration and assessor involvement
                  </li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a structured maturity review to provide
                  a clear, customized cost estimate aligned with organizational
                  goals.
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
                  Get CMMI Certified in Egypt with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Egypt,
                  helping organizations strengthen process capability and
                  achieve sustained performance excellence. Our consultants
                  align CMMI practices with business strategy to ensure value
                  creation beyond certification.
                </div>

                <div className="title small-title">
                  From early-stage assessments through appraisal execution and
                  continuous maturity growth, First Cert supports organizations
                  in Egypt in building predictable delivery models, scalable
                  operations, and long-term competitive advantage.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your CMMI Certification journey in Egypt with First Cert
                  and lay a strong foundation for operational discipline,
                  structured growth, and global credibility.
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

export default EgyptCmmi;
