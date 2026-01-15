import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/oman/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/middle-east/oman/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function OmanCmmi() {
  const benefits = [
    "Greater consistency in project execution and service delivery",
    "Improved visibility into cost, schedule, and performance metrics",
    "Reduced rework, defects, and operational risk",
    "Stronger knowledge retention and repeatable best practices",
    "Increased credibility with international clients and stakeholders",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Capability Assessment",
      description: "Determine current maturity levels and improvement goals",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Align existing practices with CMMI model expectations",
    },
    {
      number: "3",
      title: "Process Framework Design",
      description:
        "Develop SOPs, workflows, metrics, and governance structures",
    },
    {
      number: "4",
      title: "Adoption & Coaching",
      description:
        "Guide teams to apply processes effectively in live projects",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Conduct mock appraisals and compliance checks",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Coordinate and support the formal appraisal process",
    },
    {
      number: "7",
      title: "Post-Appraisal Optimization",
      description: "Assist with continuous improvement and maturity growth",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development companies and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS firms and digital product organizations",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, design, and technical consulting companies",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service providers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing organizations with complex operational workflows",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Startups preparing for enterprise or government engagements",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Oman | Strategic Process Maturity & Appraisal
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve CMMI Certification in Oman? First Cert offers expert CMMI consulting services covering process optimization, capability building, team mentoring, and complete appraisal readiness to help organizations successfully attain CMMI Maturity Levels 2, 3, or 5."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Oman, CMMI consultants Oman, CMMI Level 2 Oman, CMMI Level 3 Oman, CMMI Level 5 Oman, CMMI appraisal Oman, CMMI implementation Oman, CMMI certification cost Oman, CMMI consulting firm Oman, SCAMPI appraisal Oman, CMMI training Oman, CMMI documentation Oman, process maturity Oman, Capability Maturity Model Integration Oman, CMMI for IT companies Oman, CMMI for startups Oman, First Cert CMMI Oman"
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
          <h1 className="main-title">CMMI Certification in Oman</h1>
          <p className="small-desc">
            Enhancing Process Maturity and Delivery Confidence
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
                alt="CMMI Certification in Oman"
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
                <b>CMMI Certification in Oman</b> enables organizations to
                establish structured, measurable, and continuously improving
                processes that support predictable performance and sustainable
                growth. As Omani organizations expand into regional and
                international markets, demonstrating disciplined process
                management has become essential for winning enterprise contracts
                and long-term partnerships.
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
                <a href="/">First Cert</a> works with organizations across Oman
                to implement CMMI frameworks that align with business objectives
                and operational realities. Our approach emphasizes practical
                adoption, cultural alignment, and measurable improvement rather
                than theoretical or documentation-only compliance.
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
            Understanding CMMI Certification in Oman
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Oman</b> is based on the globally
            recognized Capability Maturity Model Integration framework,
            administered by ISACA. The appraisal evaluates how effectively an
            organization defines, manages, measures, and improves its processes
            to consistently deliver quality outcomes.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The CMMI model strengthens capabilities in areas such as:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Organization-wide process standardization and governance</h5>
            </div>

            <div className="vapt-card">
              <h5>
                Accurate project planning, estimation, and performance tracking
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Quality management and objective measurement</h5>
            </div>

            <div className="vapt-card">
              <h5>Risk anticipation and proactive issue management</h5>
            </div>

            <div className="vapt-card">
              <h5>Continuous improvement and maturity advancement</h5>
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
            Achieving CMMI certification confirms that operational decisions are
            guided by data-driven, repeatable, and well-governed processes.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Oman That Benefit from CMMI Certification
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Oman is highly relevant for organizations
            seeking stronger execution maturity and enhanced customer
            confidence, including:
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
          For many Omani organizations, CMMI serves as a competitive
          differentiator in tenders and long-term strategic collaborations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of CMMI Certification in Oman
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in Oman gain clear
                operational and strategic benefits, such as:
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
                alt="CMMI Benefits in Oman"
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
            CMMI transforms process maturity into a foundation for scalable,
            resilient, and performance-driven operations.
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
                First Cert's CMMI Implementation Framework in Oman
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
                First Cert follows a structured yet flexible CMMI implementation
                methodology designed for long-term value creation:
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
          CMMI Certification Cost in Oman
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
                  The cost of CMMI Certification in Oman varies depending on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">
                    Organization size and structural complexity
                  </li>
                  <li className="check">
                    Number and nature of active projects
                  </li>
                  <li className="check">
                    Scope of training, documentation, and mentoring
                  </li>
                  <li className="check">
                    SCAMPI appraisal duration and effort
                  </li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial readiness review to provide a
                  clear, customized, and transparent cost proposal aligned with
                  your business objectives.
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
                  Get CMMI Certification in Oman with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Oman,
                  supporting organizations in building strong process capability
                  and achieving sustainable operational excellence. Our
                  consultants align CMMI practices with business priorities to
                  ensure value extends well beyond certification.
                </div>

                <div className="title small-title">
                  From baseline assessment to appraisal support and continuous
                  maturity enhancement, First Cert ensures your CMMI journey in
                  Oman delivers measurable results and long-term success.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Oman with First Cert
                  and build a strong foundation for predictable delivery,
                  scalable growth, and global competitiveness.
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

export default OmanCmmi;
