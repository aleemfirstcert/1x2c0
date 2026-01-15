import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/asia/thailand/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/asia/thailand/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ThailandCmmi() {
  const benefits = [
    "Greater consistency in project execution and service delivery",
    "Improved visibility into cost, schedule, and performance metrics",
    "Lower levels of rework, defects, and delivery risk",
    "Stronger knowledge retention and process reuse",
    "Increased trust from global customers and stakeholders",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Assessment",
      description: "Identify current capability levels and improvement goals.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Align existing practices with CMMI model expectations.",
    },
    {
      number: "3",
      title: "Process Framework Design",
      description: "Build SOPs, workflows, metrics, and governance models.",
    },
    {
      number: "4",
      title: "Adoption & Coaching",
      description:
        "Mentor teams to apply processes effectively in real projects.",
    },
    {
      number: "5",
      title: "Readiness Reviews",
      description: "Conduct mock appraisals and compliance validation.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Coordinate and assist throughout the formal appraisal.",
    },
    {
      number: "7",
      title: "Post-Appraisal Sustainment",
      description: "Support ongoing optimization and maturity growth.",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development firms and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS companies and digital product organizations",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service operations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, design, and technical consulting firms",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service providers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing organizations with complex processes",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title:
        "Startups preparing for enterprise clients or public-sector contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Thailand | Expert Process Maturity Consulting &
          Appraisal Support – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve CMMI Certification in Thailand? First Cert offers comprehensive CMMI consulting services, including process maturity development, capability enhancement, team coaching, and end-to-end appraisal preparation to help organizations attain CMMI Maturity Levels 2, 3, or 5 with confidence."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Thailand, CMMI consultants Thailand, CMMI Level 2 Thailand, CMMI Level 3 Thailand, CMMI Level 5 Thailand, CMMI appraisal Thailand, CMMI implementation Thailand, CMMI certification cost Thailand, CMMI consulting firm Thailand, SCAMPI appraisal Thailand, CMMI training Thailand, CMMI documentation Thailand, process maturity Thailand, Capability Maturity Model Integration Thailand, CMMI for IT companies Thailand, CMMI for startups Thailand, First Cert CMMI Thailand"
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
          <h1 class="main-title">CMMI Certification in Thailand</h1>
          <p class="small-desc">
            Strengthening Process Discipline and Delivery Reliability
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
                alt="CMMI Certification in Thailand"
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
                <b>CMMI Certification in Thailand</b> helps organizations
                establish structured, repeatable, and performance-driven
                processes that support predictable outcomes and sustainable
                growth. As Thai companies expand into international markets and
                compete for enterprise and government projects, demonstrating
                strong process governance has become a key business requirement.
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
                Thailand to implement CMMI frameworks that align with their
                business strategy and operational realities. Our focus is on
                practical execution, cultural adoption, and measurable
                improvement—not just meeting appraisal criteria.
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
            Understanding CMMI Certification in Thailand
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Thailand</b> is based on the globally
            recognized Capability Maturity Model Integration framework,
            administered by ISACA. The appraisal assesses how effectively an
            organization defines, manages, measures, and continuously improves
            its processes to deliver consistent quality and performance.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The CMMI model promotes excellence in areas such as:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Organization-wide process consistency and governance</h5>
            </div>

            <div class="vapt-card">
              <h5>Accurate planning, estimation, and project monitoring</h5>
            </div>

            <div class="vapt-card">
              <h5>Quality assurance and performance measurement</h5>
            </div>

            <div class="vapt-card">
              <h5>Risk management and issue prevention</h5>
            </div>

            <div class="vapt-card">
              <h5>Continuous improvement and maturity evolution</h5>
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
            Achieving CMMI certification confirms that decision-making and
            delivery are guided by data, discipline, and proven practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Pursue CMMI Certification in Thailand
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Thailand is beneficial for organizations
            seeking higher execution maturity and stronger client confidence,
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
                    <a href="iso-9001-certification-in-thailand">
                      ISO 9001 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-thailand">
                      ISO 27001 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-thailand">
                      CMMI Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-thailand">
                      HIPAA Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-thailand">
                      VAPT Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-thailand">
                      GDPR Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-thailand">
                      SOC 1 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-thailand">
                      SOC 2 Certification in Thailand
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many organizations in Thailand, CMMI acts as a differentiator in
          competitive tenders and long-term strategic partnerships.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of CMMI Certification in Thailand
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain CMMI Certification in Thailand gain
                tangible operational and strategic advantages:
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
                alt="CMMI Benefits in Thailand"
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
            CMMI transforms process maturity into a foundation for scalable and
            resilient business operations.
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
                First Cert's CMMI Implementation Approach in Thailand
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
                First Cert applies a structured yet flexible CMMI implementation
                methodology designed for lasting impact:
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
          CMMI Certification Cost in Thailand
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
                  The cost of CMMI Certification in Thailand varies depending on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">
                    Organization size and structural complexity
                  </li>
                  <li className="check">
                    Number and nature of active projects
                  </li>
                  <li className="check">
                    Scope of training, documentation, and mentoring
                  </li>
                  <li className="check">
                    SCAMPI appraisal duration and effort
                  </li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial readiness review to provide a
                  clear, tailored cost proposal aligned with your business
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
                  Get CMMI Certification in Thailand with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable CMMI consulting partner in Thailand,
                  supporting organizations in building strong process capability
                  and achieving sustainable operational excellence. Our
                  consultants align CMMI practices with business priorities to
                  deliver value well beyond certification.
                </div>

                <div className="title small-title">
                  From baseline assessment to appraisal support and continuous
                  maturity advancement, First Cert ensures your CMMI journey in
                  Thailand delivers measurable results and long-term success.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your CMMI Certification journey in Thailand with First
                  Cert and build a solid foundation for predictable delivery,
                  scalable growth, and global competitiveness.
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

export default ThailandCmmi;
