import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/middle-east/qatar/9001-img.webp";
import benefits9001 from "../../../assets/img/country/middle-east/qatar/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Qatar9001() {
  const benefits = [
    "Operational Consistency – Well-defined processes improve efficiency and reduce errors.",
    "Customer Confidence – Reliable quality delivery increases customer satisfaction and loyalty.",
    "International Recognition – Alignment with globally accepted quality standards.",
    "Risk Control – Early identification of process gaps and operational risks.",
    "Market Advantage – Strengthens credibility and competitiveness in local and global markets.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Understanding business objectives and certification scope.",
    },
    {
      number: "2",
      title: "Gap Assessment",
      description: "Identifying gaps against ISO 9001 requirements.",
    },
    {
      number: "3",
      title: "Documentation Support",
      description: "Developing QMS policies, procedures, and records.",
    },
    {
      number: "4",
      title: "System Implementation",
      description:
        "Integrating QMS into daily operations with employee training.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description: "Assessing readiness and improvement opportunities.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description: "Final audit conducted by an accredited certification body.",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Surveillance audits and continual improvement guidance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Qatar | Trusted ISO 9001 Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain ISO 9001 Certification in Qatar? First Cert delivers professional consulting, documentation, training, and audit assistance to help organizations build an efficient Quality Management System and achieve international quality standards."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Qatar, ISO 9001 consultants in Qatar, ISO 9001 certification cost in Qatar, ISO 9001 implementation in Qatar, ISO 9001 certification process Qatar, ISO certification consultants Qatar, ISO 9001 training in Qatar, ISO 9001 documentation Qatar, Quality Management System Qatar, QMS certification Qatar, ISO certification services Qatar, ISO 9001 audit support Qatar, affordable ISO certification Qatar, First Cert ISO consultants, ISO 9001 consulting company Qatar, ISO 9001 certification for manufacturing companies Qatar, ISO 9001 certification for IT companies Qatar, ISO 9001 quality certification Qatar."
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
          <h1 class="main-title">ISO 9001 Certification in Qatar</h1>
          <p class="small-desc">
            Driving Quality, Efficiency, and Business Growth
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
                Achieve <b>ISO 9001 Certification in Qatar</b> enables
                organizations to enhance operational performance, deliver
                consistent quality, and meet customer expectations effectively.
                With expert guidance from First Cert, businesses can design and
                implement a practical Quality Management System (QMS) aligned
                with ISO 9001 standards.
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
                Our comprehensive support — from gap analysis and documentation
                to training and certification audit coordination — ensures a
                smooth, affordable, and result-oriented ISO 9001 certification
                journey in Qatar. Strengthen customer confidence and position
                your organization for long-term success with a globally
                recognized quality framework.
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
                What is ISO 9001 Certification in Qatar?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Qatar</b> is an internationally
                accepted quality standard that defines the requirements for
                establishing, implementing, and continually improving a Quality
                Management System. It helps organizations control processes,
                minimize inefficiencies, and consistently deliver products and
                services that comply with customer and regulatory requirements.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 is applicable to organizations across all sectors,
                including manufacturing, IT, construction, healthcare,
                education, logistics, and professional services. By becoming ISO
                9001 certified, Qatar-based businesses demonstrate reliability,
                structured operations, and a strong commitment to quality-driven
                performance.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Which Businesses Need ISO 9001 Certification in Qatar?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification Implementation in Qatar is suitable for
                any organization seeking process consistency, improved
                efficiency, and higher customer satisfaction. Commonly certified
                sectors include manufacturing units, IT and software companies,
                construction firms, healthcare providers, educational
                institutions, trading companies, and service organizations.
              </p>
              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Implementing ISO 9001 helps organizations in Qatar streamline
                workflows, reduce operational waste, enhance service delivery,
                and compete effectively in both regional and international
                markets.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
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
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 9001 Certified in Qatar
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
                ISO 9001 Certification in Qatar – Simple Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                <a href="/">First Cert</a> follows a structured and transparent
                approach to ISO 9001 Certification in Qatar:
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
          ISO 9001 Certification Cost in Qatar
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
                  The cost of ISO 9001 certification in Qatar depends on several
                  factors and does not follow a fixed pricing model. Key cost
                  considerations include:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and number of employees
                  </li>
                  <li className="check">
                    Industry type and operational complexity
                  </li>
                  <li className="check">Scope of certification</li>
                  <li className="check">
                    Existing documentation and process maturity
                  </li>
                  <li className="check">
                    Training and internal audit requirements
                  </li>
                  <li className="check">Certification body audit duration</li>
                </ul>

                <div className="title small-title">
                  ISO 9001 consultants in Qatar typically conduct an initial
                  assessment to provide a customized and cost-effective
                  quotation.
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
                  Achieve ISO 9001 Certification in Qatar with First Cert
                </div>
                <div className="title small-title">
                  If you are planning to achieve ISO 9001 Certification in
                  Qatar, First Cert is your trusted partner for complete
                  consulting and certification support. We assist organizations
                  in building strong Quality Management Systems that enhance
                  efficiency, consistency, and customer satisfaction. With
                  experience across multiple industries, First Cert delivers
                  tailored ISO 9001 solutions that ensure a smooth certification
                  process — from planning and documentation to audit readiness
                  and long-term compliance.
                </div>

                <div className="title small-title">
                  📧 Contact us: info@firstcertification.com Start your ISO 9001
                  Certification journey in Qatar with First Cert — your partner
                  in quality excellence and sustainable business performance.
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

export default Qatar9001;
