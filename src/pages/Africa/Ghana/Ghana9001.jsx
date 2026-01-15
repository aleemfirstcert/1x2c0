import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/africa/ghana/9001-img.webp";
import benefits9001 from "../../../assets/img/country/africa/ghana/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Ghana9001() {
  const benefits = [
    "Consistent delivery of products and services",
    "Higher customer satisfaction and retention",
    "Improved access to tenders, contracts, and partnerships",
    "Reduced errors, waste, and process inefficiencies",
    "Enhanced credibility in regional and international markets",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Establish certification boundaries and quality objectives",
    },
    {
      number: "2",
      title: "Process & Gap Review",
      description: "Compare existing practices against ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Development",
      description: "Create policies, procedures, and process controls",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Assist teams in applying standardized workflows",
    },
    {
      number: "5",
      title: "Internal Audit & Review",
      description: "Validate system effectiveness and leadership oversight",
    },
    {
      number: "6",
      title: "Certification Audit Assistance",
      description: "Support Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Continual Improvement Support",
      description: "Maintain and enhance QMS performance post-certification",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Ghana | Professional Quality System Advisory
          – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain ISO 9001 Certification in Ghana? First Cert provides comprehensive ISO 9001 consulting services, including quality framework development, process optimization, workforce training, and complete certification audit assistance to help organizations improve consistency and customer satisfaction."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Ghana, ISO 9001 consultants Ghana, ISO 9001 certification cost Ghana, ISO 9001 implementation Ghana, ISO certification services Ghana, ISO 9001 training Ghana, ISO 9001 documentation Ghana, Quality Management System Ghana, QMS certification Ghana, ISO 9001 audit Ghana, ISO consultants Ghana, First Cert ISO 9001 Ghana, ISO quality certification Ghana, ISO 9001 for companies Ghana"
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
          <h1 className="main-title">ISO 9001 Certification in Ghana</h1>
          <p className="small-desc">Establishing Reliable Quality Systems</p>
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
                src={img9001}
                alt="ISO 9001 Certification in Ghana"
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
                <b>ISO 9001 Certification in Ghana</b> helps organizations
                implement structured quality practices that enhance operational
                control, service consistency, and customer confidence. As Ghana
                continues to grow across manufacturing, construction,
                agribusiness, healthcare, logistics, energy, and professional
                services, ISO 9001 is widely recognized as a foundation for
                efficient and accountable business operations.
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
                <b>First Cert</b> works closely with organizations across Ghana
                to design Quality Management Systems that align with real
                operational needs. Our focus is on practical implementation,
                leadership involvement, and measurable improvement—ensuring the
                QMS delivers value beyond certification.
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
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9">
              {/* HEADING 1 */}
              <h2
                className="details-title text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                What ISO 9001 Certification in Ghana Represents
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Ghana</b> demonstrates that an
                organization has adopted a Quality Management System aligned
                with international ISO standards. The framework emphasizes
                customer focus, process control, risk-based thinking, and
                continual improvement across all business functions.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                An effective ISO 9001 system supports organizations by enabling:
              </p>

              <ul className="iso-list">
                {[
                  "Clearly defined and controlled operational processes",
                  "Improved understanding of customer requirements and expectations",
                  "Leadership-driven quality objectives and performance tracking",
                  "Proactive identification and mitigation of operational risks",
                  "Continuous evaluation and improvement of business outcomes",
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
                Certification confirms that quality principles are embedded into
                daily operations and decision-making.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Industries in Ghana That Commonly Adopt ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Ghana is suitable for organizations of
                any size or sector, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing plants and production facilities",
                  "Construction companies and engineering contractors",
                  "Mining, oil, gas, and energy service providers",
                  "Logistics, warehousing, and transportation firms",
                  "IT companies, software developers, and service providers",
                  "Hospitals, clinics, and healthcare support services",
                  "Educational institutions and professional consultancies",
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
                Implementing ISO 9001 enables organizations in Ghana to reduce
                variability, improve efficiency, and strengthen stakeholder
                trust.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-ghana">
                      ISO 9001 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-ghana">
                      ISO 27001 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-ghana">
                      CMMI Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-ghana">
                      HIPAA Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-ghana">
                      VAPT Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-ghana">
                      GDPR Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-ghana">
                      SOC 1 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-ghana">
                      SOC 2 Certification in Ghana
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of ISO 9001 Certification in Ghana
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations certified to ISO 9001 in Ghana experience tangible
                operational and commercial benefits, such as:
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
                src={benefits9001}
                alt="ISO 9001 Benefits in Ghana"
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
            className="details-text"
            style={{
              color: "#000000",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            ISO 9001 supports a culture of accountability, clarity, and
            continuous improvement throughout the organization.
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
                First Cert's ISO 9001 Consulting Framework in Ghana
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert follows a structured yet flexible ISO 9001
                implementation approach tailored to organizations in Ghana:
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
          ISO 9001 Certification Cost in Ghana
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
                  The cost of ISO 9001 Certification in Ghana varies depending
                  on factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and number of employees
                  </li>
                  <li className="check">
                    Nature and complexity of business activities
                  </li>
                  <li className="check">
                    Certification scope and operational locations
                  </li>
                  <li className="check">
                    Existing quality systems and documentation maturity
                  </li>
                  <li className="check">
                    Training, audit, and implementation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an initial assessment to provide a
                  transparent, customized cost estimate aligned with
                  organizational goals.
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
                  Get ISO 9001 Certified in Ghana with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in Ghana,
                  supporting organizations from initial assessment through
                  certification and ongoing system improvement. Our consultants
                  simplify ISO requirements while ensuring audit confidence and
                  meaningful business outcomes.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations in Ghana can
                  strengthen quality governance, improve efficiency, and build a
                  sustainable foundation for growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 9001 Certification journey in Ghana with First
                  Cert and demonstrate your commitment to quality, consistency,
                  and continual improvement.
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

export default Ghana9001;
