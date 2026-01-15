import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/bahrain/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/middle-east/bahrain/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function BahrainCmmi() {
  const benefits = [
    "Greater predictability in project execution and delivery timelines",
    "Enhanced visibility into cost, quality, and performance indicators",
    "Reduced defects, rework, and operational uncertainty",
    "Improved knowledge retention and process consistency",
    "Increased credibility with global clients and institutional stakeholders",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Baseline Assessment",
      description:
        "Identify current capability levels and improvement priorities",
    },
    {
      number: "2",
      title: "Process Gap Evaluation",
      description: "Align existing practices with CMMI model requirements",
    },
    {
      number: "3",
      title: "Framework Development",
      description: "Design SOPs, workflows, metrics, and governance mechanisms",
    },
    {
      number: "4",
      title: "Team Enablement & Coaching",
      description: "Support real-time adoption within active projects",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Conduct internal reviews and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Coordination",
      description: "Manage and support formal appraisal activities",
    },
    {
      number: "7",
      title: "Post-Appraisal Enhancement",
      description: "Drive continual improvement and maturity progression",
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
      title: "Manufacturing companies with complex workflows",
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
          CMMI Certification in Bahrain | Advanced Process Maturity & Appraisal
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain CMMI Certification in Bahrain? First Cert provides end-to-end CMMI consulting services, including process maturity assessment, capability enhancement, team enablement, and complete appraisal preparation to help organizations achieve CMMI Maturity Levels 2, 3, or 5 with confidence."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Bahrain, CMMI consultants Bahrain, CMMI Level 2 Bahrain, CMMI Level 3 Bahrain, CMMI Level 5 Bahrain, CMMI appraisal Bahrain, CMMI implementation Bahrain, CMMI certification cost Bahrain, CMMI consulting firm Bahrain, SCAMPI appraisal Bahrain, CMMI training Bahrain, CMMI documentation Bahrain, process maturity Bahrain, Capability Maturity Model Integration Bahrain, CMMI for IT companies Bahrain, CMMI for startups Bahrain, First Cert CMMI Bahrain"
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
          <h1 className="main-title">CMMI Certification in Bahrain</h1>
          <p className="small-desc">
            Enabling Predictable and High-Performance Operations
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
                alt="CMMI Certification in Bahrain"
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
                <b>CMMI Certification in Bahrain</b> supports organizations in
                building structured, data-driven, and continuously improving
                processes that enhance delivery reliability and business
                scalability. As Bahrain strengthens its position in technology
                services, financial systems, engineering solutions, and digital
                transformation initiatives, organizations are increasingly
                expected to demonstrate mature and well-governed operational
                practices.
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
                <a href="/">First Cert</a> collaborates with organizations
                across Bahrain to embed CMMI frameworks that reflect real
                operational needs. Our focus is on driving behavioral adoption,
                measurable outcomes, and sustainable maturity rather than
                compliance-focused documentation alone.
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
            Overview of CMMI Certification in Bahrain
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Bahrain</b> is based on the internationally
            recognized Capability Maturity Model Integration framework governed
            by ISACA. The appraisal assesses how effectively an organization
            defines, manages, measures, and improves its processes to
            consistently deliver quality results across projects and services.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The CMMI model enhances organizational strength in areas such as:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Standardization and governance of enterprise-wide processes
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Accurate project estimation, planning, and performance control
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Objective quality assurance and metrics-driven decision-making
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Proactive risk identification and mitigation</h5>
            </div>

            <div className="vapt-card">
              <h5>Continuous process optimization and maturity advancement</h5>
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
            Achieving CMMI certification confirms that performance is guided by
            repeatable, measurable, and disciplined operational practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Bahrain That Should Consider CMMI
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Bahrain is highly valuable for organizations
            aiming to improve execution maturity and strengthen stakeholder
            confidence, including:
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
                    <a href="iso-9001-certification-in-bahrain">
                      ISO 9001 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-bahrain">
                      ISO 27001 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-bahrain">
                      CMMI Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-bahrain">
                      HIPAA Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-bahrain">
                      VAPT Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-bahrain">
                      GDPR Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-bahrain">
                      SOC 1 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-bahrain">
                      SOC 2 Certification in Bahrain
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Bahrain-based organizations, CMMI serves as a strategic
          differentiator in competitive bids and long-term partnerships.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Strategic Benefits of CMMI Certification in Bahrain
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in Bahrain
                experience significant operational and business advantages, such
                as:
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
                alt="CMMI Benefits in Bahrain"
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
            CMMI converts process maturity into a platform for scalable growth
            and long-term performance excellence.
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
                First Cert's CMMI Consulting Approach in Bahrain
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
                First Cert follows a structured yet adaptable CMMI
                implementation model focused on lasting value creation:
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
          CMMI Certification Cost in Bahrain
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
                  The cost of CMMI Certification in Bahrain is influenced by
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">
                    Organizational size and operational complexity
                  </li>
                  <li className="check">
                    Number and nature of ongoing projects
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
                  First Cert conducts an initial maturity review to provide a
                  transparent and customized cost proposal aligned with your
                  strategic objectives.
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
                  Achieve CMMI Certification in Bahrain with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Bahrain,
                  helping organizations build resilient process capability and
                  achieve measurable operational excellence. Our consultants
                  ensure that CMMI practices align with business goals, enabling
                  benefits that extend far beyond certification.
                </div>

                <div className="title small-title">
                  From initial assessment through appraisal support and ongoing
                  maturity advancement, First Cert ensures your CMMI journey in
                  Bahrain delivers consistency, scalability, and competitive
                  advantage.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Bahrain with First
                  Cert and establish a strong foundation for predictable
                  delivery, sustainable growth, and global competitiveness.
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

export default BahrainCmmi;
