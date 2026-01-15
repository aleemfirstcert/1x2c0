import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/africa/south-africa/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/africa/south-africa/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SouthAfricaCmmi() {
  const benefits = [
    "Greater predictability in project outcomes and delivery timelines",
    "Improved control over cost, quality, and performance indicators",
    "Reduced operational errors, rework, and delays",
    "Stronger organizational learning and process continuity",
    "Increased confidence from global clients, investors, and partners",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Capability Assessment",
      description: "Evaluate current process maturity and improvement opportunities",
    },
    {
      number: "2",
      title: "Process Standardization",
      description: "Align workflows and practices with CMMI requirements",
    },
    {
      number: "3",
      title: "Governance Design",
      description: "Establish policies, roles, metrics, and control mechanisms",
    },
    {
      number: "4",
      title: "Team Enablement",
      description: "Train and mentor teams to adopt CMMI practices effectively",
    },
    {
      number: "5",
      title: "Readiness Reviews",
      description: "Conduct internal assessments and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Coordinate and manage formal appraisal activities",
    },
    {
      number: "7",
      title: "Post-Appraisal Improvement",
      description: "Support ongoing optimization and maturity advancement",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT services companies and software development organizations",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS providers and digital product firms",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering firms, EPC contractors, and technical consultancies",
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
      title: "Startups targeting enterprise, public sector, or international contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in South Africa | Enterprise Process Maturity &
          Performance Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain CMMI Certification in South Africa? First Cert provides comprehensive Capability Maturity Model Integration consulting, including process diagnostics, organizational standardization, capability building, and complete SCAMPI appraisal support to help organizations reach higher maturity levels with consistent and measurable results."
        />
        <meta
          name="keywords"
          content="CMMI Certification in South Africa, CMMI consultants South Africa, CMMI Level 2 South Africa, CMMI Level 3 South Africa, CMMI Level 5 South Africa, CMMI appraisal South Africa, CMMI implementation South Africa, CMMI certification cost South Africa, CMMI consulting company South Africa, SCAMPI appraisal South Africa, CMMI training South Africa, CMMI documentation South Africa, process maturity South Africa, Capability Maturity Model Integration South Africa, CMMI for IT companies South Africa, CMMI for startups South Africa, First Cert CMMI South Africa"
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
          <h1 className="main-title">CMMI Certification in South Africa</h1>
          <p className="small-desc">
            Advancing Process Discipline and Delivery Reliability
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
                alt="CMMI Certification in South Africa"
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
                <b>CMMI Certification in South Africa</b> helps organizations
                replace fragmented operational practices with well-defined,
                measurable, and continuously improving processes. As South
                African markets expand across technology services, engineering,
                manufacturing, outsourcing, and digital innovation, process
                maturity has become a key differentiator for consistent
                delivery, stakeholder confidence, and long-term scalability.
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
                <b>First Cert</b> works with organizations across South Africa
                to embed CMMI principles into everyday operations. Our
                consulting model focuses on real execution, leadership
                involvement, and sustainable improvement rather than short-term
                appraisal preparation.
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
            What CMMI Certification in South Africa Signifies
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in South Africa</b> is based on the globally
            recognized Capability Maturity Model Integration framework, which
            evaluates how effectively organizations manage, measure, and improve
            their processes across projects and enterprise functions.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A mature CMMI-aligned organization demonstrates strength in:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Clearly defined and standardized operational processes</h5>
            </div>

            <div className="vapt-card">
              <h5>Predictable project planning, estimation, and monitoring</h5>
            </div>

            <div className="vapt-card">
              <h5>Quality assurance and governance consistency</h5>
            </div>

            <div className="vapt-card">
              <h5>Proactive identification and mitigation of delivery risks</h5>
            </div>

            <div className="vapt-card">
              <h5>Performance measurement and data-driven improvement</h5>
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
            Achieving CMMI maturity confirms that business outcomes are driven
            by disciplined, repeatable, and scalable processes.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations Across South Africa That Gain Value from CMMI
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in South Africa is well suited for organizations
            seeking higher operational control and competitive positioning,
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
                    <a href="iso-9001-certification-in-south-africa">
                      ISO 9001 Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-south-africa">
                      ISO 27001 Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-south-africa">
                      CMMI Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-south-africa">
                      HIPAA Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-south-africa">
                      VAPT Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-south-africa">
                      GDPR Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-south-africa">
                      SOC 1 Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-south-africa">
                      SOC 2 Certification in South Africa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many South African organizations, CMMI maturity is a critical
          requirement for winning complex, long-term, and high-value
          engagements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Strategic Benefits of CMMI Certification in South Africa
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in South Africa
                realize strong operational and business benefits, such as:
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
                alt="CMMI Benefits in South Africa"
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
            CMMI provides a structured foundation for scaling operations without
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
                First Cert's CMMI Implementation Framework in South Africa
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
                First Cert delivers CMMI consulting services across South Africa
                through a structured yet flexible methodology:
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
          CMMI Certification Cost in South Africa
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
                  The cost of CMMI Certification in South Africa varies
                  depending on several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">
                    Organizational size and operational structure
                  </li>
                  <li className="check">
                    Number and complexity of active projects
                  </li>
                  <li className="check">
                    Training, coaching, and documentation scope
                  </li>
                  <li className="check">
                    Duration and depth of the SCAMPI appraisal
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an initial maturity evaluation to
                  provide a clear, customized cost estimate aligned with
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
                  Get CMMI Certified in South Africa with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in South
                  Africa, helping organizations build strong process capability
                  and achieve measurable performance improvement. Our consultants
                  align CMMI practices with business objectives to ensure value
                  well beyond certification.
                </div>

                <div className="title small-title">
                  From early assessments to appraisal execution and continuous
                  process enhancement, First Cert supports organizations across
                  South Africa in developing reliable delivery models, scalable
                  operations, and sustained competitive advantage.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in South Africa with
                  First Cert and establish a solid foundation for process
                  excellence, predictable growth, and international credibility.
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

export default SouthAfricaCmmi;