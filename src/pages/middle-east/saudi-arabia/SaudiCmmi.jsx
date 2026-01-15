import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/saudi-arabia/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/middle-east/saudi-arabia/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SaudiCmmi() {
  const benefits = [
    "Standardized Processes – Consistent execution across projects and departments.",
    "Improved Delivery Reliability – Predictable timelines, costs, and quality.",
    "Reduced Operational Risk – Strong planning, tracking, and governance controls.",
    "Cost Optimization – Lower rework and better resource utilization.",
    "Enhanced Global Credibility – Increased eligibility for international and government contracts.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Objective Setting",
      description: "Identify business goals and target maturity level.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Compare current practices against CMMI model requirements.",
    },
    {
      number: "3",
      title: "Process Design & Documentation",
      description: "Develop SOPs, templates, metrics, and governance models.",
    },
    {
      number: "4",
      title: "Implementation & Coaching",
      description: "Enable teams to adopt and apply standardized processes.",
    },
    {
      number: "5",
      title: "Internal Reviews",
      description: "Conduct readiness checks and mock appraisals.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal",
      description: "Formal evaluation by authorized CMMI Lead Appraisers.",
    },
    {
      number: "7",
      title: "Sustainment Support",
      description: "Continuous improvement and maturity maintenance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Saudi Arabia | Professional CMMI Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve CMMI Certification in Saudi Arabia? First Cert offers expert CMMI consulting, process design, training, and appraisal support to help organizations attain CMMI Levels 2 to 5 with confidence."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Saudi Arabia, CMMI consultants in Saudi Arabia, CMMI Level 2 certification Saudi Arabia, CMMI Level 3 certification Saudi Arabia, CMMI Level 5 certification Saudi Arabia, CMMI appraisal in Saudi Arabia, CMMI implementation Saudi Arabia, CMMI certification cost Saudi Arabia, CMMI consulting company Saudi Arabia, CMMI SCAMPI appraisal Saudi Arabia, CMMI training in Saudi Arabia, CMMI documentation Saudi Arabia, CMMI process improvement Saudi Arabia, Capability Maturity Model Integration Saudi Arabia, CMMI for IT companies Saudi Arabia, CMMI for startups Saudi Arabia, best CMMI consultants Saudi Arabia, affordable CMMI certification Saudi Arabia, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in Saudi Arabia</h1>
          <p class="small-desc">Elevate Process Maturity & Performance</p>
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
                Achieve <b>CMMI Certification in Saudi Arabia</b> helps
                organizations establish robust, measurable, and continuously
                improving processes that drive operational excellence and
                predictable results. As Saudi enterprises expand globally and
                compete for high-value contracts, structured process maturity
                has become a critical success factor.
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
                <b>First Cert</b> supports organizations across Saudi Arabia
                with end-to-end CMMI consulting services, enabling them to
                improve governance, delivery quality, and organizational
                efficiency. From initial assessment to full appraisal readiness,
                our approach is practical, scalable, and aligned with
                ISACA-managed CMMI model requirements.
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
            What is CMMI Certification in Saudi Arabia?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Saudi Arabia</b> is a globally recognized
            framework for assessing and improving an organization’s capability
            to manage projects, services, and operations effectively. It focuses
            on embedding best practices that enhance:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Process standardization and control</h5>
            </div>

            <div class="vapt-card">
              <h5>Delivery predictability and quality</h5>
            </div>

            <div class="vapt-card">
              <h5>Performance measurement and optimization</h5>
            </div>

            <div class="vapt-card">
              <h5>Risk identification and mitigation</h5>
            </div>

            <div class="vapt-card">
              <h5>Continuous improvement across teams</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400", textAlign: "center" }}
          >
            Organizations in Saudi Arabia adopt CMMI to reduce operational
            variability, improve customer outcomes, and demonstrate maturity to
            international clients and government entities.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement CMMI in Saudi Arabia?
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification is ideal for organizations in Saudi Arabia aiming
            for scalable growth, quality consistency, and global
            competitiveness, including:
          </p>

          <div className="row g-4">
            {/* LEFT SIDE CARDS */}
            <div className="col-lg-9">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-code-slash iso-icon"></i>
                    <h4>IT and Software Development Companies</h4>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-cloud-arrow-up iso-icon"></i>
                    <h4>SaaS and Product Engineering Firms</h4>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-headset iso-icon"></i>
                    <h4>BPOs, KPOs, and Shared Service Centers</h4>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-diagram-3 iso-icon"></i>
                    <h4>Engineering, R&amp;D, and Technology Organizations</h4>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-hdd-network iso-icon"></i>
                    <h4>System Integrators and Managed Service Providers</h4>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-shield-check iso-icon"></i>
                    <h4>Manufacturing and Regulated Industries</h4>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-rocket-takeoff iso-icon"></i>
                    <h4>
                      Rapidly Scaling Startups targeting enterprise clients
                    </h4>
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
                    <a href="iso-9001-certification-in-saudi-arabia">
                      ISO 9001 Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-saudi-arabia">
                      ISO 27001 Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-saudi-arabia">
                      CMMI Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-saudi-arabia">
                      HIPAA Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-saudi-arabia">
                      VAPT Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-saudi-arabia">
                      GDPR Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-saudi-arabia">
                      SOC 1 Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-saudi-arabia">
                      SOC 2 Certification in Saudi Arabia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          By implementing CMMI, Saudi-based organizations strengthen internal
          discipline, improve delivery outcomes, and build long-term client
          confidence.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting CMMI Certification in Saudi Arabia
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
            CMMI certification positions organizations in Saudi Arabia as
            mature, reliable, and performance-driven partners.
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
                CMMI Certification in Saudi Arabia – Simplified Process with
                First Cert
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
                First Cert follows a clear and structured methodology to ensure
                successful outcomes:
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
          How Much Does CMMI Certification Cost in Saudi Arabia?
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
                  The cost of CMMI Certification in Saudi Arabia varies based on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">Target maturity level (2, 3, or 5)</li>
                  <li className="check">Organization size and Structure</li>
                  <li className="check">Number and complexity of projects</li>
                  <li className="check">Documentation and training scope</li>
                  <li className="check">SCAMPI appraisal type and duration</li>
                  <li className="check">
                    Overall consulting engagement timeline
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert offers flexible and customized CMMI consulting
                  packages, ensuring cost-effective solutions aligned with your
                  business objectives.
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
                  Achieve CMMI Certification in Saudi Arabia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner for
                  organizations in Saudi Arabia seeking structured growth and
                  operational excellence. We help you build mature, scalable
                  processes that support quality delivery, governance, and
                  long-term performance improvement.
                </div>

                <div className="title small-title">
                  With experienced consultants and a proven implementation
                  approach, we ensure a smooth, transparent, and results-driven
                  CMMI certification journey — from assessment to appraisal
                  success.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your CMMI
                  Certification journey in Saudi Arabia with First Cert and
                  strengthen your foundation for global competitiveness and
                  sustainable growth.
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

export default SaudiCmmi;
