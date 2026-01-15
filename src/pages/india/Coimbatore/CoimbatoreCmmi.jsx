import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/india/coimbatore/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/india/coimbatore/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function CoimbatoreCmmi() {
  const benefits = [
    "Predictable project schedules and delivery quality",
    "Better cost, resource, and risk management",
    "Reduced defects, delays, and operational inefficiencies",
    "Improved team collaboration and knowledge continuity",
    "Greater credibility with clients, partners, and stakeholders",
    "Strong foundation for scaling operations without compromising quality",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Assessment",
      description: "Evaluate current processes and gaps",
    },
    {
      number: "2",
      title: "Process Design",
      description: "Create workflows aligned with CMMI best practices",
    },
    {
      number: "3",
      title: "Governance & Metrics",
      description: "Define roles, KPIs, and accountability",
    },
    {
      number: "4",
      title: "Team Enablement",
      description: "Train and mentor staff on process standards",
    },
    {
      number: "5",
      title: "Readiness Review",
      description: "Conduct internal audits and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Support",
      description: "Coordinate official appraisal activities",
    },
    {
      number: "7",
      title: "Continuous Optimization",
      description: "Improve process maturity post-certification",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT service providers, software companies, and SaaS platforms",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and outsourcing firms",
    },
    {
      icon: "bi bi-diagram-3",
      title:
        "Engineering, manufacturing, and technical consulting organizations",
    },
    {
      icon: "bi bi-hdd-network",
      title: "Managed service providers and system integrators",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Startups targeting enterprise and government clients",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Coimbatore | Process Excellence & Consulting –
          First Cert
        </title>
        <meta
          name="description"
          content="Achieve CMMI Certification in Coimbatore with First Cert. We provide process evaluation, maturity planning, team coaching, and SCAMPI appraisal support for scalable growth."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Coimbatore, CMMI consultants Coimbatore, CMMI Level 2 Coimbatore, CMMI Level 3 Coimbatore, CMMI Level 5 Coimbatore, CMMI appraisal Coimbatore, CMMI implementation Coimbatore, CMMI certification cost Coimbatore, CMMI consulting company Coimbatore, SCAMPI appraisal Coimbatore, CMMI training Coimbatore, CMMI documentation Coimbatore, process maturity Coimbatore, Capability Maturity Model Integration Coimbatore, CMMI for IT companies Coimbatore, CMMI for startups Coimbatore, First Cert CMMI Coimbatore"
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
          <h1 className="main-title">CMMI Certification in Coimbatore</h1>
          <p className="small-desc">Driving Consistent Process Performance</p>
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
                alt="CMMI Certification in Coimbatore"
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
                <b>CMMI Certification in Coimbatore</b> helps organizations
                adopt structured, repeatable, and measurable processes that
                enhance operational reliability and business performance. With
                Coimbatore emerging as a hub for IT, engineering, manufacturing,
                and digital innovation, achieving process maturity has become
                vital to remain competitive locally and globally.
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
                <b>First Cert</b> partners with Coimbatore organizations to
                embed CMMI best practices into daily operations, ensuring that
                process improvement is continuous and actionable rather than
                just procedural compliance.
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
            What CMMI Certification in Coimbatore Validates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Coimbatore</b> confirms that an
            organization follows recognized standards for process maturity,
            covering planning, execution, measurement, and ongoing enhancement.
            It evaluates enterprise and project-level performance for consistent
            outcomes.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A CMMI-aligned organization typically demonstrates:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Standardized and well-documented operational processes</h5>
            </div>

            <div className="vapt-card">
              <h5>Reliable project planning, scheduling, and tracking</h5>
            </div>

            <div className="vapt-card">
              <h5>Strong governance, quality controls, and accountability</h5>
            </div>

            <div className="vapt-card">
              <h5>Data-driven performance monitoring and reporting</h5>
            </div>

            <div className="vapt-card">
              <h5>Continuous improvement across departments and teams</h5>
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
            Certification ensures outcomes are predictable, regardless of
            complexity or scale.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Pursue CMMI in Coimbatore
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Coimbatore is ideal for companies aiming for
            higher process control and consistent delivery, including:
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
                    <a href="iso-9001-certification-in-coimbatore">
                      ISO 9001 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-coimbatore">
                      ISO 27001 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-coimbatore">
                      CMMI Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-coimbatore">
                      HIPAA Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-coimbatore">
                      VAPT Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-coimbatore">
                      GDPR Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-coimbatore">
                      SOC 1 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-coimbatore">
                      SOC 2 Certification in Coimbatore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          CMMI helps Coimbatore businesses meet client requirements, reduce
          operational risks, and gain a competitive edge internationally.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Advantages of CMMI Certification in Coimbatore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving CMMI Certification in Coimbatore gain
                tangible benefits:
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
                alt="CMMI Benefits in Coimbatore"
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
            CMMI turns structured process management into a strategic asset.
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
                First Cert's CMMI Implementation Approach in Coimbatore
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
                Our approach ensures practical implementation and lasting value:
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
          CMMI Certification Cost in Coimbatore
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
                  The cost of CMMI Certification in Coimbatore depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Desired maturity level (Level 2, 3, or 5)
                  </li>
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">Number and type of ongoing projects</li>
                  <li className="check">
                    Training, mentoring, and documentation requirements
                  </li>
                  <li className="check">SCAMPI appraisal scope and duration</li>
                </ul>

                <div className="title small-title">
                  First Cert provides a tailored cost estimate after a detailed
                  maturity assessment.
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
                  Get CMMI Certified in Coimbatore with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a leading CMMI consulting partner in Coimbatore,
                  guiding organizations from initial evaluation to SCAMPI
                  appraisal and continuous process improvement. We help embed
                  process maturity into organizational culture, creating
                  reliable delivery models, scalable operations, and
                  international credibility.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Coimbatore with First
                  Cert and strengthen your operations with consistent
                  performance, process excellence, and global recognition.
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

export default CoimbatoreCmmi;
