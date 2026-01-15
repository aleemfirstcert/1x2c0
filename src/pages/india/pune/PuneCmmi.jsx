import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/india/pune/cmmi-img.jpg";
import benefitscmmi from "../../../assets/img/country/india/bangalore/cmmi-benefits.jpg";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function PuneCmmi() {
  const benefits = [
    "Improved Process Quality – Standardize workflows and reduce process variation across teams.",
    "Higher Customer Satisfaction – Deliver consistent, predictable results.",
    "Reduced Project Risks – Better planning, tracking, and risk management.",
    "Cost Efficiency – Reduced rework and delays.",
    "Stronger Market Reputation – CMMI Maturity Levels 2–5 increase credibility globally.",
    "Competitive Advantage – Access more projects, including government, MNC, and enterprise-level projects.",
    "Enhanced Team Productivity – Defined processes and roles improve performance.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Understanding goals and maturity needs.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Evaluating current processes.",
    },
    {
      number: "3",
      title: "Documentation Support",
      description: "SOPs, templates, guidelines.",
    },
    {
      number: "4",
      title: "Implementation & Training",
      description: "Standardized process adoption.",
    },
    {
      number: "5",
      title: "Internal Assessments",
      description: "Readiness checks.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal (A/B/C)",
      description: "Conducted by authorized Lead Appraiser.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description: "Maintaining ongoing process maturity.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Pune | Affordable CMMI Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking for CMMI Certification in Pune? First Cert provides expert consulting, training, documentation, and appraisal support to help you achieve CMMI Maturity Levels 2–5 efficiently and affordably."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Pune, CMMI consultants in Pune, CMMI appraisal cost in Pune, CMMI implementation in Pune, CMMI Level 3 certification Pune, CMMI Level 5 companies Pune, CMMI consulting services Pune, CMMI training Pune, CMMI documentation Pune, CMMI appraisal support Pune, CMMI SCAMPI appraisal Pune, affordable CMMI certification Pune, First Cert CMMI consultants, CMMI certification for IT companies Pune, CMMI for software development Pune, CMMI maturity model Pune."
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
          <h1 class="main-title">CMMI Certification in Pune</h1>
          <p class="small-desc">
            Your Path to High-Performance Processes and Global Excellence
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
              <img
                src={imgcmmi}
                alt="CMMI Certification"
                className="img-fluid rounded-2 mb-3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Achieve <b>CMMI Certification in Pune</b> with the expert
                consultants at First Cert. We help organizations implement
                strong, standardized, and efficient processes that enhance
                performance, reduce risks, and deliver consistent quality.
              </p>

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Whether your goal is <b>CMMI Maturity Level 2, 3, or 5</b>, our
                end-to-end support — from gap assessment and documentation to
                training and final appraisal — ensures a smooth and
                cost-effective certification journey.
              </p>
              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Since CMMI is governed and managed by ISACA, First Cert serves
                as your consulting partner, guiding you through every step of
                the implementation and appraisal process.
              </p>
              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Strengthen your process maturity, boost customer trust, and
                elevate your business performance with{" "}
                <b>CMMI certification in Pune.</b>
              </p>
            </div>

            {/* RIGHT SIDE — ENQUIRY FORM */}
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
            What is CMMI Certification in Pune?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              CMMI (Capability Maturity Model Integration) Certification in Pune
            </b>{" "}
            is a globally recognized model that helps organizations improve
            process efficiency, product quality, and continuous performance.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            It provides structured best practices across areas such as project
            management, software development, service delivery, engineering, and
            organizational performance.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Organizations in Pune across IT, software development, BPO,
            engineering, and service sectors use CMMI to:
          </p>
          <ul className="iso-list">
            {[
              "Improve process capabilities",
              "Deliver predictable project outcomes",
              "Reduce rework and operational risks",
              "Enhance quality and customer satisfaction",
              "Strengthen global competitiveness",
            ].map((item, index) => (
              <li key={index} className="mb-3">
                {item}
              </li>
            ))}
          </ul>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Achieving CMMI certification demonstrates an organization’s
            commitment to quality, consistency, and continuous improvement,
            making it a key differentiator in local and international markets.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need CMMI Certification Implementation in Pune?
              </h2>

              <p className="text-center section-sub mb-5">
                Every organization that wants to improve process efficiency,
                reduce project failures, and establish structured workflows can
                benefit from CMMI Certification Implementation in Pune.
              </p>
              <p className="text-center section-sub mb-5">
                Industries that commonly adopt CMMI include:
              </p>
              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
                <div className="col-lg-9">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-code-slash iso-icon"></i>
                        <h4>IT and Software Development Companies</h4>
                        <p>
                          Such as Infosys, TCS, Wipro, Mindtree, and emerging
                          tech startups.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-box-seam iso-icon"></i>
                        <h4>Product Development Companies</h4>
                        <p>
                          SaaS, mobile apps, AI tools, and enterprise software.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-headset iso-icon"></i>
                        <h4>BPO & KPO Companies</h4>
                        <p>
                          Customer support, analytics, and outsourced
                          operations.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-lightbulb iso-icon"></i>
                        <h4>Engineering and R&D Organizations</h4>
                        <p>Design, testing, and innovation.</p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-hdd-network iso-icon"></i>
                        <h4>System Integrators & IT Service Providers</h4>
                        <p>Managed services and implementation projects.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-shield-check iso-icon"></i>
                        <h4>Defense, Aerospace, and Manufacturing Units</h4>
                        <p>Predictable and compliant processes.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-rocket-takeoff iso-icon"></i>
                        <h4>Startup Ecosystem</h4>
                        <p>Scalable, repeatable, high-quality processes.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE INTERNAL LINKS BOX */}
                <div className="col-lg-3">
                  <div className="iso-links-box tall-sidebar">
                    <h5>Our Experties</h5>
                    <ul>
                      <li>
                        <a href="iso-9001-certification-in-pune">
                          ISO 9001 Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-pune">
                          ISO 27001 Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-pune">
                          CMMI Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-pune">
                          HIPAA Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-pune">
                          VAPT Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-pune">
                          GDPR Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-pune">
                          SOC 1 Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-pune">
                          SOC 2 Certification in Pune
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Implementing CMMI helps Pune organizations streamline processes,
              minimize project risks, and deliver superior performance —
              essential for long-term business success.
            </p>
          </section>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting CMMI Certification in Pune
              </h1>
            </div>
          </div>

          {/* First Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Achieving{" "}
                <b href="iso-27001-certification">CMMI Certification in Pune</b>{" "}
                offers numerous business advantages:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitscmmi}
                alt="CMMI Benefits"
                className="img-fluid rounded-3"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            </div>

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
          </div>

          {/* Last Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                With <a href="/">First Cert</a>, achieving{" "}
                <b>CMMI Certification in Pune</b> becomes a structured, guided,
                and value-driven process.
              </p>
            </div>
          </div>
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
                CMMI Certification in Pune – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                We follow an industry-proven methodology to ensure a successful
                CMMI appraisal:
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
          How Much Does CMMI Certification Cost in Pune?
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
                  The cost of CMMI Certification in Pune depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Required maturity level (2, 3, or 5)
                  </li>
                  <li className="check">Organization size</li>
                  <li className="check">Process complexity</li>
                  <li className="check">
                    Documentation and training requirements
                  </li>
                  <li className="check">SCAMPI appraisal type</li>
                  <li className="check">
                    Duration of consulting and implementation
                  </li>
                </ul>

                <div className="title small-title">
                  There is no fixed price — each organization needs a customized
                  plan.
                </div>
                <div className="title small-title">
                  First Cert provides affordable and tailored CMMI consulting
                  packages to achieve certification within budget and timeline.
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
                  Achieve CMMI Certification in Pune with First Cert – Your
                  Trusted Partner
                </div>
                <div className="title small-title">
                  If you're looking to achieve CMMI Certification in Pune, First
                  Cert is your trusted partner for expert guidance and reliable
                  support, We help organizations:
                </div>

                <ul className="features">
                  <li className="check">Build strong, efficient processes</li>
                  <li className="check">
                    Achieve CMMI Maturity Levels 2, 3, and 5
                  </li>
                  <li className="check">
                    Improve quality, performance, and consistency
                  </li>
                </ul>

                <div className="title small-title">
                  Our experienced consultants ensure a smooth journey — from
                  documentation and training to appraisal readiness.
                </div>
                <div className="title small-title">
                  Contact us at info@firstcertification.com to begin your CMMI
                  Certification journey in Pune with First Cert — your partner
                  in achieving world-class process maturity.
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

export default PuneCmmi;
