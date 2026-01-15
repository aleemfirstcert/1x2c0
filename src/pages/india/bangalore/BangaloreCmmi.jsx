import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/india/bangalore/cmmi-bangalore.jpg";
import benefitscmmi from "../../../assets/img/country/india/bangalore/cmmi-benefits.jpg";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function BangaloreCmmi() {
  const benefits = [
    "Improved Process Quality – Standardize workflows and reduce process variation across teams.",
    "Higher Customer Satisfaction – Deliver consistent and predictable results, improving client trust.",
    "Reduced Project Risks – Better planning, tracking, and risk management.",
    "Cost Efficiency – Lower rework, fewer delays, and optimized resource usage.",
    "Stronger Market Reputation – CMMI Maturity Levels 2–5 increase credibility globally.",
    "Competitive Advantage – Access more projects, especially government, MNC, and enterprise-level contracts.",
    "Enhanced Team Productivity – Clear processes, defined roles, and continuous improvement practices lead to higher team efficiency and better performance.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "We analyze your business goals, challenges, and CMMI maturity level requirements.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Our experts review your current processes and identify gaps against CMMI model requirements.",
    },
    {
      number: "3",
      title: "Documentation Support",
      description:
        "We help prepare essential process assets, SOPs, guidelines, templates, and project records.",
    },
    {
      number: "4",
      title: "Implementation & Training",
      description:
        "Teams are trained to follow standardized processes and adopt best practices.",
    },
    {
      number: "5",
      title: "Internal Assessments",
      description:
        "We conduct internal evaluations to ensure readiness for the official appraisal.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal (A/B/C)",
      description:
        "An authorized Lead Appraiser performs the final CMMI appraisal to verify compliance.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "First cert provides ongoing support to maintain process maturity and prepare for future appraisals.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Bangalore | Affordable CMMI Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking for CMMI Certification in Bangalore? First cert provides expert consulting, training, documentation, and appraisal support to help you achieve CMMI Maturity Levels 2–5 efficiently and affordably."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Bangalore, CMMI consultants in Bangalore, CMMI appraisal cost in Bangalore, CMMI implementation in Bangalore, CMMI Level 3 certification Bangalore, CMMI Level 5 companies Bangalore, CMMI consulting services Bangalore, CMMI training Bangalore, CMMI documentation Bangalore, CMMI appraisal support Bangalore, CMMI SCAMPI appraisal Bangalore, affordable CMMI certification Bangalore, First cert CMMI consultants, CMMI certification for IT companies Bangalore, CMMI for software development Bangalore, CMMI maturity model Bangalore."
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
          <h1 class="main-title">CMMI Certification in Bangalore</h1>
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
              {/* IMAGE */}
              <img
                src={imgcmmi}
                alt="cmmi Certification"
                className="img-fluid rounded-2"
                style={{
                  width: "110%",
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
                Achieve <b>CMMI Certification in Bangalore</b> with the expert
                consultants at <b>First Cert</b>. We help organizations
                implement strong, standardized, and efficient processes that
                enhance performance, reduce risks, and deliver consistent
                quality.
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
                Whether your goal is <b>CMMI Maturity Level 2, 3, or 5,</b> our
                end-to-end support — from gap assessment and documentation to
                training and final appraisal — ensures a smooth and
                cost-effective certification journey.
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
                Since <b>CMMI is governed and managed by ISACA</b>, First Cert
                serves as your <b>consulting partner</b>, guiding you through
                every step of the implementation and appraisal process.
                Strengthen your process maturity, boost customer trust, and
                elevate your business performance with{" "}
                <b>CMMI certification in Bangalore</b>.
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
            What is CMMI Certification in Bangalore?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              CMMI (Capability Maturity Model Integration) Certification in
              Bangalore
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
            Organizations in Bangalore across IT, software development, BPO,
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
            Achieving <a href="cmmi-certification">CMMI certification</a>{" "}
            demonstrates an organization’s commitment to{" "}
            <b>quality, consistency, and continuous improvement</b>, making it a
            key differentiator in local and international markets.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need CMMI Certification Implementation in
                Bangalore?
              </h2>

              <p className="text-center section-sub mb-5">
                Every organization that wants to improve process efficiency,
                reduce project failures, and establish structured workflows can
                benefit from{" "}
                <b>CMMI Certification Implementation in Bangalore</b>.
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
                        <h4>IT & Software Development Companies</h4>
                        <p>
                          Such as Infosys, TCS, Wipro, Mindtree, and emerging
                          tech startups.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-box-seam iso-icon"></i>
                        <h4>Product Development Companies </h4>
                        <p>
                          Organizations building SaaS, mobile apps, AI tools,
                          and enterprise software.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-headset iso-icon"></i>
                        <h4>BPO & KPO Companies</h4>
                        <p>
                          Firms handling customer support, analytics, and
                          outsourced operations.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-lightbulb iso-icon"></i>
                        <h4>Engineering and R&D Organizations</h4>
                        <p>
                          Companies involved in design, testing, and innovation.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-diagram-3 iso-icon"></i>
                        <h4>System Integrators & IT Service Providers</h4>
                        <p>
                          Delivering managed services, support, and
                          implementation projects.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-gear-fill iso-icon"></i>
                        <h4>Defense, Aerospace, and Manufacturing Units</h4>
                        <p>Ensuring predictable and compliant processes.</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-rocket-takeoff iso-icon"></i>
                        <h4>Startup Ecosystem</h4>
                        <p>
                          Organizations looking to build scalable, repeatable,
                          and high-quality processes.
                        </p>
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
                        <a href="iso-9001-certification-in-bangalore">
                          ISO 9001 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-bangalore">
                          ISO 27001 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-bangalore">
                          CMMI Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-bangalore">
                          HIPAA Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-bangalore">
                          VAPT Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-bangalore">
                          GDPR Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-bangalore">
                          SOC 1 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-bangalore">
                          SOC 2 Certification in Bangalore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Implementing CMMI helps Bangalore organizations <b>streamline
              processes, minimize project risks, and deliver superior
              performance</b> — essential for achieving long-term business success.
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
                Benefits of Getting CMMI Certification in Bangalore
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
                Achieving <b>CMMI Certification in Bangalore</b> offers numerous
                business advantages:
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
                alt="ISO 27001 Benefits"
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
                With <a href="/">First Cert</a>, achieving CMMI Certification in
                Bangalore becomes a structured, guided, and value-driven
                process.
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
                CMMI Certification in Bangalore – Simplified Process with First
                cert
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                At <b>First Cert</b>, we follow an industry-proven methodology
                to ensure a successful CMMI appraisal:
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

      <div className="iso-cost-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold display-6 text-dark">
                How Much Does CMMI Certification Cost in Bangalore?
              </h2>
              <p className="lead text-muted mt-3" style={{ fontWeight: "400" }}>
                The <b>cost of CMMI Certification in Bangalore</b> depends on
                several factors:
              </p>
            </div>
          </div>

          {/* Two Columns */}
          <div className="row g-4">
            {/* LEFT COLUMN */}
            {/* LEFT COLUMN */}
            <div className="col-lg-6">
              <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                <ul className="iso-list">
                  {[
                    "Required maturity level (Level 2, 3, or 5)",
                    "Organization size and number of employees",
                    "Process complexity and number of projects",
                    "Documentation and training needs",
                    "SCAMPI appraisal type (A, B, or C)",
                    "Consulting and implementation duration",
                  ].map((item, index) => (
                    <li key={index} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-muted" style={{ fontWeight: "400" }}>
                  There is no fixed price — each organization requires a
                  customized plan.
                </p>
                <p className="mt-3 text-muted" style={{ fontWeight: "400" }}>
                  At <b>First Cert</b>, we offer affordable and tailored CMMI
                  consulting packages to help companies achieve certification
                  within budget and timeline.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                <h4 className="fw-bold text-primary mb-3">
                  Achieve CMMI Certification in Bangalore with First cert – Your
                  Trusted Partner for Process Excellence
                </h4>

                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  If you're looking to achieve{" "}
                  <b>CMMI Certification in Bangalore</b>, First cert is your
                  trusted partner for expert guidance and reliable support.{" "}
                  <br /> We specialize in helping organizations:
                </p>
                <ul className="iso-list">
                  {[
                    "Build strong, efficient processes",
                    "Achieve CMMI Maturity Levels 2, 3, and 5",
                    "Improve quality, performance, and operational consistency",
                  ].map((item, index) => (
                    <li key={index} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  Our experienced CMMI consultants ensure a smooth journey —
                  from documentation and training to appraisal readiness and
                  continual improvement.
                </p>
                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  We are committed to delivering high-quality, affordable, and
                  result-driven CMMI consulting services that elevate your
                  organization’s performance and reputation.
                </p>
                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  <b>Contact us at info@firstcertification.com</b> to begin your{" "}
                  <b>CMMI Certification journey in Bangalore</b> with First cert
                  — your partner in achieving world-class process maturity.
                </p>
                {/* CONTACT BUTTON */}
                <div className="mt-4 text-start">
                  <a
                    href="mailto:info@firstcertification.com"
                    className="contact-btn btn btn-primary rounded-pill w-100 text-center"
                    style={{
                      fontSize: "0.85rem",
                      padding: "10px 12px",
                      whiteSpace: "normal",
                      lineHeight: "1.4",
                    }}
                  >
                    Contact Us — info@firstcertification.com
                  </a>
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

export default BangaloreCmmi;
