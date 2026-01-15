import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/iran/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/middle-east/iran/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IranCmmi() {
  const benefits = [
    "Higher predictability in project delivery timelines",
    "Improved visibility into cost, quality, and performance metrics",
    "Reduction in rework, defects, and execution uncertainty",
    "Stronger organizational learning and knowledge continuity",
    "Increased confidence among global clients and institutional stakeholders",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Diagnostics",
      description: "Assess current capability levels and improvement gaps",
    },
    {
      number: "2",
      title: "Process Mapping & Alignment",
      description: "Align existing workflows with CMMI requirements",
    },
    {
      number: "3",
      title: "Framework Development",
      description: "Design SOPs, governance models, and measurement systems",
    },
    {
      number: "4",
      title: "Team Enablement",
      description: "Coach teams to apply CMMI practices in active projects",
    },
    {
      number: "5",
      title: "Internal Readiness Reviews",
      description: "Conduct gap analysis and simulated appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Coordination",
      description: "Support and manage formal appraisal activities",
    },
    {
      number: "7",
      title: "Ongoing Optimization",
      description: "Assist with post-appraisal maturity enhancement",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development and IT service organizations",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS providers and digital solution companies",
    },
    {
      icon: "bi bi-headset",
      title: "BPO, KPO, and shared service operations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, EPC, and technical consulting firms",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service providers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and industrial enterprises",
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
          CMMI Certification in Iran | Process Maturity Advancement & Appraisal
          Support – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve CMMI Certification in Iran? First Cert provides end-to-end CMMI consulting solutions, covering maturity diagnostics, process engineering, workforce enablement, and complete appraisal preparation to help organizations successfully reach CMMI Maturity Levels 2, 3, or 5 with structured guidance and measurable outcomes."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Iran, CMMI consultants Iran, CMMI Level 2 Iran, CMMI Level 3 Iran, CMMI Level 5 Iran, CMMI appraisal Iran, CMMI implementation Iran, CMMI certification cost Iran, CMMI consulting company Iran, SCAMPI appraisal Iran, CMMI training Iran, CMMI documentation Iran, process maturity Iran, Capability Maturity Model Integration Iran, CMMI for IT companies Iran, CMMI for startups Iran, First Cert CMMI Iran"
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
          <h1 className="main-title">CMMI Certification in Iran</h1>
          <p className="small-desc">
            Enabling Predictable Performance and Process Control
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
                alt="CMMI Certification in Iran"
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
                <b>CMMI Certification in Iran</b> empowers organizations to
                build consistent, well-governed, and continuously improving
                operational processes. As Iranian enterprises grow across
                sectors such as IT services, engineering, telecom,
                manufacturing, public infrastructure, and outsourcing, process
                maturity has become a critical factor for operational
                reliability and client trust.
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
                <a href="/">First Cert</a> partners with organizations across
                Iran to implement CMMI frameworks that integrate seamlessly into
                real-world operations. Our approach prioritizes sustainable
                execution excellence rather than short-term appraisal readiness
                alone.
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
            Understanding CMMI Certification in Iran
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Iran</b> is based on the internationally
            recognized Capability Maturity Model Integration framework, overseen
            by ISACA. The appraisal measures how effectively an organization
            plans, executes, monitors, and enhances its processes across
            projects, services, and enterprise functions.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Key capability areas strengthened through CMMI include:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Defined and standardized organizational processes</h5>
            </div>

            <div className="vapt-card">
              <h5>Accurate project estimation and performance tracking</h5>
            </div>

            <div className="vapt-card">
              <h5>Objective quality management and compliance controls</h5>
            </div>

            <div className="vapt-card">
              <h5>Early risk identification and mitigation mechanisms</h5>
            </div>

            <div className="vapt-card">
              <h5>Data-driven decision-making and continuous improvement</h5>
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
            Achieving CMMI maturity signals that organizational success is
            driven by structured, repeatable, and measurable practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Pursue CMMI Certification in Iran
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Iran is ideal for organizations aiming to
            improve delivery maturity and market credibility, including:
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
                    <a href="iso-9001-certification-in-iran">
                      ISO 9001 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-iran">
                      ISO 27001 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-iran">
                      CMMI Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-iran">
                      HIPAA Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-iran">
                      VAPT Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-iran">
                      GDPR Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-iran">
                      SOC 1 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-iran">
                      SOC 2 Certification in Iran
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many organizations in Iran, CMMI maturity plays a decisive role in
          securing high-value and long-term engagements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Organizational Benefits of CMMI Certification in Iran
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in Iran experience
                tangible operational and strategic gains, such as:
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
                alt="CMMI Benefits in Iran"
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
            CMMI enables scalable growth without sacrificing control or
            consistency.
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
                First Cert's CMMI Consulting Approach in Iran
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
                First Cert delivers a practical and adaptable CMMI
                implementation methodology tailored to organizational contexts
                in Iran:
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
          CMMI Certification Cost in Iran
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
                  The cost of CMMI Certification in Iran varies based on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Desired maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">
                    Organizational size and operational scope
                  </li>
                  <li className="check">
                    Number and complexity of ongoing projects
                  </li>
                  <li className="check">
                    Required training, mentoring, and documentation efforts
                  </li>
                  <li className="check">
                    SCAMPI appraisal duration and resources
                  </li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a detailed maturity assessment to
                  provide a transparent, customized cost structure aligned with
                  business objectives.
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
                  Achieve CMMI Certification in Iran with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable CMMI consulting partner in Iran,
                  helping organizations strengthen process capability and
                  achieve sustainable performance improvement. Our consultants
                  align CMMI practices with strategic goals to deliver value
                  that extends far beyond certification.
                </div>

                <div className="title small-title">
                  From initial assessment through appraisal execution and
                  continuous maturity growth, First Cert supports organizations
                  in Iran in building predictable delivery models, scalable
                  operations, and lasting competitive advantage.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Iran with First Cert
                  and establish a strong foundation for operational excellence,
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

export default IranCmmi;
