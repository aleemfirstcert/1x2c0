import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/africa/mauritius/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/africa/mauritius/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MauritiusCmmi() {
  const benefits = [
    "More predictable project timelines and delivery results",
    "Better control of costs, quality, and performance metrics",
    "Fewer errors, delays, and rework",
    "Improved knowledge sharing and process continuity",
    "Higher confidence from clients, partners, and investors",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Process Assessment",
      description: "Review current maturity and identify improvement gaps",
    },
    {
      number: "2",
      title: "Process Design",
      description: "Align workflows with CMMI standards",
    },
    {
      number: "3",
      title: "Governance Setup",
      description: "Define roles, policies, and performance metrics",
    },
    {
      number: "4",
      title: "Team Enablement",
      description: "Train and coach teams on CMMI practices",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Conduct internal reviews and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Coordination",
      description: "Support formal appraisal execution",
    },
    {
      number: "7",
      title: "Ongoing Improvement",
      description: "Strengthen maturity after certification",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS companies and digital solution providers",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service organizations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, EPC, and technical consulting firms",
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
      title: "Startups targeting enterprise, government, or global contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Mauritius | Business Process Maturity &
          Performance Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve CMMI Certification in Mauritius? First Cert offers expert Capability Maturity Model Integration consulting, including process gap analysis, organizational framework development, capability strengthening, and complete SCAMPI appraisal support to help companies reach higher maturity with stable and measurable results."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Mauritius, CMMI consultants Mauritius, CMMI Level 2 Mauritius, CMMI Level 3 Mauritius, CMMI Level 5 Mauritius, CMMI appraisal Mauritius, CMMI implementation Mauritius, CMMI certification cost Mauritius, CMMI consulting company Mauritius, SCAMPI appraisal Mauritius, CMMI training Mauritius, CMMI documentation Mauritius, process maturity Mauritius, Capability Maturity Model Integration Mauritius, CMMI for IT companies Mauritius, CMMI for startups Mauritius, First Cert CMMI Mauritius"
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
          <h1 className="main-title">CMMI Certification in Mauritius</h1>
          <p className="small-desc">
            Building Predictable and High-Performance Operations
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
                alt="CMMI Certification in Mauritius"
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
                <b>CMMI Certification in Mauritius</b> helps organizations move
                from unstructured working methods to disciplined, measurable,
                and continuously improving operational systems. As businesses in
                Mauritius expand across IT services, engineering, manufacturing,
                outsourcing, and digital industries, process maturity is
                critical for meeting delivery commitments, improving quality,
                and supporting long-term growth.
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
                <b>First Cert</b> partners with organizations in Mauritius to
                integrate CMMI practices into real business activities. Our
                approach focuses on leadership engagement, execution discipline,
                and lasting improvement rather than short-term compliance.
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
            What CMMI Certification in Mauritius Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Mauritius</b> is based on the globally
            accepted Capability Maturity Model Integration framework, which
            evaluates how well an organization defines, manages, measures, and
            improves its processes across projects and enterprise functions.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A CMMI-aligned organization demonstrates:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Clearly structured and standardized workflows</h5>
            </div>

            <div className="vapt-card">
              <h5>Reliable planning, estimation, and progress tracking</h5>
            </div>

            <div className="vapt-card">
              <h5>Strong quality assurance and governance controls</h5>
            </div>

            <div className="vapt-card">
              <h5>Early detection and mitigation of delivery risks</h5>
            </div>

            <div className="vapt-card">
              <h5>Performance monitoring and continuous optimization</h5>
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
            Achieving CMMI maturity confirms that business results are driven by
            consistent and scalable operational practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Pursue CMMI Certification in Mauritius
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Mauritius is ideal for organizations aiming to
            strengthen operational control and competitive positioning,
            including:
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
          For many organizations in Mauritius, CMMI maturity is essential to win
          complex, long-term, and high-value projects.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Value of CMMI Certification in Mauritius
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that earn CMMI Certification in Mauritius benefit
                from:
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
                alt="CMMI Benefits in Mauritius"
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
            CMMI creates a strong foundation for scaling operations without
            losing consistency or control.
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
                First Cert's CMMI Consulting Model in Mauritius
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
                approach for organizations in Mauritius:
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
          CMMI Certification Cost in Mauritius
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
                  The cost of CMMI Certification in Mauritius depends on factors
                  such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, 3, or 5)
                  </li>
                  <li className="check">Size and complexity of the organization</li>
                  <li className="check">Number and type of active projects</li>
                  <li className="check">
                    Training, mentoring, and documentation needs
                  </li>
                  <li className="check">
                    Scope and duration of the SCAMPI appraisal
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a maturity assessment to provide a
                  transparent and customized cost estimate aligned with business
                  objectives.
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
                  Get CMMI Certified in Mauritius with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Mauritius,
                  helping organizations strengthen process capability and
                  achieve measurable performance improvement. Our experts align
                  CMMI practices with business strategy to ensure lasting value
                  beyond certification.
                </div>

                <div className="title small-title">
                  From early diagnostics to appraisal support and ongoing
                  maturity growth, First Cert enables organizations in Mauritius
                  to build reliable delivery models, scalable operations, and
                  long-term competitive advantage.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Mauritius with First
                  Cert and establish a strong foundation for operational
                  excellence, predictable delivery, and global credibility.
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

export default MauritiusCmmi;