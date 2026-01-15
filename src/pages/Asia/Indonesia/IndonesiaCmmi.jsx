import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/asia/indonesia/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/asia/indonesia/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IndonesiaCmmi() {
  const benefits = [
    "Improved consistency in project and service delivery",
    "Greater visibility into cost, schedule, and resource performance",
    "Reduced operational risk and rework",
    "Stronger organizational learning and process reuse",
    "Enhanced credibility with global clients and stakeholders",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Capability Baseline Review",
      description: "Determine current maturity and improvement priorities.",
    },
    {
      number: "2",
      title: "Detailed Gap Assessment",
      description: "Map existing practices against CMMI model requirements.",
    },
    {
      number: "3",
      title: "Process Architecture Design",
      description:
        "Develop SOPs, workflows, metrics, and governance structures.",
    },
    {
      number: "4",
      title: "Implementation & Mentoring",
      description: "Support teams in adopting and applying new processes.",
    },
    {
      number: "5",
      title: "Readiness & Mock Appraisals",
      description: "Validate compliance and address gaps before appraisal.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Coordination",
      description: "Assist throughout the formal appraisal process.",
    },
    {
      number: "7",
      title: "Sustainment & Optimization",
      description: "Support ongoing maturity growth post-certification.",
    },
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS and digital product companies",
    },
    {
      icon: "bi bi-headset",
      title: "BPO, KPO, and shared service centers",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, architecture, and technical consulting firms",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service providers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and regulated industry players",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Startups preparing for enterprise-scale or government contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Indonesia | Professional CMMI Consulting &
          Appraisal Services – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain CMMI Certification in Indonesia? First Cert delivers expert CMMI advisory, process maturity enhancement, team enablement, and appraisal preparation support to help organizations successfully achieve CMMI Maturity Levels 2, 3, or 5."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Indonesia, CMMI consultants in Indonesia, CMMI Level 2 certification Indonesia, CMMI Level 3 certification Indonesia, CMMI Level 5 certification Indonesia, CMMI appraisal in Indonesia, CMMI implementation Indonesia, CMMI certification cost Indonesia, CMMI consulting company Indonesia, CMMI SCAMPI appraisal Indonesia, CMMI training in Indonesia, CMMI documentation Indonesia, CMMI process improvement Indonesia, Capability Maturity Model Integration Indonesia, CMMI for IT companies Indonesia, CMMI for startups Indonesia, best CMMI consultants Indonesia, affordable CMMI certification Indonesia, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in Indonesia</h1>
          <p class="small-desc">
            Driving Process Excellence and Predictable Outcomes
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
                <b>CMMI Certification in Indonesia</b> enables organizations to
                design mature, consistent, and data-driven processes that
                support reliable delivery and scalable business growth. As
                Indonesian enterprises expand into regional and global markets,
                clients increasingly expect evidence of disciplined process
                management and predictable execution.
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
                <a href="/">First Cert</a> works with organizations throughout
                Indonesia to embed CMMI practices that fit their operational
                culture and strategic direction. Our consulting approach focuses
                on real-world adoption, measurable performance improvement, and
                long-term sustainability—far beyond basic compliance.
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
            What CMMI Certification in Indonesia Means for Your Organization
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Indonesia</b> is based on the Capability
            Maturity Model Integration framework governed by ISACA. The
            appraisal evaluates how well an organization plans, manages,
            measures, and improves its processes to consistently achieve quality
            outcomes. The CMMI model emphasizes improvement in:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Enterprise-wide process standardization</h5>
            </div>

            <div class="vapt-card">
              <h5>Accurate project planning and progress tracking</h5>
            </div>

            <div class="vapt-card">
              <h5>Quality management and performance analytics</h5>
            </div>

            <div class="vapt-card">
              <h5>Proactive risk identification and mitigation</h5>
            </div>

            <div class="vapt-card">
              <h5>Continuous learning and maturity progression</h5>
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
            Organizations That Benefit from CMMI Certification in Indonesia
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Indonesia is valuable for organizations aiming
            to strengthen execution discipline and customer confidence,
            including:
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
                    <a href="iso-9001-certification-in-indonesia">
                      ISO 9001 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-indonesia">
                      ISO 27001 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-indonesia">
                      CMMI Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-indonesia">
                      HIPAA Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-indonesia">
                      VAPT Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-indonesia">
                      GDPR Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-indonesia">
                      SOC 1 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-indonesia">
                      SOC 2 Certification in Indonesia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          For many Indonesian companies, CMMI serves as a differentiator in
          competitive bids and long-term partnerships.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Strategic Advantages of CMMI Certification in Indonesia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving CMMI Certification in Indonesia realize
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
                CMMI Implementation Approach in Indonesia with First Cert
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
          CMMI Certification Cost in Indonesia?
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
                  The cost of CMMI Certification in Indonesia varies based on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Desired maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">Organization size and Structure</li>
                  <li className="check">
                    Volume and diversity of active projects
                  </li>
                  <li className="check">
                    Training, documentation, and coaching scope
                  </li>
                  <li className="check">SCAMPI appraisal type and duration</li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert provides transparent and customized pricing after
                  assessing your organization’s readiness and goals.
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
                  Achieve CMMI Certification in Indonesia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Indonesia,
                  helping organizations build strong process capability and
                  achieve sustainable performance improvements. Our consultants
                  align CMMI practices with business strategy to ensure value
                  beyond certification.
                </div>
                <div className="title small-title">
                  From initial assessment to appraisal and long-term maturity
                  sustainment, First Cert ensures your CMMI journey delivers
                  real operational impact.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your CMMI
                  Certification journey in the Indonesia with First Cert and
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

export default IndonesiaCmmi;
