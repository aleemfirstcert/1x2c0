import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/qatar/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/middle-east/qatar/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function QatarCmmi() {
  const benefits = [
    "Improved Process Consistency – Standardized practices across teams and projects.",
    "Better Customer Satisfaction – Reliable and predictable delivery outcomes.",
    "Lower Project Risks – Strong planning, tracking, and control mechanisms.",
    "Optimized Costs – Reduced rework and efficient resource utilization.",
    "Stronger Market Position – Enhanced credibility for global contracts.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Define objectives and target maturity level.",
    },
    {
      number: "2",
      title: "Gap Assessment",
      description: "Evaluate current practices against CMMI requirements.",
    },
    {
      number: "3",
      title: "Process Documentation ",
      description: "Develop SOPs, templates, metrics, and governance records.",
    },
    {
      number: "4",
      title: "Implementation & Training",
      description: "Enable teams to adopt standardized processes.",
    },

    {
      number: "5",
      title: "Readiness Reviews",
      description: "Conduct internal assessments and mock appraisals.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal (A/B/C)",
      description: "Formal evaluation by authorized Lead Appraisers.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description: "Continuous improvement and maturity sustainment.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Qatar | Expert CMMI Consulting Services – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve CMMI Certification in Qatar? First Cert provides professional CMMI consulting, training, documentation, and appraisal support to help organizations reach CMMI Levels 2–5 successfully."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Qatar, CMMI consultants in Qatar, CMMI Level 2 certification Qatar, CMMI Level 3 certification Qatar, CMMI Level 5 certification Qatar, CMMI appraisal in Qatar, CMMI implementation Qatar, CMMI certification cost Qatar, CMMI consulting company Qatar, CMMI SCAMPI appraisal Qatar, CMMI training in Qatar, CMMI documentation Qatar, CMMI process improvement Qatar, Capability Maturity Model Integration Qatar, CMMI for IT companies Qatar, CMMI for startups Qatar, best CMMI consultants Qatar, affordable CMMI certification Qatar, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in Qatar</h1>
          <p class="small-desc">Build Mature Processes and Global Capability</p>
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
                Achieve <b>CMMI Certification in Qatar</b> enables organizations
                to establish disciplined, repeatable, and high-quality processes
                that support business growth and operational excellence. First
                Cert helps companies design structured frameworks that improve
                delivery consistency, reduce risks, and enhance overall
                performance.
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
                Whether your organization is{" "}
                <b>CMMI Maturity Level 2, 3, or 5</b>, our comprehensive
                consulting approach covers assessment, documentation,
                implementation, training, and full appraisal readiness. We
                ensure a smooth certification journey aligned with
                ISACA-governed CMMI model requirements, helping Qatar-based
                organizations achieve global recognition and process maturity.
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
            What is CMMI Certification in Qatar?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Qatar</b> is a globally accepted process
            improvement model that evaluates how effectively an organization
            manages its operations, projects, and services. It provides proven
            best practices for improving:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Project execution and delivery</h5>
            </div>

            <div class="vapt-card">
              <h5>Product and service quality</h5>
            </div>

            <div class="vapt-card">
              <h5>Organizational performance</h5>
            </div>

            <div class="vapt-card">
              <h5>Risk management and predictability</h5>
            </div>

            <div class="vapt-card">
              <h5>Continuous improvement culture</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400", textAlign: "center" }}
          >
            Organizations in Qatar adopt CMMI to minimize rework, increase
            efficiency, deliver consistent outcomes, and meet international
            client expectations. Certification demonstrates operational
            discipline and strengthens credibility in competitive global
            markets.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Organizations Need CMMI Certification in Qatar?
          </h2>

          <p className="text-center section-sub mb-5">
            <b>CMMI Certification in Qatar</b> is valuable for organizations
            aiming to scale operations, improve governance, and deliver
            consistent results. It is widely adopted by:
          </p>

          <div className="row g-4">
            {/* LEFT SIDE CARDS */}
            <div className="col-lg-9">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-code-slash iso-icon"></i>
                    <h4>IT & Software Development Firms</h4>
                    <p>For predictable and high-quality development.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-cloud-arrow-up iso-icon"></i>
                    <h4>SaaS & Product Engineering Companies</h4>
                    <p>To support scalable product growth.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-headset iso-icon"></i>
                    <h4>BPOs, KPOs & Shared Service Centers</h4>
                    <p>To improve service reliability.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-diagram-3 iso-icon"></i>
                    <h4>Engineering & R&D Organizations</h4>
                    <p>For standardized technical processes.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-hdd-network iso-icon"></i>
                    <h4>System Integrators & Managed Service Providers</h4>
                    <p>For improved delivery control.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-shield-check iso-icon"></i>
                    <h4>Manufacturing & Regulated Industries</h4>
                    <p>Where compliance and consistency matter.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-rocket-takeoff iso-icon"></i>
                    <h4>Fast-Growing Startups</h4>
                    <p>To build strong operational foundations.</p>
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
                    <a href="iso-9001-certification-in-qatar">
                      ISO 9001 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-qatar">
                      ISO 27001 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-qatar">
                      CMMI Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-qatar">
                      HIPAA Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-qatar">
                      VAPT Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-qatar">
                      GDPR Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-qatar">
                      SOC 1 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-qatar">
                      SOC 2 Certification in Qatar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          Implementing CMMI helps organizations in Qatar enhance efficiency,
          reduce operational risks, and strengthen customer confidence.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting CMMI Certification in Qatar
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
            With <a href="/">First Cert</a>, CMMI Certification in Qatar becomes
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
                CMMI Certification in Qatar – Simplified Process with First Cert
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
                Our proven methodology ensures clarity and efficiency at every
                stage:
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
          How Much Does CMMI Certification Cost in Qatar?
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
                  The cost of CMMI Certification in Qatar varies based on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">Target maturity level (2, 3, or 5)</li>
                  <li className="check">Organization size and Structure</li>
                  <li className="check">Project and process complexity</li>
                  <li className="check">Documentation and training scope</li>
                  <li className="check">SCAMPI appraisal type and duration</li>
                  <li className="check">Consulting engagement period</li>
                </ul>

                <div className="title small-title">
                  First Cert offers flexible and affordable CMMI consulting
                  packages, customized to match your organizational goals and
                  budget.
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
                  Achieve CMMI Certification in Qatar with First Cert – Your
                  Process Excellence Partner
                </div>
                <div className="title small-title-p">
                  First Cert provides complete CMMI consulting solutions for
                  organizations in Qatar, helping you:
                </div>

                <ul className="features">
                  <li className="check">
                    Establish high-maturity, scalable processes
                  </li>
                  <li className="check">
                    Achieve CMMI Maturity Levels 2, 3 or 5 efficiently
                  </li>
                  <li className="check">Improve product and service quality</li>
                  <li className="check">
                    Strengthen governance and operational control
                  </li>
                  <li className="check">
                    Compete confidently in international markets
                  </li>
                </ul>

                <div className="title small-title-p">
                  Our experienced consultants ensure a transparent,
                  cost-effective, and results-driven certification journey from
                  start to finish. 📧 Email: info@firstcertification.com
                </div>

                <div className="title small-title-p">
                  Begin your CMMI Certification journey in Qatar with First Cert
                  — your trusted partner for global process excellence and
                  sustained business growth.
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

export default QatarCmmi;
