import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/asia/maldives/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/asia/maldives/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ChennaiCmmi() {
  const benefits = [
    "More predictable project timelines and delivery quality",
    "Improved control over costs, resources, and risks",
    "Reduced defects, delays, and rework",
    "Stronger collaboration and knowledge continuity",
    "Higher confidence from customers, investors, and partners",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Review",
      description: "Assess current practices and identify gaps",
    },
    {
      number: "2",
      title: "Process Architecture",
      description: "Design workflows aligned with CMMI requirements",
    },
    {
      number: "3",
      title: "Governance Setup",
      description: "Define roles, metrics, and accountability",
    },
    {
      number: "4",
      title: "Capability Building",
      description: "Train and coach teams on best practices",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Conduct internal audits and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Coordination",
      description: "Support and manage the formal appraisal",
    },
    {
      number: "7",
      title: "Ongoing Optimization",
      description: "Improve maturity after certification",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development companies and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS businesses and digital solution firms",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service organizations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, EPC, and technical consulting companies",
    },
    {
      icon: "bi bi-hdd-network",
      title: "Managed service providers and system integrators",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and industrial enterprises",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Startups working with enterprise or government clients",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Chennai | Process Maturity & Consulting – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking for CMMI Certification in Chennai? First Cert delivers process improvement, maturity roadmap development, team enablement, and SCAMPI appraisal support for scalable business growth."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Chennai, CMMI consultants Chennai, CMMI Level 2 Chennai, CMMI Level 3 Chennai, CMMI Level 5 Chennai, CMMI appraisal Chennai, CMMI implementation Chennai, CMMI certification cost Chennai, CMMI consulting company Chennai, SCAMPI appraisal Chennai, CMMI training Chennai, CMMI documentation Chennai, process maturity Chennai, Capability Maturity Model Integration Chennai, CMMI for IT companies Chennai, CMMI for startups Chennai, First Cert CMMI Chennai"
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
          <h1 className="main-title">CMMI Certification in Chennai</h1>
          <p className="small-desc">
            Enabling Predictable and High-Quality Operations
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
                alt="CMMI Certification in Chennai"
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
                <b>CMMI Certification in Chennai</b> helps organizations build
                disciplined, measurable, and repeatable processes that drive
                consistent delivery and sustainable growth. With Chennai being a
                major center for IT services, engineering, outsourcing,
                manufacturing, and digital innovation, companies must
                demonstrate operational reliability to compete in national and
                global markets.
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
                <b>First Cert</b> supports Chennai-based organizations by
                integrating CMMI practices into everyday workflows, ensuring
                process maturity becomes a part of business culture rather than
                a one-time compliance exercise.
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
            What CMMI Certification in Chennai Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Chennai</b> validates that an organization
            follows internationally accepted process maturity standards that
            govern how work is planned, executed, monitored, and improved. It
            evaluates both project-level and enterprise-level performance
            management.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A CMMI-aligned organization typically demonstrates:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Well-defined and standardized operational processes</h5>
            </div>

            <div className="vapt-card">
              <h5>Accurate planning, estimation, and progress tracking</h5>
            </div>

            <div className="vapt-card">
              <h5>Strong quality management and governance controls</h5>
            </div>

            <div className="vapt-card">
              <h5>Data-driven performance measurement</h5>
            </div>

            <div className="vapt-card">
              <h5>Ongoing improvement across teams and departments</h5>
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
            This structured maturity ensures reliable outcomes regardless of
            project size or complexity.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Adopt CMMI in Chennai
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Chennai is highly valuable for organizations
            seeking stronger control over delivery and growth, including:
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
          CMMI enables Chennai organizations to meet demanding client
          expectations and global contracting standards.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of CMMI Certification in Chennai
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in Chennai gain
                significant operational and commercial advantages, such as:
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
                alt="CMMI Benefits in Chennai"
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
            CMMI creates a stable platform for scaling operations without losing
            efficiency or control.
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
                First Cert's CMMI Consulting Approach in Chennai
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
                First Cert follows a structured and performance-driven CMMI
                framework designed for Chennai organizations:
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
          CMMI Certification Cost in Chennai
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
                  The cost of CMMI Certification in Chennai varies based on:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, 3, or 5)
                  </li>
                  <li className="check">
                    Size and complexity of the organization
                  </li>
                  <li className="check">Number and type of active projects</li>
                  <li className="check">
                    Training, mentoring, and documentation requirements
                  </li>
                  <li className="check">
                    Scope and duration of the SCAMPI appraisal
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a maturity assessment to provide a
                  transparent and tailored cost estimate aligned with your
                  business goals.
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
                  Get CMMI Certified in Chennai with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Chennai,
                  helping organizations strengthen process capability and
                  achieve measurable performance improvement. Our experts align
                  CMMI practices with strategic objectives to ensure long-term
                  value beyond certification.
                </div>

                <div className="title small-title">
                  From initial evaluation to SCAMPI appraisal and continuous
                  improvement, First Cert enables Chennai-based organizations to
                  build reliable delivery models, scalable operations, and
                  strong global credibility.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Chennai with First
                  Cert and create a powerful foundation for operational
                  excellence, predictable performance, and international trust.
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

export default ChennaiCmmi;
