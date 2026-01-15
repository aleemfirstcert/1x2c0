import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/asia/maldives/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/asia/maldives/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MaldivesCmmi() {
  const benefits = [
    "Greater predictability in project delivery",
    "Improved control over costs, timelines, and resources",
    "Reduced rework, delays, and operational risks",
    "Better collaboration and knowledge continuity",
    "Increased trust from clients, investors, and partners",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Assessment",
      description: "Evaluate current practices and gaps",
    },
    {
      number: "2",
      title: "Process Engineering",
      description: "Design workflows aligned with CMMI",
    },
    {
      number: "3",
      title: "Governance Structure",
      description: "Define roles, controls, and performance indicators",
    },
    {
      number: "4",
      title: "Team Enablement",
      description: "Train teams on new standards and tools",
    },
    {
      number: "5",
      title: "Readiness Reviews",
      description: "Perform internal checks and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Support",
      description: "Coordinate and manage the official appraisal",
    },
    {
      number: "7",
      title: "Maturity Enhancement",
      description: "Support continuous improvement after certification",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development firms and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS platforms and digital solution companies",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and outsourcing organizations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, EPC, and consulting companies",
    },
    {
      icon: "bi bi-hdd-network",
      title: "Managed service providers and system integrators",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and industrial enterprises",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title: "Startups targeting enterprise and government clients",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Maldives | Process Excellence & Capability
          Growth Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Planning to get CMMI Certification in Maldives? First Cert provides professional CMMI consulting services including process evaluation, maturity roadmap development, performance improvement frameworks, and full SCAMPI appraisal assistance to help organizations achieve reliable and scalable operations."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Maldives, CMMI consultants Maldives, CMMI Level 2 Maldives, CMMI Level 3 Maldives, CMMI Level 5 Maldives, CMMI appraisal Maldives, CMMI implementation Maldives, CMMI certification cost Maldives, CMMI consulting company Maldives, SCAMPI appraisal Maldives, CMMI training Maldives, CMMI documentation Maldives, process maturity Maldives, Capability Maturity Model Integration Maldives, CMMI for IT companies Maldives, CMMI for startups Maldives, First Cert CMMI Maldives"
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
          <h1 className="main-title">CMMI Certification in Maldives</h1>
          <p className="small-desc">
            Driving Consistency, Quality, and Delivery Performance
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
                alt="CMMI Certification in Maldives"
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
                <b>CMMI Certification in Maldives</b> helps organizations
                transform the way they plan, execute, and improve their
                operations. As Maldivian businesses grow across software
                development, engineering services, outsourcing, manufacturing,
                and digital platforms, structured process management becomes
                essential to maintain quality, timelines, and customer
                satisfaction.
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
                <b>First Cert</b> works with organizations in Maldives to embed
                CMMI best practices directly into daily business activities,
                ensuring long-term operational stability instead of temporary
                compliance.
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
            What CMMI Certification in Maldives Validates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Maldives</b> confirms that an organization
            follows internationally recognized process maturity standards. It
            evaluates how well projects, teams, and management systems are
            designed, controlled, measured, and continuously refined.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A CMMI-aligned organization shows evidence of:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Defined and repeatable business processes</h5>
            </div>

            <div className="vapt-card">
              <h5>Reliable project planning and execution</h5>
            </div>

            <div className="vapt-card">
              <h5>Data-driven performance management</h5>
            </div>

            <div className="vapt-card">
              <h5>Strong governance and quality controls</h5>
            </div>

            <div className="vapt-card">
              <h5>Continuous improvement across departments</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{
              color: "#000000",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            This maturity ensures business results are driven by consistency
            rather than individual effort.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement CMMI in Maldives
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Maldives is ideal for organizations that want
            to improve delivery reliability and operational governance,
            including:
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
          For many Maldivian companies, CMMI maturity is a key requirement to
          compete in international and high-value markets.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Advantages of CMMI Certification in Maldives
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in Maldives
                experience:
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
                alt="CMMI Benefits in Maldives"
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
            CMMI builds a strong foundation for scaling without losing process
            discipline.
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
                First Cert's CMMI Implementation Framework in Maldives
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
                First Cert follows a results-driven CMMI approach tailored to
                Maldivian organizations:
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
          CMMI Certification Cost in Maldives
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
                  The investment for CMMI Certification in Maldives depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    The target maturity level (Level 2, 3, or 5)
                  </li>
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">
                    Number of projects and delivery models
                  </li>
                  <li className="check">
                    Training, coaching, and documentation effort
                  </li>
                  <li className="check">
                    Scope and duration of the SCAMPI appraisal
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a detailed maturity review to provide a
                  clear and customized cost plan.
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
                  Get CMMI Certified in Maldives with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a leading CMMI consulting partner in Maldives,
                  helping organizations strengthen process maturity and improve
                  performance across projects and departments. Our consultants
                  align CMMI practices with business goals to ensure lasting
                  results beyond certification.
                </div>

                <div className="title small-title">
                  From early diagnostics to SCAMPI appraisal and continuous
                  improvement, First Cert enables Maldivian organizations to
                  build stable operations, scalable delivery models, and strong
                  global credibility.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Maldives with First
                  Cert and create a powerful foundation for operational
                  excellence, predictable results, and international trust.
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

export default MaldivesCmmi;
