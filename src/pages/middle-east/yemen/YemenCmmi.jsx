import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/yemen/cmmi-img.avif";
import benefitscmmi from "../../../assets/img/country/middle-east/yemen/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function YemenCmmi() {
  const benefits = [
    "Process Stability – Clearly defined workflows improve consistency across teams.",
    "Predictable Delivery – Better planning and control reduce schedule and cost overruns.",
    "Risk Reduction – Early identification of project and operational risks.",
    "Efficiency Improvement – Optimized use of resources and reduced rework.",
    "Market Credibility – Stronger positioning for global clients and tenders.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Assessment",
      description:
        "Understand business objectives and select the target maturity level.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Evaluate current practices against CMMI model requirements.",
    },
    {
      number: "3",
      title: "Process Development",
      description:
        "Create SOPs, templates, metrics, and governance frameworks.",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Guide teams in adopting standardized practices.",
    },
    {
      number: "5",
      title: "Readiness Evaluation",
      description: "Conduct internal reviews and mock appraisals.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal",
      description:
        "Support formal appraisal by authorized CMMI Lead Appraisers.",
    },
    {
      number: "7",
      title: "Post-Appraisal Support",
      description: "Continuous improvement and maturity sustainment.",
    },
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "IT and software development companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS and technology product firms",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and outsourcing providers",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, R&D, and technical services companies",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service providers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and regulated-industry organizations",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Startups preparing for enterprise or government contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Yemen | Reliable CMMI Consulting Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain CMMI Certification in Yemen? First Cert provides expert CMMI consulting, documentation, training, and appraisal guidance to help organizations achieve CMMI Levels 2, 3, or 5 efficiently."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Yemen, CMMI consultants in Yemen, CMMI Level 2 certification Yemen, CMMI Level 3 certification Yemen, CMMI Level 5 certification Yemen, CMMI appraisal in Yemen, CMMI implementation Yemen, CMMI certification cost Yemen, CMMI consulting company Yemen, CMMI SCAMPI appraisal Yemen, CMMI training in Yemen, CMMI documentation Yemen, CMMI process improvement Yemen, Capability Maturity Model Integration Yemen, CMMI for IT companies Yemen, CMMI for startups Yemen, best CMMI consultants Yemen, affordable CMMI certification Yemen, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in Yemen</h1>
          <p class="small-desc">
            Strengthening Process Capability & Business Control
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
                alt="ISO 9001 Certification"
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
                <b>CMMI Certification in Yemen</b> enables organizations to
                build structured, measurable, and repeatable processes that
                improve performance, delivery accuracy, and operational control.
                For businesses aiming to scale services, meet international
                client expectations, or participate in competitive contracts,
                CMMI provides a proven framework for process excellence.
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
                <a href="/">First Cert</a> supports organizations in Yemen with
                end-to-end CMMI consulting services, helping them adopt
                best-practice process models that enhance efficiency, reduce
                risks, and improve predictability. Our approach focuses on
                practical implementation aligned with real business operations
                rather than theory-driven compliance.
              </p>
            </div>

            <EnquiryForm />
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
            What is CMMI Certification in Yemen?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Yemen</b> is based on the globally
            recognized <b>Capability Maturity Model Integration</b>, governed by
            ISACA. It evaluates how effectively an organization manages its
            projects, services, and operational workflows:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Process governance and consistency</h5>
            </div>

            <div class="vapt-card">
              <h5>Project planning, tracking, and execution</h5>
            </div>

            <div class="vapt-card">
              <h5>Product and service quality</h5>
            </div>

            <div class="vapt-card">
              <h5>Risk management and performance measurement</h5>
            </div>

            <div class="vapt-card">
              <h5>Organizational maturity and continuous improvement</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400", textAlign: "center" }}
          >
            By achieving CMMI certification, organizations in Yemen demonstrate
            their ability to deliver reliable outcomes, manage complexity, and
            maintain operational discipline required by international clients
            and stakeholders.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement CMMI in Yemen?
          </h2>

          <p className="text-center section-sub mb-5">
            <b>CMMI Certification in Yemen</b> is ideal for organizations
            seeking structured growth and long-term scalability, including:
          </p>

          <div className="row g-4">
            {/* LEFT: HIPAA Cards */}
            <div className="col-lg-9">
              <div className="row g-4">
                {hipaaData.map((item, index) => (
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
                <h5>Our Experties</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-yemen">
                      ISO 9001 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-yemen">
                      ISO 27001 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-yemen">
                      CMMI Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-yemen">
                      HIPAA Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-yemen">
                      VAPT Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-yemen">
                      GDPR Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-yemen">
                      SOC 1 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-yemen">
                      SOC 2 Certification in Yemen
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          CMMI certification enables organizations in Yemen to operate with
          greater control, transparency, and performance maturity.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting CMMI Certification in Yemen
              </h1>
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
                alt="cmmi Benefits"
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
            With <a href="/">First Cert</a>, CMMI Certification in Yemen becomes
            a strategic investment rather than a compliance burden.
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
                CMMI Certification in Yemen – Simplified Process with First Cert
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
                First Cert follows a structured and result-oriented CMMI
                implementation methodology:
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
          How Much Does CMMI Certification Cost in Yemen?
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
                  The cost of CMMI Certification in Yemen varies based on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">Target maturity level (2, 3, or 5)</li>
                  <li className="check">Organization size and Structure</li>
                  <li className="check">Number and complexity of projects</li>
                  <li className="check">Documentation and training scope</li>
                  <li className="check">SCAMPI appraisal type and duration</li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert provides flexible and customized CMMI consulting
                  packages based on your business goals and readiness level.
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
                  Get CMMI Certification in Yemen with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner for
                  organizations in Yemen seeking measurable improvement and
                  global process credibility. We help businesses build scalable,
                  disciplined, and performance-driven process frameworks aligned
                  with international standards
                </div>
                <div className="title small-title">
                  Our experienced consultants ensure a smooth and transparent
                  CMMI certification journey—from assessment and documentation
                  to appraisal success—while focusing on real operational value
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your CMMI
                  Certification journey in Yemen with First Cert and build a
                  strong foundation for sustainable growth, delivery excellence,
                  and international competitiveness.
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

export default YemenCmmi;
