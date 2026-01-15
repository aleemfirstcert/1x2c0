import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/kuwait/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/middle-east/kuwait/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function KuwaitCmmi() {
  const benefits = [
    "Improved Process Quality – Standardized workflows ensure consistency.",
    "Higher Customer Satisfaction – Predictable results strengthen trust.",
    "Reduced Project Risks – Better planning and monitoring reduce failures.",
    "Cost Efficiency – Optimized resources lower operational costs.",
    "Competitive Advantage – Higher maturity improves global credibility.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Define goals and target maturity level.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Identify gaps against CMMI requirements.",
    },
    {
      number: "3",
      title: "Documentation Support",
      description: "Develop SOPs, metrics, and templates.",
    },
    {
      number: "4",
      title: "Implementation & Training",
      description: "Enable teams to adopt processes.",
    },

    {
      number: "5",
      title: "Internal Assessments",
      description: "Mock appraisals and readiness checks.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal (A/B/C)",
      description: "Official evaluation by authorized appraiser.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description: "Ongoing improvement and maturity maintenance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Kuwait | Best CMMI Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Get CMMI Certification in Kuwait with expert consulting, training, documentation, and appraisal support. Achieve CMMI Levels 2–5 efficiently with First Cert."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Kuwait, CMMI consultants in Kuwait, CMMI Level 2 certification Kuwait, CMMI Level 3 certification Kuwait, CMMI Level 5 certification Kuwait, CMMI appraisal in Kuwait, CMMI implementation Kuwait, CMMI certification cost Kuwait, CMMI consulting company Kuwait, CMMI SCAMPI appraisal Kuwait, CMMI training in Kuwait, CMMI documentation Kuwait, CMMI process improvement Kuwait, Capability Maturity Model Integration Kuwait, CMMI for IT companies Kuwait, CMMI for startups Kuwait, best CMMI consultants Kuwait, affordable CMMI certification Kuwait, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in Kuwait</h1>
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
                Achieve <b>CMMI Certification in Kuwait</b> with the expert
                guidance of <b>First Cert</b>, your trusted partner for
                structured, efficient, and affordable process improvement. We
                help organizations establish standardized workflows that improve
                productivity, support scalability, and enhance global
                competitiveness.
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
                Whether your goal is <b>CMMI Maturity Level 2, 3, or 5</b>, our
                end-to-end services — including gap analysis, documentation,
                implementation, training, and appraisal readiness — ensure a
                smooth and result-driven certification journey.
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
                CMMI (Capability Maturity Model Integration) is governed by
                <b> ISACA</b>, and First Cert delivers complete consulting
                support to help Kuwait-based organizations meet model
                requirements and successfully complete official appraisals.
                Strengthen process maturity, reduce risks, and build
                high-performing teams with <b>CMMI Certification in Kuwait</b>.
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
            What is CMMI Certification in Kuwait?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Kuwait</b> is a globally recognized process
            improvement framework that helps organizations enhance operational
            efficiency, quality, and consistency. It provides best-practice
            guidance across:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Software development</h5>
            </div>

            <div class="vapt-card">
              <h5>Project and product management</h5>
            </div>

            <div class="vapt-card">
              <h5>Service delivery</h5>
            </div>

            <div class="vapt-card">
              <h5>Engineering and design</h5>
            </div>

            <div class="vapt-card">
              <h5>Organizational performance</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400", textAlign: "center" }}
          >
            Organizations in Kuwait adopt CMMI to standardize processes, reduce
            rework, improve predictability, enhance quality, and build customer
            confidence. Achieving CMMI certification demonstrates a strong
            commitment to excellence and enables businesses to compete
            effectively in international markets.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Businesses Need CMMI Certification in Kuwait?
          </h2>

          <p className="text-center section-sub mb-5">
            Any organization seeking better process control, reduced risk, and
            consistent quality can benefit from{" "}
            <b>CMMI Certification in Kuwait</b>. Common sectors include:
          </p>

          <div className="row g-4">
            {/* LEFT SIDE CARDS */}
            <div className="col-lg-9">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-code-slash iso-icon"></i>
                    <h4>IT & Software Development Companies</h4>
                    <p>From startups to large Enterprises.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-cloud-check iso-icon"></i>
                    <h4>Product Engineering & SaaS Companies</h4>
                    <p>For scalable and predictable development.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-hdd-network iso-icon"></i>
                    <h4>System Integrators & IT Service Providers</h4>
                    <p>For better delivery control.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-headset iso-icon"></i>
                    <h4>BPO, KPO & Customer Support Centers</h4>
                    <p>To improve service consistency.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-diagram-3 iso-icon"></i>
                    <h4>Engineering, R&D & Design Centers</h4>
                    <p>For globally aligned practices.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-gear-wide-connected iso-icon"></i>
                    <h4>Aerospace, Defense & Manufacturing Units</h4>
                    <p>Where compliance is critical.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-rocket-takeoff iso-icon"></i>
                    <h4>Growing Startups</h4>
                    <p>Building strong foundations for sustainable growth.</p>
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
                    <a href="iso-9001-certification-in-kuwait">
                      ISO 9001 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-kuwait">
                      ISO 27001 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-kuwait">
                      CMMI Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-kuwait">
                      HIPAA Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-kuwait">
                      VAPT Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-kuwait">
                      GDPR Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-kuwait">
                      SOC 1 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-kuwait">
                      SOC 2 Certification in Kuwait
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          Implementing CMMI helps Kuwait-based companies improve reliability,
          efficiency, and customer trust.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting CMMI Certification in Kuwait
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
            With <a href="/">First Cert</a>, achieving CMMI Certification in
            Kuwait becomes a structured and value-focused initiative.
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
                CMMI Certification in Kuwait – Simplified Process with First
                Cert
              </h2>
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
          How Much Does CMMI Certification Cost in Kuwait?
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
                  The cost of CMMI Certification in Kuwait depends on:
                </div>

                <ul className="features">
                  <li className="check">Target maturity level (2, 3, or 5)</li>
                  <li className="check">Organization size</li>
                  <li className="check">Project and process complexity</li>
                  <li className="check">Documentation and training needs</li>
                  <li className="check">SCAMPI appraisal type</li>
                  <li className="check">Consulting duration</li>
                </ul>

                <div className="title small-title">
                  There is no fixed pricing. First Cert provides customized and
                  affordable CMMI certification packages based on organizational
                  needs.
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
                  Achieve CMMI Certification in Kuwait with First Cert – Your
                  Trusted Partner <br /> We help organizations:
                </div>
                <div className="title small-title-p">
                  First Cert delivers complete consulting, training,
                  documentation, and appraisal readiness support to help
                  organizations in Kuwait:
                </div>

                <ul className="features">
                  <li className="check">Build high-performance processes</li>
                  <li className="check">
                    Achieve CMMI Maturity Levels 2, 3, and 5
                  </li>
                  <li className="check">
                    Improve service and product quality
                  </li>
                  <li className="check">
                    Strengthen organizational capability
                  </li>
                  <li className="check">Compete confidently in global markets</li>
                </ul>

                <div className="title small-title-p">
                  Our experienced consultants ensure a smooth, transparent, and
                  cost-effective certification journey. 📧 Email:
                  info@firstcertification.com
                </div>

                <div className="title small-title-p">
                  Start your CMMI Certification journey in the Kuwait today with
                  First Cert — your partner in achieving world-class process
                  maturity.
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

export default KuwaitCmmi;
