import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/asia/maldives/27001-img.webp";
import benefits27001 from "../../../assets/img/country/asia/maldives/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Maldives27001() {
  const benefits = [
    "Lower risk of data breaches and cyber incidents",
    "Improved visibility into security threats and controls",
    "Increased confidence from customers and global partners",
    "Better incident response and disaster recovery readiness",
    "Stronger alignment with global cybersecurity standards",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT service providers, SaaS companies, and software firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting providers and data centers",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech platforms, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, clinics, and health-tech organizations",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and online service providers",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and outsourcing companies",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Universities, research institutions, and training bodies",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Maldives | Information Security & ISMS
          Advisory Services – First Cert
        </title>
        <meta
          name="description"
          content="Need ISO 27001 Certification in Maldives? First Cert offers professional ISMS consulting including security risk reviews, governance design, control implementation, and audit support to help organizations protect critical information and meet global compliance standards."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Maldives, ISO 27001 consultants Maldives, ISO 27001 certification cost Maldives, ISO 27001 implementation Maldives, ISMS certification Maldives, ISO 27001 audit Maldives, ISO 27001 documentation Maldives, information security consultants Maldives, ISO 27001 training Maldives, ISO certification services Maldives, First Cert ISO 27001 Maldives, cybersecurity compliance Maldives, ISO 27001 for IT companies Maldives, data protection certification Maldives"
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
          <h1 className="main-title">ISO 27001 Certification in Maldives</h1>
          <p className="small-desc">
            Securing Digital Assets and Business Data
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
                src={img27001}
                alt="ISO 27001 Certification in Maldives"
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
                <b>ISO 27001 Certification in Maldives</b> helps organizations
                create a structured framework to protect sensitive information
                from cyber threats, misuse, and unauthorized access. As Maldives
                continues to expand across tourism technology, financial
                services, healthcare, government systems, cloud computing, and
                online business platforms, data security has become a core
                requirement for trust and compliance.
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
                <b>First Cert</b> supports businesses in Maldives by building
                Information Security Management Systems that fit real
                operational environments rather than theoretical policies.
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
          {/* HEADING 1 */}
          <h2
            className="details-title text-primary"
            style={{ fontSize: "1.8rem" }}
          >
            What ISO 27001 Certification in Maldives Demonstrates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Maldives</b> confirms that an
            organization follows an internationally accepted Information
            Security Management System. It ensures that risks to data, systems,
            and business operations are identified, evaluated, and controlled
            through defined security practices.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A well-implemented ISMS helps protect:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Customer, employee, and partner personal information</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial and operational records</h5>
            </div>

            <div className="vapt-card">
              <h5>IT networks, cloud platforms, and applications</h5>
            </div>

            <div className="vapt-card">
              <h5>Intellectual property and confidential business data</h5>
            </div>

            <div className="vapt-card">
              <h5>Digital communication and transaction systems</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification proves that information security is actively managed,
            monitored, and continuously improved.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Maldives That Require ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Maldives is valuable for any organization
            handling sensitive or regulated data, including:
          </p>

          <div className="row g-4">
            {/* LEFT: Industry Cards */}
            <div className="col-lg-9">
              <div className="row g-4">
                {industryData.map((item, index) => (
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
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-maldives">
                      ISO 9001 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-maldives">
                      ISO 27001 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-maldives">
                      CMMI Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-maldives">
                      HIPAA Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-maldives">
                      VAPT Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-maldives">
                      GDPR Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-maldives">
                      SOC 1 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-maldives">
                      SOC 2 Certification in Maldives
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          ISO 27001 allows organizations in Maldives to meet client security
          expectations and international compliance requirements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Value of ISO 27001 Certification in Maldives
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain ISO 27001 Certification in Maldives
                benefit from:
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
                src={benefits27001}
                alt="ISO 27001 Benefits in Maldives"
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
            ISO 27001 turns cybersecurity into a strategic advantage rather than
            a reactive expense.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Consulting Approach in Maldives
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
            First Cert delivers ISO 27001 services in Maldives using a practical
            and risk-based framework:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scope Definition</h4>
                <p>Identify systems, data, and boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk Assessment</h4>
                <p>Analyze threats, vulnerabilities, and business impact</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Security Framework Design</h4>
                <p>Create policies and risk treatment plans</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation</h4>
                <p>Apply technical, physical, and administrative safeguards</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Review</h4>
                <p>Test system effectiveness and leadership oversight</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Prepare for Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continuous Improvement</h4>
                <p>Maintain and strengthen ISMS maturity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Maldives
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
                  The cost of ISO 27001 Certification in Maldives depends on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">Company size and operational scale</li>
                  <li className="check">
                    Amount and sensitivity of data handled
                  </li>
                  <li className="check">
                    IT infrastructure, cloud usage, and integrations
                  </li>
                  <li className="check">
                    Scope of ISMS documentation and controls
                  </li>
                  <li className="check">
                    Training, audits, and certification support required
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a readiness assessment to provide a
                  transparent and customized cost estimate.
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
                  Get ISO 27001 Certified in Maldives with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Maldives, supporting organizations from initial security
                  review through certification and ongoing compliance. Our
                  consultants focus on real-world risk reduction, audit-ready
                  documentation, and long-term protection of business data.
                </div>

                <div className="title small-title">
                  By working with First Cert, organizations in Maldives can
                  strengthen information security governance, meet international
                  compliance expectations, and build lasting digital trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Maldives with
                  First Cert and demonstrate your commitment to secure,
                  reliable, and globally aligned information security.
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

export default Maldives27001;
