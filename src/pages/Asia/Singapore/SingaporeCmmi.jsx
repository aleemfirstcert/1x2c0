import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/asia/singapore/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/asia/singapore/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SingaporeCmmi() {
  const benefits = [
    "Standardized Workflows – Standardized workflows across teams and departments",
    "Improved Planning Accuracy – Improved accuracy in project planning and execution",
    "Reduced Individual Dependency – Reduced dependency on individuals through defined processes",
    "Better Performance Visibility – Better visibility into performance and decision-making",
    "Stronger Market Credibility – Stronger credibility in competitive bids and partnerships",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Discovery",
      description:
        "Understand business goals and select the target maturity level.",
    },
    {
      number: "2",
      title: "Practice Assessment",
      description: "Review current processes against CMMI expectations.",
    },
    {
      number: "3",
      title: "Process Architecture Design",
      description: "Build policies, SOPs, templates, and metrics.",
    },
    {
      number: "4",
      title: "Deployment & Enablement",
      description: "Coach teams on process adoption and usage.",
    },
    {
      number: "5",
      title: "Internal Readiness Checks",
      description: "Perform mock evaluations and improvements.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Coordinate formal appraisal activities.",
    },
    {
      number: "7",
      title: "Maturity Sustainment",
      description: "Support ongoing optimization and performance tracking.",
    },
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "IT services and software engineering companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS and digital product organizations",
    },
    {
      icon: "bi bi-headset",
      title: "Business process outsourcing and shared service centers",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, R&D, and technical consulting firms",
    },
    {
      icon: "bi bi-hdd-network",
      title: "Managed service providers and system integrators",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and compliance-driven industries",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Startups targeting large enterprise or government contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Singapore | Professional CMMI Consulting &
          Appraisal Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to secure CMMI Certification in Singapore? First Cert provides expert CMMI consulting, process transformation support, team enablement, and appraisal preparation to help organizations achieve CMMI Maturity Levels 2, 3, or 5 with confidence."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Singapore, CMMI consultants in Singapore, CMMI Level 2 certification Singapore, CMMI Level 3 certification Singapore, CMMI Level 5 certification Singapore, CMMI appraisal in Singapore, CMMI implementation Singapore, CMMI certification cost Singapore, CMMI consulting company Singapore, CMMI SCAMPI appraisal Singapore, CMMI training in Singapore, CMMI documentation Singapore, CMMI process improvement Singapore, Capability Maturity Model Integration Singapore, CMMI for IT companies Singapore, CMMI for startups Singapore, best CMMI consultants Singapore, affordable CMMI certification Singapore, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in Singapore</h1>
          <p class="small-desc">
            Strengthening Process Maturity & Execution Excellence
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
                <b>CMMI Certification in Singapore</b> enables organizations to
                build disciplined, data-driven processes that improve delivery
                reliability and operational performance. In Singapore’s
                innovation-led and globally connected business ecosystem,
                organizations are expected to demonstrate strong governance,
                predictable execution, and continuous improvement.
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
                <a href="/">First Cert</a> works with organizations in Singapore
                to implement CMMI frameworks that are tailored to operational
                realities. Our focus is on creating usable, scalable processes
                that support growth, quality, and long-term competitiveness.
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
            Overview of CMMI Certification in Singapore
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Singapore</b> is based on the globally
            adopted Capability Maturity Model Integration framework, overseen by
            ISACA. The model evaluates how effectively an organization plans,
            manages, measures, and improves its processes across projects and
            services. CMMI supports organizations in improving:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Process definition and organizational consistency</h5>
            </div>

            <div class="vapt-card">
              <h5>Project management and delivery governance</h5>
            </div>

            <div class="vapt-card">
              <h5>Quality assurance and performance metrics</h5>
            </div>

            <div class="vapt-card">
              <h5>Risk identification and performance tracking</h5>
            </div>

            <div class="vapt-card">
              <h5>Continuous improvement and maturity progression</h5>
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
            Achieving CMMI certification signals that an organization operates
            with structured management practices and predictable outcomes.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Adopt CMMI in Singapore?
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI implementation is valuable for Singapore-based organizations
            aiming to scale operations, improve execution, or meet enterprise
            expectations, including:
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
                    <a href="iso-9001-certification-in-singapore">
                      ISO 9001 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-singapore">
                      ISO 27001 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-singapore">
                      CMMI Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-singapore">
                      HIPAA Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-singapore">
                      VAPT Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-singapore">
                      GDPR Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-singapore">
                      SOC 1 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-singapore">
                      SOC 2 Certification in Singapore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          CMMI helps Singapore organizations reduce delivery risks and
          demonstrate process reliability to global clients.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of CMMI Certification in Singapore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in Singapore gain
                significant operational and strategic advantages:
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
            CMMI transforms process maturity into a measurable business asset.
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
                CMMI Implementation Approach in Singapore with First Cert
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
          How Much Does CMMI Certification Cost in Singapore?
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
                  The cost of CMMI Certification in Singapore varies based on
                  factors such as:
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
                  First Cert offers flexible and transparent CMMI consulting
                  packages aligned with your readiness level and business
                  strategy.
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
                  Achieve CMMI Certification in Singapore with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted CMMI consulting firm in the Singapore,
                  helping organizations strengthen process capability and
                  achieve sustainable performance improvements. Our consultants
                  work closely with leadership and delivery teams to ensure
                  effective implementation and appraisal success.
                </div>
                <div className="title small-title">
                  From readiness assessment to appraisal and continuous maturity
                  enhancement, First Cert ensures your CMMI journey delivers
                  sustainable results.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your CMMI
                  Certification journey in the Singapore with First Cert and
                  establish a strong foundation for scalable growth, delivery
                  excellence, and international competitiveness.
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

export default SingaporeCmmi;
