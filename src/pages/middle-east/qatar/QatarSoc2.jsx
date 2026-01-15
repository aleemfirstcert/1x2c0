import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/qatar/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/middle-east/qatar/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function QatarSoc2() {
  const benefits = [
    "Stronger Data Security Controls to reduce cyber threats.",
    "Increased Client Trust through verified security practices.",
    "Alignment with Global Compliance Expectations.",
    "Lower Operational and Technology Risks.",
    "Improved Readiness for International Contracts.",
    "Enhanced Brand Reputation as a secure and reliable provider.",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT and Software Development Companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS and Cloud Solution Providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech and Digital Payment Firms",
    },
    {
      icon: "bi-hdd-network",
      title: "Managed Service Providers and Data Centers",
    },
    {
      icon: "bi-headset",
      title: "BPOs and KPOs",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Health-tech and Digital Healthcare Platforms",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce and Online Service Businesses",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Assessment",
      description:
        "Understanding your services, data environment, and compliance goals.",
    },
    {
      number: "2",
      title: "Gap Review",
      description: "Mapping existing controls against SOC 2 requirements.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Policies, procedures, risk registers, and control descriptions.",
    },
    {
      number: "4",
      title: "Control Enablement",
      description:
        "Supporting implementation of technical and organizational controls.",
    },
    {
      number: "5",
      title: "Internal Readiness Review",
      description: "Ensuring preparedness before the audit.",
    },
    {
      number: "6",
      title: "SOC 2 Audit Support",
      description: "Coordination for Type 1 or Type 2 audits with a CPA firm.",
    },
    {
      number: "7",
      title: "Ongoing Compliance Assistance",
      description: "Support for continuous improvement and future audits.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Qatar | Expert SOC 2 Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain SOC 2 Certification in Qatar? First Cert provides end-to-end SOC 2 consulting, security assessment, documentation, and audit preparation services to help organizations achieve trusted and compliant operations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Qatar, SOC 2 consultants in Qatar, SOC 2 audit Qatar, SOC 2 Type 1 certification Qatar, SOC 2 Type 2 certification Qatar, SOC 2 compliance Qatar, SOC 2 consulting company Qatar, SOC 2 certification cost Qatar, SOC 2 implementation Qatar, SOC 2 documentation Qatar, SOC 2 audit support Qatar, SOC 2 security compliance Qatar, First Cert SOC 2 consultants, SOC 2 certification for IT companies Qatar, SOC 2 for SaaS companies Qatar, SOC 2 cybersecurity certification Qatar."
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
          <h1 className="main-title">SOC 2 Certification in Qatar</h1>
          <p className="small-desc">
            Strengthening Security and Client Confidence
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
              <img
                src={imgsoc2}
                alt="soc2 Certification"
                className="img-fluid rounded-2 mb-3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                <b>SOC 2 Certification in Qatar</b> enables organizations to
                prove that their systems and processes are designed to protect
                customer data and ensure service reliability. As businesses in
                Qatar expand globally and handle increasing volumes of sensitive
                information, SOC 2 compliance has become a key trust requirement
                for clients and partners.
              </p>

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                <b>First Cert</b> helps organizations in Qatar adopt a
                structured SOC 2 compliance approach that focuses on practical
                security controls, risk reduction, and audit readiness. Our
                consulting services are designed to simplify compliance while
                supporting business growth and international credibility.
              </p>
            </div>

            {/* RIGHT SIDE — ENQUIRY FORM */}
            <div className="col-md-6">
              <EnquiryForm />
            </div>
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
            What is SOC 2 Certification in Qatar?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Qatar</b> is an independent assurance
            report based on standards defined by the AICPA. It evaluates how
            well an organization manages data and system controls in line with
            the Trust Services Criteria:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Security</h5>
            </div>

            <div class="vapt-card">
              <h5>Availability</h5>
            </div>

            <div class="vapt-card">
              <h5>Processing Integrity</h5>
            </div>

            <div class="vapt-card">
              <h5>Confidentiality</h5>
            </div>

            <div class="vapt-card">
              <h5>Privacy</h5>
            </div>
          </div>
          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 focuses on ensuring that systems are protected against
            unauthorized access, data loss, and operational disruptions.
            Organizations in sectors such as IT services, SaaS, cloud computing,
            fintech, healthcare technology, and outsourcing benefit
            significantly from SOC 2 certification by improving governance and
            stakeholder assurance.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Consider SOC 2 Certification in Qatar?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification is ideal for organizations in Qatar that
                store, process, or transmit customer or client data, including:
              </p>
              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
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
              For companies serving overseas clients, especially in North
              America and Europe, SOC 2 compliance is often a mandatory
              onboarding requirement.
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
                Business Advantages of SOC 2 Certification in Qatar
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve SOC 2 Certification in Qatar gain
                measurable benefits, such as:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="soc2 Benefits"
                className="img-fluid rounded-3"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            </div>

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
                With <a href="/">First Cert</a>, SOC 2 compliance becomes a
                strategic advantage rather than just a regulatory task.
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
                SOC 2 Certification Process in Qatar with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="text-center"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Our SOC 2 consulting methodology is designed for clarity and
                efficiency:
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
          <br />
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 2 Certification Cost in Qatar
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
                  The cost of SOC 2 Certification in Qatar depends on multiple
                  factors, such as:
                </div>

                <ul className="features">
                  <li className="check">Organization size and Service model</li>
                  <li className="check">Type of data processed</li>
                  <li className="check">
                    Number of Trust Service Criteria in scope
                  </li>
                  <li className="check">
                    IT infrastructure and system complexity
                  </li>
                  <li className="check">Current security maturity</li>
                  <li className="check">
                    Audit type (Type 1 or Type 2) and audit duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides clear, customized pricing after an initial
                  evaluation to ensure transparency and cost efficiency.
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
                  Achieve SOC 2 Certification in Qatar with First Cert
                </div>
                <div className="title small-title">
                  If you are planning to achieve SOC 2 Certification in Qatar,
                  First Cert is your reliable compliance partner. We assist
                  organizations in building and validating strong security
                  frameworks that meet SOC 2 standards while supporting
                  long-term operational resilience.
                </div>
                <div className="title small-title">
                  With hands-on experience across SaaS, IT services, fintech,
                  cloud platforms, and digital businesses, our consultants
                  deliver practical, affordable, and results-focused SOC 2
                  solutions.
                </div>
                <div className="title small-title">
                  📧 Email: info@firstcertification.com Start your SOC 2
                  Certification journey in Qatar with First Cert — and
                  demonstrate security, reliability, and compliance to the
                  world.
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

export default QatarSoc2;
