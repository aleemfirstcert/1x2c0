import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/north-america/mexico/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/north-america/mexico/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MexicoCmmi() {
  const benefits = [
    "Improved Process Quality – Standardized workflows ensure consistent and efficient operations.",
    "Higher Customer Satisfaction – Predictable outcomes build trust and long-term relationships.",
    "Reduced Project Risks – Better planning and control minimize failures.",
    "Cost Efficiency – Optimized resources and reduced rework lower project costs.",
    "Competitive Advantage – Higher CMMI maturity boosts credibility and contract opportunities.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Understand business goals and desired CMMI maturity level.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Identify gaps against CMMI model practices.",
    },
    {
      number: "3",
      title: "Documentation Support",
      description: "Develop SOPs, templates, metrics, and records.",
    },
    {
      number: "4",
      title: "Implementation & Training",
      description: "Enable teams to adopt standardized processes.",
    },

    {
      number: "5",
      title: "Internal Assessments",
      description: "Conduct mock appraisals and readiness reviews.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal (A/B/C)",
      description: "Official evaluation by an authorized Lead Appraiser.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description: "Ongoing guidance to maintain and improve maturity levels.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Mexico | Best CMMI Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Get CMMI Certification in Mexico with expert consulting, training, documentation, and appraisal support. Achieve CMMI Levels 2–5 efficiently with First Cert."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Mexico, CMMI consultants in Mexico, CMMI Level 2 certification Mexico, CMMI Level 3 certification Mexico, CMMI Level 5 certification Mexico, CMMI appraisal in Mexico, CMMI implementation Mexico, CMMI certification cost Mexico, CMMI consulting company Mexico, CMMI SCAMPI appraisal Mexico, CMMI training in Mexico, CMMI documentation Mexico, CMMI process improvement Mexico, Capability Maturity Model Integration Mexico, CMMI for IT companies Mexico, CMMI for startups Mexico, best CMMI consultants Mexico, affordable CMMI certification Mexico, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in Mexico</h1>
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
                Achieve <b>CMMI Certification in Mexico</b> with the expert
                guidance of <b>First Cert</b>, your trusted partner for
                structured, efficient, and affordable process improvement. We
                help organizations build strong, standardized workflows that
                enhance productivity, accelerate growth, and strengthen global
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
                Whether your objective is <b>CMMI Maturity Level 2, 3, or 5</b>,
                our end-to-end support — including gap assessment,
                documentation, process implementation, training, and appraisal
                preparation — ensures a smooth and result-oriented path to
                certification.
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
                <b> ISACA</b>, and First Cert provides complete consulting
                assistance to help Mexico-based companies meet model
                requirements and successfully complete their official appraisal.{" "}
                <br /> Strengthen process maturity, reduce risks, and build
                high-performing teams with <b>CMMI Certification in Mexico</b>{" "}
                supported by First Cert.
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
            What is CMMI Certification in Mexico?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Mexico</b> is a globally recognized process
            improvement model designed to help organizations enhance efficiency,
            quality, and operational consistency. It provides structured best
            practices across:
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
            Organizations across Mexico adopt CMMI to:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Improve process capability and standardization</h5>
            </div>

            <div class="vapt-card">
              <h5>Reduce project failures and rework</h5>
            </div>

            <div class="vapt-card">
              <h5>Enhance product and service quality</h5>
            </div>

            <div class="vapt-card">
              <h5>Strengthen customer satisfaction and trust</h5>
            </div>

            <div class="vapt-card">
              <h5>Compete globally with high maturity processes</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By achieving CMMI certification, businesses in Mexico demonstrate
            their commitment to excellence, making it easier to win enterprise
            clients, secure global contracts, and establish long-term
            credibility.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Businesses Need CMMI Certification in Mexico?
          </h2>

          <p className="text-center section-sub mb-5">
            Any organization aiming to improve operational consistency, reduce
            risks, and deliver high-quality output can benefit from{" "}
            <b>CMMI Certification Implementation in Mexico</b>.
          </p>
          <p className="text-center section-sub mb-5">
            Industries widely adopting CMMI include:
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
                      From established names in Mexico tech landscape to
                      emerging startups, CMMI helps build predictable, scalable
                      development practices.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-cloud-check iso-icon"></i>
                    <h4>Product Engineering & SaaS Companies</h4>
                    <p>
                      Organizations building apps, enterprise products, AI
                      tools, and cloud platforms gain structured, high-quality
                      development processes.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-hdd-network iso-icon"></i>
                    <h4>System Integrators & IT Service Providers</h4>
                    <p>
                      Companies delivering managed services, implementation, and
                      support benefit from better control and efficiency.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-headset iso-icon"></i>
                    <h4>BPO, KPO & Customer Support Centers</h4>
                    <p>
                      CMMI streamlines workflows, reduces errors, and improves
                      service delivery quality.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-diagram-3 iso-icon"></i>
                    <h4>Engineering, R&D & Design Centers</h4>
                    <p>
                      CMMI helps establish strong engineering processes aligned
                      with global standards.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-gear-wide-connected iso-icon"></i>
                    <h4>Aerospace, Defense & Manufacturing Units</h4>
                    <p>
                      These industries rely heavily on process consistency and
                      compliance.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-rocket-takeoff iso-icon"></i>
                    <h4>Growing Startups Seeking Scalability</h4>
                    <p>
                      Startups in Mexico booming ecosystem adopt CMMI to build
                      strong process foundations for sustainable growth.
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
                    <a href="iso-9001-certification-in-mexico">
                      ISO 9001 Certification in Mexico
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-mexico">
                      ISO 27001 Certification in Mexico
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-mexico">
                      CMMI Certification in Mexico
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-mexico">
                      HIPAA Certification in Mexico
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-mexico">
                      VAPT Certification in Mexico
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-mexico">
                      GDPR Certification in Mexico
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-mexico">
                      SOC 1 Certification in Mexico
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-mexico">
                      SOC 2 Certification in Mexico
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          Implementing CMMI helps Mexico-based companies reduce risks, improve
          predictability, and increase customer confidence — key for long-term
          success.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting CMMI Certification in Mexico
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
                Achieving CMMI Certification offers several strategic and
                operational benefits:
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
            Mexico becomes a structured, strategic, and value-driven journey.
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
                CMMI Certification in Mexico – Simplified Process with First
                Cert
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                We follow a proven consulting methodology tailored to your
                organization’s needs:
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
          How Much Does CMMI Certification Cost in Mexico?
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
                  The cost of CMMI Certification in Mexico depends on:
                </div>

                <ul className="features">
                  <li className="check">Desired maturity level (2, 3, or 5)</li>
                  <li className="check">Organization size</li>
                  <li className="check">Project complexity</li>
                  <li className="check">Documentation and training needs</li>
                  <li className="check">SCAMPI appraisal type</li>
                  <li className="check">Duration of consulting</li>
                </ul>

                <div className="title small-title">
                  There is no fixed price. First Cert offers affordable,
                  customized packages based on your requirements.
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
                  Achieve CMMI Certification in Mexico with First Cert – Your
                  Trusted Partner <br /> We help organizations:
                </div>
                <div className="title small-title-p">
                  First Cert provides complete consulting, training,
                  documentation, and appraisal readiness support to help
                  organizations in Mexico:
                </div>

                <ul className="features">
                  <li className="check">Build strong, efficient processes</li>
                  <li className="check">
                    Achieve CMMI Maturity Levels 2, 3, and 5
                  </li>
                  <li className="check">
                    Improve product quality & service consistency
                  </li>
                  <li className="check">
                    Strengthen organizational capability
                  </li>
                  <li className="check">Enhance global competitiveness</li>
                </ul>

                <div className="title small-title-p">
                  Our experienced consultants ensure a smooth, cost-effective,
                  and transparent certification journey. 📧 Email:
                  info@firstcertification.com
                </div>

                <div className="title small-title-p">
                  Start your CMMI Certification journey today with First Cert —
                  your partner in achieving world-class process maturity in
                  Mexico.
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

export default MexicoCmmi;
