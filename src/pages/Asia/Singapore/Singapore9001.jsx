import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/asia/singapore/9001-img.webp";
import benefits9001 from "../../../assets/img/country/asia/singapore/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Singapore9001() {
  const benefits = [
    "Standardized Processes – Improve consistency and operational control",
    "Higher Customer Satisfaction – Controlled service delivery builds trust",
    "Market Recognition – Accepted in both local and international markets",
    "Better Risk Management – Effective corrective and preventive actions",
    "Increased Competitiveness – Strong advantage in tenders and supplier evaluations",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Assessment & Scope Definition",
      description: "Understand business objectives and certification scope.",
    },
    {
      number: "2",
      title: "ISO 9001 Gap Analysis",
      description:
        "Identify gaps between current practices and ISO 9001 requirements.",
    },
    {
      number: "3",
      title: "QMS Framework Development",
      description:
        "Create tailored policies, procedures, and process documentation.",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Guide teams in effectively applying quality controls.",
    },
    {
      number: "5",
      title: "Internal Audit & Management Review",
      description: "Conduct internal audits and management evaluations.",
    },
    {
      number: "6",
      title: "Certification Audit Assistance",
      description: "Support organizations during external audit stages.",
    },
    {
      number: "7",
      title: "Post-Certification Improvement",
      description:
        "Ensure ongoing compliance and continual system improvement.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Singapore | Professional ISO 9001 Consulting
          – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain ISO 9001 Certification in Singapore? First Cert delivers structured ISO 9001 consulting, QMS development, workforce training, and audit coordination to help organizations achieve dependable quality management practices."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Singapore, ISO 9001 consultants in Singapore, ISO 9001 certification cost in Singapore, ISO 9001 implementation in Singapore, ISO 9001 certification process Singapore, ISO certification consultants Singapore, ISO 9001 training in Singapore, ISO 9001 documentation Singapore, Quality Management System Singapore, QMS certification Singapore, ISO certification services Singapore, ISO 9001 audit support Singapore, affordable ISO certification Singapore, First Cert ISO consultants, ISO 9001 consulting company Singapore, ISO 9001 certification for manufacturing companies Singapore, ISO 9001 certification for IT companies Singapore, ISO 9001 quality certification Singapore."
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
          <h1 class="main-title">ISO 9001 Certification in Singapore</h1>
          <p class="small-desc">Building Consistency and Operational Control</p>
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
                <b>ISO 9001 Certification in Singapore</b> enables organizations
                to establish disciplined quality management practices that
                support consistent performance and customer satisfaction. In
                Singapore’s efficiency-driven and compliance-focused business
                environment, adopting a recognized quality framework helps
                organizations maintain reliability while scaling operations.
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
                <b>First Cert</b> assists companies in Singapore by designing
                ISO 9001 systems that integrate seamlessly into existing
                workflows. Our emphasis is on process clarity, accountability,
                and measurable improvement rather than generic documentation.
              </p>
            </div>

            <EnquiryForm />
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
                What ISO 9001 Certification in Singapore Means?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Singapore</b> confirms that an
                organization has implemented a Quality Management System aligned
                with international ISO requirements. The standard provides a
                structured method to control processes, monitor outcomes, and
                drive continual improvement across departments. Key focus areas
                include:
              </p>

              <ul className="iso-list">
                {[
                  "Clearly defined and monitored business processes",
                  "Strong customer focus and feedback mechanisms",
                  "Leadership oversight and strategic quality planning",
                  "Risk identification and preventive controls",
                  "Performance measurement and improvement actions",
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
                Organizations certified to ISO 9001 in Singapore demonstrate
                reliability, consistency, and a proactive approach to quality
                management.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Organizations That Benefit from ISO 9001 Certification in
                Singapore?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Singapore is suitable for
                organizations of all sizes and sectors, such as:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing and precision engineering companies",
                  "Logistics, warehousing, and distribution providers",
                  "Technology firms and professional service companies",
                  "Construction, infrastructure, and project-based businesses",
                  "Healthcare, laboratories, and service institutions",
                  "Education providers and consulting organizations",
                ].map((item, index) => (
                  <li key={index} className="mb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-singapore">
                      ISO 9001 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-singapore">
                      ISO 27001 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-singapore">
                      CMMI Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-singapore">
                      HIPAA Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-singapore">
                      VAPT Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-singapore">
                      GDPR Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-singapore">
                      SOC 1 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-singapore">
                      SOC 2 Certification in Singapore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400", textAlign: "center" }}
          >
            Implementing ISO 9001 helps Singapore-based organizations streamline
            operations, reduce rework, and strengthen customer trust.
          </p>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Advantages of ISO 9001 Certification in Singapore
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations achieving ISO 9001 Certification in Singapore gain
                strategic and operational benefits:
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
            className="details-text"
            style={{
              color: "#000000",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            ISO 9001 supports a culture of quality and continuous improvement
            across the organization.
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
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0000FF" }}
              >
                ISO 9001 Certification Process in Singapore with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                <a href="/">First Cert</a> follows a structured and transparent
                approach to ISO 9001 Certification in Singapore:
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
          ISO 9001 Certification Cost in Singapore
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
                  The cost of ISO 9001 Certification in Singapore depends on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and number of processes
                  </li>
                  <li className="check">
                    Industry complexity and regulatory exposure
                  </li>
                  <li className="check">
                    Scope of the Quality Management System
                  </li>
                  <li className="check">
                    Existing documentation and process maturity
                  </li>
                  <li className="check">
                    Training and audit preparation needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides transparent and customized pricing after
                  an initial evaluation to ensure cost-effective certification.
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
                  Get ISO 9001 Certification in Singapore with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Singapore, helping organizations build practical and effective
                  Quality Management Systems. Our consultants focus on aligning
                  ISO requirements with real business operations to ensure
                  smooth certification and long-term value.
                </div>
                <div className="title small-title">
                  From system design to audit support and continual improvement,
                  First Cert ensures a clear and efficient ISO 9001
                  certification journey.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your ISO 9001
                  Certification in Singapore with First Cert and strengthen
                  quality, consistency, and business performance.
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

export default Singapore9001;
