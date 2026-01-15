import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/middle-east/iran/9001-img.webp";
import benefits9001 from "../../../assets/img/country/middle-east/iran/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Iran9001() {
  const benefits = [
    "Greater consistency in product and service delivery",
    "Increased customer confidence and satisfaction",
    "Improved alignment with regulatory, contractual, and tender requirements",
    "Reduction in process errors, rework, and operational waste",
    "Enhanced reputation in both domestic and international markets",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & Objective Definition",
      description: "Identify processes, boundaries, and quality goals",
    },
    {
      number: "2",
      title: "Process & Gap Review",
      description: "Compare existing practices with ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Development",
      description:
        "Design quality policies, procedures, and control mechanisms",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Assist teams in adopting standardized practices",
    },
    {
      number: "5",
      title: "Internal Audits & Management Review",
      description: "Validate system effectiveness",
    },
    {
      number: "6",
      title: "Certification Audit Assistance",
      description: "Support Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Continual Improvement Support",
      description: "Maintain and enhance the QMS post-certification",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Iran | Professional Quality Management
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain ISO 9001 Certification in Iran? First Cert offers comprehensive ISO 9001 consulting services covering quality framework development, process standardization, staff awareness, and full certification audit assistance to help organizations achieve reliable performance and continuous improvement."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Iran, ISO 9001 consultants Iran, ISO 9001 certification cost Iran, ISO 9001 implementation Iran, ISO certification services Iran, ISO 9001 training Iran, ISO 9001 documentation Iran, Quality Management System Iran, QMS certification Iran, ISO 9001 audit Iran, ISO consultants Iran, First Cert ISO 9001 Iran, ISO quality certification Iran, ISO 9001 for companies Iran"
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
          <h1 className="main-title">ISO 9001 Certification in Iran</h1>
          <p className="small-desc">
            Establishing Consistent Quality and Operational Control
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
                src={img9001}
                alt="ISO 9001 Certification in Iran"
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
                <b>ISO 9001 Certification in Iran</b> helps organizations
                implement a systematic approach to managing quality, improving
                efficiency, and delivering consistent outcomes to customers. As
                Iran continues to strengthen its industrial base across
                manufacturing, oil and gas, construction, healthcare, logistics,
                and professional services, ISO 9001 has become a key indicator
                of organizational reliability and structured management.
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
                <b>First Cert</b> works closely with organizations throughout
                Iran to develop ISO 9001-compliant Quality Management Systems
                that reflect actual operational practices. Our emphasis is on
                improving performance, accountability, and customer satisfaction
                rather than creating documentation for audit purposes alone.
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
                Understanding ISO 9001 Certification in Iran
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Iran</b> confirms that an
                organization has implemented and maintained a Quality Management
                System aligned with international ISO 9001 requirements. The
                standard focuses on process control, customer focus, leadership
                involvement, and continuous improvement.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                An effective ISO 9001 framework supports:
              </p>

              <ul className="iso-list">
                {[
                  "Defined and controlled workflows across key business functions",
                  "Clear understanding of customer requirements and service expectations",
                  "Leadership-driven quality objectives and performance monitoring",
                  "Risk-based thinking to minimize errors and inefficiencies",
                  "Measurement, evaluation, and ongoing improvement of processes",
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
                Certification demonstrates that quality is built into daily
                operations and decision-making processes.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Industries in Iran That Commonly Adopt ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Iran is applicable across diverse
                sectors and organization sizes, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing plants and industrial service providers",
                  "Energy, oil, and gas contractors and suppliers",
                  "Construction companies and infrastructure projects",
                  "Logistics, transportation, and supply chain operations",
                  "IT service firms, startups, and digital solution providers",
                  "Hospitals, clinics, and healthcare support services",
                  "Educational institutions, consultancies, and professional firms",
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
                By adopting ISO 9001, organizations in Iran can improve
                operational discipline, reduce variability, and strengthen
                stakeholder confidence.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-iran">
                      ISO 9001 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-iran">
                      ISO 27001 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-iran">
                      CMMI Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-iran">
                      HIPAA Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-iran">
                      VAPT Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-iran">
                      GDPR Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-iran">
                      SOC 1 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-iran">
                      SOC 2 Certification in Iran
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
                Business Advantages of ISO 9001 Certification in Iran
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in Iran
                experience multiple strategic and operational benefits, such as:
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
                alt="ISO 9001 Benefits in Iran"
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
            ISO 9001 encourages a culture of ownership, clarity, and continual
            performance enhancement across the organization.
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
                First Cert's ISO 9001 Consulting Framework in Iran
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert delivers ISO 9001 consulting services in Iran using a
                practical and structured methodology:
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
          ISO 9001 Certification Cost in Iran
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
                  The cost of ISO 9001 Certification in Iran varies depending on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and management structure
                  </li>
                  <li className="check">
                    Nature and complexity of business activities
                  </li>
                  <li className="check">
                    Scope of certification and number of operational sites
                  </li>
                  <li className="check">
                    Existing quality systems and documentation maturity
                  </li>
                  <li className="check">
                    Training requirements and audit scope
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a preliminary assessment to provide a
                  transparent, customized cost estimate aligned with business
                  objectives.
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
                  Get ISO 9001 Certified in Iran with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in Iran,
                  supporting organizations from initial assessment through
                  certification and ongoing quality improvement. Our consultants
                  focus on simplifying ISO requirements while ensuring audit
                  confidence and real operational impact.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  quality governance, enhance efficiency, and build a solid
                  foundation for sustainable growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 9001 Certification journey in Iran with First
                  Cert and demonstrate your commitment to quality excellence and
                  continual improvement.
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

export default Iran9001;
