import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/asia/indonesia/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/asia/indonesia/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IndonesiaSoc1() {
  const benefits = [
    "Independent assurance over financial control effectiveness",
    "Increased confidence from clients, auditors, and regulators",
    "Reduced risk of financial errors and control failures",
    "Clear documentation and ownership of key financial processes",
    "Improved preparedness for client audits and vendor reviews",
  ];

  const hipaaData = [
    {
      icon: "bi bi-people",
      title: "Payroll and human resource service providers",
    },
    {
      icon: "bi bi-calculator",
      title: "Accounting, finance, and reporting outsourcing firms",
    },
    {
      icon: "bi bi-credit-card",
      title: "Payment gateways and transaction processing platforms",
    },
    {
      icon: "bi bi-hdd-network",
      title: "SaaS companies supporting accounting or billing systems",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and regional service centers",
    },
    {
      icon: "bi bi-currency-exchange",
      title: "Fintech platforms and financial operations technology firms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Identification",
      description:
        "Define services, systems, and boundaries affecting financial reporting",
    },
    {
      number: "2",
      title: "Control Gap Review",
      description: "Compare current practices with SOC 1 expectations",
    },
    {
      number: "3",
      title: "Process & Control Documentation",
      description: "Develop narratives, flowcharts, and control descriptions",
    },
    {
      number: "4",
      title: "Control Enhancement",
      description:
        "Support implementation and optimization of required controls",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Validate control design and operational effectiveness",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Assist with SOC 1 Type 1 or Type 2 audits alongside CPA firms",
    },
    {
      number: "7",
      title: "Post-Audit Advisory",
      description: "Support remediation and ongoing compliance maintenance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Indonesia | Reliable SOC 1 Compliance & Audit
          Readiness – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain SOC 1 Certification in Indonesia? First Cert offers complete SOC 1 consulting services covering financial control evaluation, documentation development, readiness assessments, and audit coordination to support dependable financial reporting assurance."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Indonesia, SOC 1 consultants in Indonesia, SOC 1 audit Indonesia, SOC 1 Type 1 certification Indonesia, SOC 1 Type 2 certification Indonesia, SOC 1 compliance Indonesia, SOC 1 certification cost in Indonesia, SOC 1 implementation Indonesia, SOC 1 documentation Indonesia, SOC 1 audit support Indonesia, financial reporting controls Indonesia, First Cert SOC 1 consultants, SOC 1 certification for IT companies Indonesia, SOC 1 for service organizations Indonesia, SOC 1 attestation Indonesia, SOC 1 consulting company Indonesia."
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
          <h1 className="main-title">SOC 1 Certification in Indonesia</h1>
          <p className="small-desc">
            Strengthening Financial Assurance and Client Trust
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
                src={imgsoc1}
                alt="soc1 Certification"
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
                <b>SOC 1 Certification in Indonesia</b> enables service
                organizations to demonstrate that their internal processes and
                controls support accurate client financial reporting. As
                Indonesia continues to expand its role in outsourcing, fintech,
                shared services, and technology-enabled operations, customers
                increasingly expect formal assurance over financial control
                environments.
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
                <b>First Cert</b>, works with organizations across Indonesia to
                design and implement SOC 1-aligned control structures that
                mirror real operational activities. Our methodology focuses on
                practical execution, clarity of responsibilities, and controls
                that stand up to independent audits.
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
            What SOC 1 Certification in Indonesia Involves?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Indonesia</b> is an independent assurance
            engagement conducted in accordance with the AICPA SSAE 18 standard.
            The assessment evaluates whether controls related to financial
            reporting are appropriately designed and, in the case of Type 2
            reports, operating effectively over a defined period. SOC 1 reviews
            commonly address:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Financial transaction processing and data accuracy</h5>
            </div>

            <div class="vapt-card">
              <h5>Logical access and system controls impacting finance</h5>
            </div>
            <div class="vapt-card">
              <h5>Change management for financial applications</h5>
            </div>
            <div class="vapt-card">
              <h5>Reconciliation, monitoring, and exception handling</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 1 compliance confirms that financial-impacting services are
            managed with consistency, transparency, and accountability.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs SOC 1 Certification in Indonesia?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Indonesia is essential for organizations
                whose services influence client financial statements, including:
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
                        <a href="iso-9001-certification-in-Indonesia">
                          ISO 9001 Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-indonesia">
                          ISO 27001 Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-indonesia">
                          CMMI Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-indonesia">
                          HIPAA Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-indonesia">
                          VAPT Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-indonesia">
                          GDPR Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-indonesia">
                          SOC 1 Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-indonesia">
                          SOC 2 Certification in Indonesia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For organizations serving multinational or audit-driven clients,
              SOC 1 reports are often a contractual or regulatory requirement.
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
                Business Benefits of SOC 1 Certification in Indonesia
              </h1>
            </div>
          </div>

          <p
            className="text-center"
            style={{
              color: "#000000",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            Organizations that achieve SOC 1 Certification in Indonesia gain
            tangible operational and commercial advantages:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="soc1 Benefits"
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
                SOC 1 certification strengthens both operational discipline and
                market credibility.
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
                SOC 1 Certification Framework in Indonesia with{" "}
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
                First Cert follows a structured, audit-aligned methodology to
                ensure smooth SOC 1 readiness and certification:
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
          <p
            className="text-center"
            style={{
              color: "#000000",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            This approach ensures organizations are fully prepared before
            entering the formal audit phase.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Indonesia
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
                  The cost of SOC 1 Certification in Indonesia depends on
                  several factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Complexity and scale of service operations
                  </li>
                  <li className="check">
                    Number of financial processes and systems in scope
                  </li>
                  <li className="check">
                    Existing maturity of internal controls
                  </li>
                  <li className="check">
                    Type of SOC 1 report required (Type 1 or Type 2)
                  </li>
                  <li className="check">
                    Duration of testing and audit activities
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a clear,
                  customized, and transparent cost estimate.
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
                  Get SOC 1 Certification in Indonesia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Indonesia,
                  supporting service organizations with end-to-end readiness,
                  documentation, and audit facilitation. Our consultants align
                  SOC 1 requirements with operational realities to ensure
                  efficient audits and lasting compliance value.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  financial governance, enhance audit readiness, and build
                  lasting confidence with clients and stakeholders.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your SOC 1
                  Certification journey in Indonesia with First Cert and
                  demonstrate integrity, reliability, and global assurance
                  excellence.
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

export default IndonesiaSoc1;
