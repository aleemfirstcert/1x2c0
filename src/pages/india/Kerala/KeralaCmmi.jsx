import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/india/kerala/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/india/kerala/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function KeralaCmmi() {
  const benefits = [
    "Improved project predictability and delivery quality",
    "Better utilization of resources and budgets",
    "Lower operational risk and fewer process failures",
    "Stronger collaboration and documentation practices",
    "Increased trust from customers and partners",
    "A framework for sustainable growth and expansion",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Evaluate Current Maturity",
      description: "Assess current practices and identify operational gaps",
    },
    {
      number: "2",
      title: "Process Design & Alignment",
      description: "Design workflows aligned with CMMI standards",
    },
    {
      number: "3",
      title: "Governance & Metrics Setup",
      description: "Establish metrics, governance, and accountability",
    },
    {
      number: "4",
      title: "Team Training & Enablement",
      description: "Train teams on process execution and controls",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Perform readiness checks and internal assessments",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Support formal appraisals and evaluations",
    },
    {
      number: "7",
      title: "Continual Improvement",
      description: "Guide ongoing refinement after certification",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT services, SaaS, and software development firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Digital solution and technology consulting providers",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and outsourcing companies",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering and technical consulting organizations",
    },
    {
      icon: "bi bi-hdd-network",
      title: "Managed service and system integration companies",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and product development units",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Growing startups seeking enterprise clients",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Kerala | Process Improvement & Advisory – First
          Cert
        </title>
        <meta
          name="description"
          content="CMMI Certification in Kerala by First Cert helps organizations improve process maturity through gap analysis, team mentoring, and SCAMPI-ready frameworks for stable growth."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Kerala, CMMI consultants Kerala, CMMI Level 2 Kerala, CMMI Level 3 Kerala, CMMI Level 5 Kerala, CMMI appraisal Kerala, CMMI implementation Kerala, CMMI certification cost Kerala, CMMI consulting company Kerala, SCAMPI appraisal Kerala, CMMI training Kerala, CMMI documentation Kerala, process maturity Kerala, Capability Maturity Model Integration Kerala, CMMI for IT companies Kerala, CMMI for startups Kerala, First Cert CMMI Kerala"
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
          <h1 className="main-title">CMMI Certification in Kerala</h1>
          <p className="small-desc">Advancing Business Process Maturity</p>
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
                alt="CMMI Certification in Kerala"
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
                <b>CMMI Certification in Kerala</b> enables organizations to
                standardize operations, control project execution, and deliver
                predictable business outcomes. As Kerala grows across IT
                services, software development, engineering, outsourcing, and
                digital enterprises, strong process discipline has become
                essential for long-term competitiveness.
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
                <b>First Cert</b> supports Kerala organizations by integrating
                CMMI practices into daily workflows, ensuring improvements are
                practical, measurable, and aligned with business goals.
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
            What CMMI Certification in Kerala Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Kerala</b> verifies that an organization
            follows structured and performance-driven processes for managing
            projects, resources, and quality. It evaluates how effectively teams
            plan, execute, monitor, and improve their work.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A mature CMMI environment demonstrates:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Clearly defined and repeatable operational processes</h5>
            </div>

            <div className="vapt-card">
              <h5>Accurate planning and performance tracking</h5>
            </div>

            <div className="vapt-card">
              <h5>Effective governance and quality management</h5>
            </div>

            <div className="vapt-card">
              <h5>Data-based decision making</h5>
            </div>

            <div className="vapt-card">
              <h5>Ongoing refinement of business practices</h5>
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
            Certification shows that delivery outcomes are stable and scalable.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Kerala That Benefit from CMMI
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Kerala is valuable for:
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
                    <a href="iso-9001-certification-in-kerala">
                      ISO 9001 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-kerala">
                      ISO 27001 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-kerala">
                      CMMI Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-kerala">
                      HIPAA Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-kerala">
                      VAPT Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-kerala">
                      GDPR Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-kerala">
                      SOC 1 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-kerala">
                      SOC 2 Certification in Kerala
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          These organizations rely on strong processes to ensure consistent
          service and client satisfaction.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of CMMI Certification in Kerala
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations adopting CMMI in Kerala experience:
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
                alt="CMMI Benefits in Kerala"
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
            CMMI helps transform operations into well-governed, high-performing
            systems.
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
                First Cert's CMMI Consulting Framework in Kerala
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
                First Cert delivers CMMI consulting in Kerala through a
                structured and business-focused model:
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
          CMMI Certification Cost in Kerala
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
                  The cost of CMMI Certification in Kerala varies based on:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, 3, or 5)
                  </li>
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">Project volume and scope</li>
                  <li className="check">
                    Documentation and training requirements
                  </li>
                  <li className="check">SCAMPI appraisal scope and duration</li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a detailed maturity review to provide a
                  clear and customized cost plan.
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
                  Get CMMI Certified in Kerala with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Kerala,
                  helping organizations achieve measurable process improvement
                  and successful SCAMPI appraisals. Our experts focus on
                  practical implementation, team enablement, and long-term
                  operational excellence.
                </div>

                <div className="title small-title">
                  From initial evaluation to SCAMPI appraisal and continuous
                  improvement, First Cert enables Kerala-based organizations to
                  build reliable delivery models, scalable operations, and
                  strong global credibility.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Kerala with First
                  Cert and build a foundation for consistent delivery, scalable
                  growth, and global recognition.
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

export default KeralaCmmi;
