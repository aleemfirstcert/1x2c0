import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/middle-east/iraq/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/middle-east/iraq/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IraqCmmi() {
  const benefits = [
    "Improved predictability of project schedules and outcomes",
    "Greater visibility into cost, quality, and performance trends",
    "Reduced rework, delays, and execution risks",
    "Stronger organizational learning and knowledge retention",
    "Enhanced credibility with global clients and institutional buyers",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Capability Baseline Assessment",
      description: "Determine current maturity and improvement priorities",
    },
    {
      number: "2",
      title: "Process Alignment Review",
      description: "Map existing practices to CMMI model expectations",
    },
    {
      number: "3",
      title: "Process Framework Design",
      description:
        "Develop SOPs, workflows, metrics, and governance structures",
    },
    {
      number: "4",
      title: "Team Coaching & Enablement",
      description: "Drive adoption within live projects and operations",
    },
    {
      number: "5",
      title: "Readiness Assessment",
      description: "Conduct internal evaluations and mock appraisals",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Coordinate and support formal appraisal execution",
    },
    {
      number: "7",
      title: "Post-Appraisal Improvement",
      description: "Guide maturity progression and sustained optimization",
    },
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development companies and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Digital product companies and SaaS organizations",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, construction, and technical consulting firms",
    },
    {
      icon: "bi bi-hdd-network",
      title: "System integrators and managed service providers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and industrial organizations",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title:
        "Startups targeting enterprise, public-sector, or international contracts",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Iraq | Structured Process Excellence & Appraisal
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve CMMI Certification in Iraq? First Cert delivers comprehensive CMMI consulting services, including capability assessment, process optimization, team coaching, and full appraisal readiness support to help organizations attain CMMI Maturity Levels 2, 3, or 5 with clarity and confidence."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Iraq, CMMI consultants Iraq, CMMI Level 2 Iraq, CMMI Level 3 Iraq, CMMI Level 5 Iraq, CMMI appraisal Iraq, CMMI implementation Iraq, CMMI certification cost Iraq, CMMI consulting firm Iraq, SCAMPI appraisal Iraq, CMMI training Iraq, CMMI documentation Iraq, process maturity Iraq, Capability Maturity Model Integration Iraq, CMMI for IT companies Iraq, CMMI for startups Iraq, First Cert CMMI Iraq"
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
          <h1 className="main-title">CMMI Certification in Iraq</h1>
          <p className="small-desc">
            Driving Consistency, Control, and Operational Excellence
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
                alt="CMMI Certification in Iraq"
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
                <b>CMMI Certification in Iraq</b> helps organizations establish
                disciplined, repeatable, and measurable processes that improve
                delivery outcomes and operational stability. As Iraqi
                organizations expand across IT services, engineering,
                telecommunications, manufacturing, outsourcing, and
                government-driven projects, strong process maturity is
                increasingly essential for predictable performance and
                stakeholder confidence.
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
                <a href="/">First Cert</a> works closely with organizations
                across Iraq to implement CMMI frameworks that are practical and
                results-oriented. Our focus is on embedding maturity into daily
                execution, enabling teams to perform consistently rather than
                merely preparing for appraisal compliance.
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
            What CMMI Certification in Iraq Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Iraq</b> is based on the globally
            recognized Capability Maturity Model Integration framework governed
            by ISACA. The appraisal evaluates how effectively an organization
            defines, manages, measures, and improves its processes across
            projects, services, and operational functions.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            CMMI strengthens organizational capability in areas such as:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Standardized and governed enterprise processes</h5>
            </div>

            <div className="vapt-card">
              <h5>Reliable project planning, estimation, and monitoring</h5>
            </div>

            <div className="vapt-card">
              <h5>Objective quality assurance and performance measurement</h5>
            </div>

            <div className="vapt-card">
              <h5>Risk anticipation and proactive mitigation</h5>
            </div>

            <div className="vapt-card">
              <h5>Continuous improvement through data-driven insights</h5>
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
            Achieving CMMI maturity demonstrates that operational success is
            built on structured and repeatable practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Iraq That Benefit from CMMI
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI Certification in Iraq is well suited for organizations seeking
            to enhance execution maturity and competitive positioning,
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
                    <a href="iso-9001-certification-in-iraq">
                      ISO 9001 Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-iraq">
                      ISO 27001 Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-iraq">
                      CMMI Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-iraq">
                      HIPAA Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-iraq">
                      VAPT Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-iraq">
                      GDPR Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-iraq">
                      SOC 1 Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-iraq">
                      SOC 2 Certification in Iraq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Iraqi organizations, CMMI maturity is a decisive factor in
          winning large-scale and long-term engagements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Impact of CMMI Certification in Iraq
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving CMMI Certification in Iraq gain
                measurable operational and strategic advantages, including:
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
                alt="CMMI Benefits in Iraq"
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
            CMMI enables organizations to scale confidently while maintaining
            control and consistency.
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
                First Cert's CMMI Implementation Methodology in Iraq
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
                First Cert follows a structured yet flexible CMMI consulting
                approach tailored to organizational realities in Iraq:
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
          CMMI Certification Cost in Iraq
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
                  The cost of CMMI Certification in Iraq depends on multiple
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Target maturity level (Level 2, Level 3, or Level 5)
                  </li>
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">Number and type of active projects</li>
                  <li className="check">
                    Scope of training, mentoring, and documentation
                  </li>
                  <li className="check">
                    SCAMPI appraisal effort and duration
                  </li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an initial maturity evaluation to
                  deliver a clear, customized, and transparent cost proposal
                  aligned with business goals.
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
                  Get CMMI Certified in Iraq with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Iraq,
                  supporting organizations in building strong process capability
                  and achieving measurable performance improvement. Our
                  consultants ensure that CMMI practices align with strategic
                  objectives and deliver value well beyond certification.
                </div>

                <div className="title small-title">
                  From early-stage assessments to appraisal completion and
                  continuous maturity advancement, First Cert helps
                  organizations in Iraq establish predictable delivery, scalable
                  operations, and long-term competitive strength.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your CMMI Certification journey in Iraq with First Cert
                  and build a solid foundation for operational discipline,
                  sustainable growth, and global competitiveness.
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

export default IraqCmmi;
