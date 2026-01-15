import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/saudi-arabia/9001-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/saudi-arabia/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Saudi9001() {
  const benefits = [
    "Improved Process Control – Standardized workflows reduce errors and improve operational efficiency.",
    "Customer Satisfaction – Consistent quality delivery strengthens customer confidence.",
    "Global Acceptance – Recognition aligned with international quality standards.",
    "Risk Reduction – Early identification of operational and quality-related risks.",
    "Competitive Strength – Enhances credibility in tenders and global markets.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-gear-wide-connected",
      title: "Manufacturing and Industrial Companies",
    },
    {
      icon: "bi bi-code-slash",
      title: "IT, Software, and Technology Firms",
    },
    {
      icon: "bi bi-building",
      title: "Construction and Engineering Organizations",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare and Medical Service Providers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational Institutions and Training Centers",
    },
    {
      icon: "bi bi-truck",
      title: "Logistics, Trading, and Service-Based Businesses",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Saudi Arabia | Expert ISO 9001 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Planning to get ISO 9001 Certification in Saudi Arabia? First Cert offers end-to-end ISO 9001 consulting, QMS documentation, employee training, and audit support to help organizations meet global quality standards with confidence."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Saudi Arabia, ISO 9001 consultants Saudi Arabia, ISO 9001 certification cost Saudi Arabia, ISO 9001 implementation Saudi Arabia, ISO certification services Saudi Arabia, ISO 9001 training Saudi Arabia, ISO 9001 documentation Saudi Arabia, Quality Management System Saudi Arabia, QMS certification Saudi Arabia, ISO 9001 audit support Saudi Arabia, ISO consultants Saudi Arabia, First Cert ISO 9001, ISO 9001 certification for companies in Saudi Arabia, ISO quality certification KSA."
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
          <h1 className="main-title">ISO 9001 Certification in Saudi Arabia</h1>
          <p className="small-desc">
            Building Consistent Quality & Operational Excellence
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/918073358319?text=Thank you for Contacting First Cert"
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
                src={imgvapt}
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
                <b>ISO 9001 Certification in Saudi Arabia</b> helps
                organizations establish a strong foundation for quality-driven
                operations, improved efficiency, and customer satisfaction. As
                businesses in the Kingdom expand across regional and
                international markets, implementing a structured Quality
                Management System (QMS) has become a strategic requirement
                rather than an option.
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
                <b>First Cert</b> supports organizations across Saudi Arabia by
                delivering practical ISO 9001 consulting solutions that focus on
                real business improvement. From initial assessment to
                certification audit coordination, we simplify the entire ISO
                9001 journey while ensuring compliance with international
                quality requirements.
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
            What is ISO 9001 Certification in Saudi Arabia?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 9001 Certification in Saudi Arabia</b> is based on the
            globally recognized ISO 9001 standard for Quality Management
            Systems. It defines how organizations should plan, operate, monitor,
            and continuously improve their processes to deliver consistent
            products and services.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The standard emphasizes customer focus, leadership involvement,
            risk-based thinking, process control, and continual improvement.
            Organizations in Saudi Arabia that achieve ISO 9001 certification
            demonstrate structured operations, accountability, and a commitment
            to delivering reliable quality outcomes.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            ISO 9001 applies to organizations of all sizes and industries,
            making it one of the most widely adopted international standards
            worldwide.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement ISO 9001 in Saudi Arabia?
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 9001 Certification implementation in Saudi Arabia is suitable
            for organizations seeking operational discipline, process clarity,
            and measurable quality improvement. It is widely adopted by:
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
          By implementing ISO 9001, organizations in Saudi Arabia can improve
          internal coordination, reduce inefficiencies, and meet the quality
          expectations of customers, regulators, and international partners.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of ISO 9001 Certification in Saudi Arabia
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
                src={benefitsvapt}
                alt="vapt Benefits"
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
            ISO 9001 certification supports sustainable growth by embedding
            quality into daily business operations.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            ISO 9001 Certification in Saudi Arabia – Simple Process with <br />
            <span style={{ color: "black" }}> First Cert</span>
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
            First Cert follows a clear and business-focused ISO 9001
            certification approach in Saudi Arabia:
          </p>
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Initial Discussion</h4>
                <p>
                  Define ISO 9001 certification objectives and organizational
                  scope.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Gap Review</h4>
                <p>
                  Evaluate existing processes against ISO 9001 requirements.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>QMS Documentation</h4>
                <p>
                  Develop quality manuals, procedures, policies, and required
                  records.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Implementation Support</h4>
                <p>
                  Integrate QMS practices with operations and employee
                  involvement.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit</h4>
                <p>Verify QMS effectiveness and organizational readiness.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit</h4>
                <p>Audit conducted by an accredited certification body.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continual Support</h4>
                <p>
                  Guidance for surveillance audits and ongoing quality
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 9001 Certification Cost in Saudi Arabia
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
                  The cost of ISO 9001 Certification in Saudi Arabia varies
                  based on organizational requirements rather than a fixed
                  price. Cost factors typically include:
                </div>

                <ul className="features">
                  <li className="check">
                    Size of the organization and workforce
                  </li>
                  <li className="check">
                    Industry type and process complexity
                  </li>
                  <li className="check">Scope of certification</li>
                  <li className="check">
                    Existing quality practices and documentation
                  </li>
                  <li className="check">Training and internal audit needs</li>
                  <li className="check">Certification body audit effort</li>
                </ul>

                <div className="title small-title">
                  First Cert provides a customized and transparent cost proposal
                  after reviewing your business requirements.
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
                  Get ISO 9001 Certification in Saudi Arabia with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in Saudi
                  Arabia, helping organizations design and implement effective
                  Quality Management Systems aligned with international
                  standards. Our approach focuses on practical compliance,
                  measurable improvement, and long-term value rather than
                  paperwork alone.
                </div>
                <div className="title small-title">
                  With industry-specific expertise and experienced consultants,
                  we ensure a smooth ISO 9001 certification journey—from
                  planning and documentation to audit readiness and ongoing
                  compliance support.
                </div>
                <div className="title small-title-p">
                  📧 Contact: info@firstcertification.com Start your ISO 9001
                  Certification in Saudi Arabia with First Cert and build a
                  strong culture of quality, consistency, and continuous
                  improvement.
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

export default Saudi9001;
