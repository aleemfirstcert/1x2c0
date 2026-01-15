import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/UAE/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/middle-east/UAE/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function UaeCmmi() {
  const benefits = [
    "Process Consistency – Standardized practices across teams and projects",
    "Reliable Project Outcomes – Improved schedule and cost predictability",
    "Risk Management – Early identification and mitigation of execution risks",
    "Operational Efficiency – Reduced rework and optimized resource utilization",
    "Market Recognition – Enhanced credibility with global clients and partners",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Business & Maturity Assessment",
      description: "Identify goals and target maturity level.",
    },
    {
      number: "2",
      title: "Gap Evaluation",
      description: "Analyze existing practices against CMMI requirements.",
    },
    {
      number: "3",
      title: "Process Framework Design",
      description: "Develop SOPs, templates, metrics, and governance.",
    },
    {
      number: "4",
      title: "Implementation & Coaching",
      description: "Guide teams through process adoption.",
    },
    {
      number: "5",
      title: "Internal Readiness Review",
      description: "Conduct mock appraisals and corrective actions.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Coordinate and support formal CMMI appraisal.",
    },
    {
      number: "7",
      title: "Post-Appraisal Optimization",
      description: "Sustain maturity and drive ongoing improvement.",
    },
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development and IT services companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS and technology product organizations",
    },
    {
      icon: "bi bi-headset",
      title: "BPO, KPO, and outsourcing firms",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, research, and technical service providers",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service companies",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and regulated-sector organizations",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title:
        "Startups preparing for large enterprise or public-sector contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in UAE | Expert CMMI Consulting & Appraisal Support
          – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve CMMI Certification in the UAE? First Cert delivers professional CMMI consulting, process design, team training, and appraisal readiness support to help organizations reach CMMI Levels 2, 3, or 5 successfully."
        />
        <meta
          name="keywords"
          content="CMMI Certification in UAE, CMMI consultants in UAE, CMMI Level 2 certification UAE, CMMI Level 3 certification UAE, CMMI Level 5 certification UAE, CMMI appraisal in UAE, CMMI implementation UAE, CMMI certification cost UAE, CMMI consulting company UAE, CMMI SCAMPI appraisal UAE, CMMI training in UAE, CMMI documentation UAE, CMMI process improvement UAE, Capability Maturity Model Integration UAE, CMMI for IT companies UAE, CMMI for startups UAE, best CMMI consultants UAE, affordable CMMI certification UAE, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in UAE</h1>
          <p class="small-desc">
            Advancing Process Excellence & Delivery Control
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
                <b>CMMI Certification in UAE</b> helps organizations develop
                structured, measurable, and scalable processes that drive
                consistent delivery and operational maturity. In a fast-growing
                and competitive business environment, organizations must
                demonstrate process discipline and execution reliability to meet
                enterprise and government expectations.
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
                the UAE to implement CMMI frameworks that are practical,
                performance-driven, and aligned with real business goals. Our
                consulting approach emphasizes usability and results, not
                theoretical compliance.
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
            Understanding CMMI Certification in UAE
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in UAE</b> is based on the internationally
            recognized Capability Maturity Model Integration framework,
            administered by ISACA. It assesses how effectively organizations
            manage projects, services, and operational processes to achieve
            predictable and high-quality outcomes. The CMMI framework supports
            improvement in:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Organizational process standardization</h5>
            </div>

            <div class="vapt-card">
              <h5>Project estimation, planning, and monitoring</h5>
            </div>

            <div class="vapt-card">
              <h5>Product and service quality assurance</h5>
            </div>

            <div class="vapt-card">
              <h5>Risk identification and performance tracking</h5>
            </div>

            <div class="vapt-card">
              <h5>Continuous improvement and maturity advancement</h5>
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
              Achieving CMMI certification demonstrates an organization’s
              capability to manage complexity, deliver consistent results, and
              operate with global process maturity.
            </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations That Benefit from CMMI in UAE?
          </h2>

          <p className="text-center section-sub mb-5">
            <b>CMMI Certification in UAE</b> is well suited for organizations
            aiming to scale operations and strengthen delivery performance,
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
                    <a href="iso-9001-certification-in-uae">
                      ISO 9001 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-uae">
                      ISO 27001 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-uae">
                      CMMI Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-uae">
                      HIPAA Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-uae">
                      VAPT Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-uae">
                      GDPR Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-uae">
                      SOC 1 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-uae">
                      SOC 2 Certification in UAE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          CMMI helps UAE organizations standardize workflows, reduce operational
          variability, and improve stakeholder confidence in complex
          engagements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of CMMI Certification in UAE
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
            CMMI certification empowers organizations to operate with clarity,
            control, and continuous improvement.
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
                CMMI Certification in UAE – Simplified Process with First Cert
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
          How Much Does CMMI Certification Cost in UAE?
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
                  The cost of CMMI Certification in UAE varies based on several
                  factors, including:
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
                  Achieve CMMI Certification in UAE with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted CMMI consulting firm in the UAE,
                  helping organizations strengthen process capability and
                  achieve sustainable performance improvements. Our consultants
                  work closely with leadership and delivery teams to ensure
                  effective implementation and appraisal success.
                </div>
                <div className="title small-title">
                  From initial assessment to post-appraisal maturity
                  sustainment, First Cert ensures your CMMI journey delivers
                  real operational value—not just certification.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your CMMI
                  Certification journey in the UAE with First Cert and establish
                  a strong foundation for scalable growth, delivery excellence,
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

export default UaeCmmi;
