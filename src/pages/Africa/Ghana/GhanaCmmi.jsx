import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/africa/ghana/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/africa/ghana/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function GhanaCmmi() {
  const benefits = [
    "Higher predictability in project delivery timelines and outcomes",
    "Improved control over cost, quality, and performance indicators",
    "Reduced rework, delays, and execution uncertainty",
    "Stronger organizational learning and process continuity",
    "Increased confidence from global clients, investors, and partners",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Benchmarking",
      description: "Assess current capability levels and improvement gaps",
    },
    {
      number: "2",
      title: "Process Structuring",
      description: "Align existing workflows with CMMI model requirements",
    },
    {
      number: "3",
      title: "Framework Development",
      description: "Design SOPs, governance models, and measurement systems",
    },
    {
      number: "4",
      title: "Team Enablement",
      description: "Coach teams to apply CMMI practices in active projects",
    },
    {
      number: "5",
      title: "Internal Readiness Reviews",
      description: "Conduct gap analysis and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Coordination",
      description: "Support and manage formal appraisal activities",
    },
    {
      number: "7",
      title: "Post-Appraisal Enhancement",
      description: "Assist with continuous maturity progression",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development companies and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS vendors and digital product organizations",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service operations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, EPC, and technical consulting firms",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service providers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and industrial enterprises",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title:
        "Startups pursuing enterprise, government, or international contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Ghana | Organizational Maturity & Process
          Performance Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve CMMI Certification in Ghana? First Cert offers end-to-end CMMI consulting services, including maturity benchmarking, process standardization, capability building, and complete appraisal preparation to help organizations reach CMMI Maturity Levels 2, 3, or 5 with measurable and sustainable results."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Ghana, CMMI consultants Ghana, CMMI Level 2 Ghana, CMMI Level 3 Ghana, CMMI Level 5 Ghana, CMMI appraisal Ghana, CMMI implementation Ghana, CMMI certification cost Ghana, CMMI consulting company Ghana, SCAMPI appraisal Ghana, CMMI training Ghana, CMMI documentation Ghana, process maturity Ghana, Capability Maturity Model Integration Ghana, CMMI for IT companies Ghana, CMMI for startups Ghana, First Cert CMMI Ghana"
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
          <h1 className="main-title">CMMI Certification in Ghana</h1>
          <p className="small-desc">
            Enabling Consistent Delivery and Process Control
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
                alt="CMMI Certification in Ghana"
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
                <b>CMMI Certification in Ghana</b> helps organizations transform
                fragmented operational practices into structured, predictable,
                and continuously improving processes. As businesses in Ghana
                expand across software development, telecom, engineering
                services, manufacturing, government programs, and outsourcing,
                process maturity has become a key driver of delivery confidence
                and long-term growth.
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
                <b>First Cert</b> partners with organizations across Ghana to
                integrate CMMI principles into real operational environments.
                Our approach emphasizes execution discipline, leadership
                ownership, and measurable improvement rather than short-term
                appraisal-focused implementations.
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
            Understanding CMMI Certification in Ghana
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Ghana</b> is based on the internationally
            recognized Capability Maturity Model Integration framework governed
            by ISACA. The appraisal evaluates how effectively an organization
            defines, manages, monitors, and improves its processes across
            projects, services, and enterprise functions.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A well-executed CMMI program strengthens core organizational
            capabilities such as:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Standardization of project and operational workflows</h5>
            </div>

            <div className="vapt-card">
              <h5>Accurate planning, estimation, and performance tracking</h5>
            </div>

            <div className="vapt-card">
              <h5>Objective quality management and governance oversight</h5>
            </div>

            <div className="vapt-card">
              <h5>Early identification and mitigation of delivery risks</h5>
            </div>

            <div className="vapt-card">
              <h5>Data-driven decision-making and continuous improvement</h5>
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
            Achieving CMMI maturity demonstrates that business outcomes are
            driven by disciplined, repeatable, and measurable practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Ghana That Commonly Pursue CMMI
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Ghana is valuable for organizations seeking
            stronger execution control and competitive differentiation,
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

        <p className="text-center section-sub mb-5">
          For many organizations in Ghana, CMMI maturity is a deciding factor in
          securing complex, long-term, and high-value engagements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of CMMI Certification in Ghana
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve CMMI Certification in Ghana
                experience significant operational and strategic improvements,
                such as:
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
                alt="CMMI Benefits in Ghana"
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
            CMMI enables organizations to scale operations while maintaining
            consistency, transparency, and control.
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
                First Cert's CMMI Consulting Approach in Ghana
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
                First Cert follows a structured yet adaptable CMMI
                implementation methodology tailored to organizational realities
                in Ghana:
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
          CMMI Certification Cost in Ghana
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
                  The cost of CMMI Certification in Ghana varies depending on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">
                    Organization size and operational scope
                  </li>
                  <li className="check">
                    Number and complexity of ongoing projects
                  </li>
                  <li className="check">
                    Training, mentoring, and documentation requirements
                  </li>
                  <li className="check">
                    SCAMPI appraisal duration and assessor involvement
                  </li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert begins each engagement with a structured maturity
                  assessment to deliver a transparent and customized cost
                  estimate aligned with business objectives.
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
                  Get CMMI Certified in Ghana with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable CMMI consulting partner in Ghana,
                  supporting organizations in strengthening process capability
                  and achieving sustained performance improvement. Our
                  consultants align CMMI practices with business strategy to
                  ensure long-term value beyond certification.
                </div>

                <div className="title small-title">
                  From early-stage assessments to appraisal execution and
                  ongoing maturity advancement, First Cert helps organizations
                  in Ghana build predictable delivery models, scalable
                  operations, and lasting competitive advantage.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your CMMI Certification journey in Ghana with First Cert
                  and establish a strong foundation for operational discipline,
                  structured growth, and global credibility.
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

export default GhanaCmmi;
