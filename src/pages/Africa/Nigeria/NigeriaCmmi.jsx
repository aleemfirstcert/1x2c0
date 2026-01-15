import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/africa/nigeria/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/africa/nigeria/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function NigeriaCmmi() {
  const benefits = [
    "Increased predictability in project delivery and outcomes",
    "Greater control over cost, quality, and performance metrics",
    "Reduced errors, delays, and rework",
    "Improved organizational learning and process continuity",
    "Enhanced trust and confidence from international clients and partners",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Assessment",
      description: "Benchmark current process capability and improvement gaps",
    },
    {
      number: "2",
      title: "Process Alignment",
      description: "Standardize workflows according to CMMI requirements",
    },
    {
      number: "3",
      title: "Framework Development",
      description:
        "Design policies, governance structures, and measurement systems",
    },
    {
      number: "4",
      title: "Team Enablement",
      description:
        "Train and coach teams to implement CMMI practices effectively",
    },
    {
      number: "5",
      title: "Internal Reviews",
      description: "Conduct mock appraisals and readiness checks",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Coordination",
      description: "Manage formal assessment and appraisal activities",
    },
    {
      number: "7",
      title: "Continuous Improvement",
      description: "Support ongoing process optimization post-appraisal",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT service providers and software development firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS and digital product companies",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service organizations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, EPC, and technical consultancy businesses",
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
      title:
        "Startups pursuing enterprise, government, or international contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Nigeria | Organizational Maturity & Process
          Excellence Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve CMMI Certification in Nigeria? First Cert offers end-to-end consulting services for Capability Maturity Model Integration, including process assessment, standardization, capability development, and full SCAMPI appraisal support to help organizations achieve Levels 2, 3, or 5 with measurable and sustainable improvements."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Nigeria, CMMI consultants Nigeria, CMMI Level 2 Nigeria, CMMI Level 3 Nigeria, CMMI Level 5 Nigeria, CMMI appraisal Nigeria, CMMI implementation Nigeria, CMMI certification cost Nigeria, CMMI consulting company Nigeria, SCAMPI appraisal Nigeria, CMMI training Nigeria, CMMI documentation Nigeria, process maturity Nigeria, Capability Maturity Model Integration Nigeria, CMMI for IT companies Nigeria, CMMI for startups Nigeria, First Cert CMMI Nigeria"
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
          <h1 className="main-title">CMMI Certification in Nigeria</h1>
          <p className="small-desc">
            Driving Operational Excellence and Predictable Delivery
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
                alt="CMMI Certification in Nigeria"
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
                <b>CMMI Certification in Nigeria</b> enables organizations to
                transform inconsistent operational practices into structured,
                measurable, and continuously improving processes. With Nigeria's
                growing technology, engineering, manufacturing, and outsourcing
                sectors, achieving process maturity is essential for reliable
                delivery, client satisfaction, and sustainable growth.
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
                <b>First Cert</b> partners with Nigerian organizations to
                integrate CMMI practices into real-world operations. Our
                approach emphasizes leadership accountability, disciplined
                execution, and lasting process improvement beyond merely
                preparing for appraisals.
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
            Understanding CMMI Certification in Nigeria
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Nigeria</b> is based on the internationally
            recognized Capability Maturity Model Integration framework. The
            assessment evaluates how well an organization defines, monitors, and
            enhances processes across projects, services, and enterprise
            functions.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Key capabilities strengthened through a CMMI program include:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Standardized project and operational workflows</h5>
            </div>

            <div className="vapt-card">
              <h5>Accurate planning, estimation, and performance monitoring</h5>
            </div>

            <div className="vapt-card">
              <h5>Quality governance and process control</h5>
            </div>

            <div className="vapt-card">
              <h5>Early detection and mitigation of delivery risks</h5>
            </div>

            <div className="vapt-card">
              <h5>Data-driven decisions and continuous process improvement</h5>
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
            Attaining CMMI maturity demonstrates that organizational outcomes
            are guided by disciplined, repeatable, and measurable processes.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Nigeria That Benefit from CMMI
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Nigeria is ideal for organizations aiming for
            stronger operational control and competitive differentiation,
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
                    <a href="iso-9001-certification-in-nigeria">
                      ISO 9001 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-nigeria">
                      ISO 27001 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-nigeria">
                      CMMI Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-nigeria">
                      HIPAA Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-nigeria">
                      VAPT Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-nigeria">
                      GDPR Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-nigeria">
                      SOC 1 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-nigeria">
                      SOC 2 Certification in Nigeria
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Nigerian companies, CMMI maturity is critical for securing
          high-value, complex, and long-term projects.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of CMMI Certification in Nigeria
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in Nigeria enjoy
                strategic and operational benefits, such as:
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
                alt="CMMI Benefits in Nigeria"
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
            CMMI provides a framework for scaling operations while maintaining
            consistency and transparency.
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
                First Cert's CMMI Consulting Approach in Nigeria
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
                First Cert follows a structured, adaptable methodology to
                implement CMMI within Nigerian organizations:
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
          CMMI Certification Cost in Nigeria
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
                  The cost of CMMI Certification in Nigeria depends on factors
                  such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Desired maturity level (Level 2, 3, or 5)
                  </li>
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Number and complexity of ongoing projects
                  </li>
                  <li className="check">
                    Training, mentoring, and documentation requirements
                  </li>
                  <li className="check">
                    Duration and scope of the SCAMPI appraisal
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial maturity assessment to provide
                  a clear, tailored cost estimate aligned with organizational
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
                  Get CMMI Certified in Nigeria with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Nigeria,
                  helping organizations strengthen process capability and
                  achieve measurable performance improvements. Our consultants
                  integrate CMMI practices with business strategy to ensure
                  long-term value beyond certification.
                </div>

                <div className="title small-title">
                  From initial assessments to appraisal preparation and
                  post-certification process advancement, First Cert helps
                  Nigerian organizations build reliable delivery models,
                  scalable operations, and competitive advantage.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Nigeria with First
                  Cert and establish a foundation for operational discipline,
                  structured growth, and international credibility.
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

export default NigeriaCmmi;
