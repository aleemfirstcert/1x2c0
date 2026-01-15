import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/middle-east/iraq/9001-img.webp";
import benefits9001 from "../../../assets/img/country/middle-east/iraq/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Iraq9001() {
  const benefits = [
    "Improved consistency and control across business processes",
    "Higher levels of customer satisfaction and trust",
    "Better alignment with contractual, regulatory, and tender requirements",
    "Reduced errors, rework, and operational disruptions",
    "Enhanced reputation in domestic and international markets",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Certification Scope Definition",
      description: "Identify boundaries, processes, and quality objectives",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Assess current practices against ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Design & Documentation",
      description: "Develop policies, procedures, and process controls",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Assist teams in applying quality practices effectively",
    },
    {
      number: "5",
      title: "Internal Audits & Reviews",
      description: "Conduct audits and management evaluations",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Coordinate Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Post-Certification Support",
      description: "Support system maintenance and continual improvement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Iraq | Trusted Quality Management Consulting
          Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 9001 Certification in Iraq? First Cert provides end-to-end ISO 9001 consulting solutions, including quality system design, operational optimization, workforce training, and certification audit support to help organizations achieve consistent quality and sustainable business improvement."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Iraq, ISO 9001 consultants Iraq, ISO 9001 certification cost Iraq, ISO 9001 implementation Iraq, ISO certification services Iraq, ISO 9001 training Iraq, ISO 9001 documentation Iraq, Quality Management System Iraq, QMS certification Iraq, ISO 9001 audit Iraq, ISO consultants Iraq, First Cert ISO 9001 Iraq, ISO quality certification Iraq, ISO 9001 for companies Iraq"
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
          <h1 className="main-title">ISO 9001 Certification in Iraq</h1>
          <p className="small-desc">
            Driving Quality, Efficiency, and Reliability
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
                alt="ISO 9001 Certification in Iraq"
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
                <b>ISO 9001 Certification in Iraq</b> supports organizations in
                establishing structured quality management practices that
                improve operational control, customer satisfaction, and
                long-term performance. As Iraq continues to rebuild and expand
                across construction, energy, manufacturing, logistics,
                healthcare, and service sectors, ISO 9001 certification has
                become an important benchmark for reliability and professional
                credibility.
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
                <b>First Cert</b> partners with organizations across Iraq to
                implement ISO 9001 systems that are aligned with real business
                operations. Our focus is on practical process improvement and
                performance outcomes rather than paperwork-driven compliance.
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
                What ISO 9001 Certification in Iraq Means
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Iraq</b> confirms that an
                organization has implemented a Quality Management System that
                meets the requirements of the international ISO 9001 standard.
                The framework enables organizations to manage risks, standardize
                workflows, and continuously improve products and services.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Core elements of ISO 9001 include:
              </p>

              <ul className="iso-list">
                {[
                  "Clearly defined and controlled operational processes",
                  "Strong focus on customer needs and expectations",
                  "Leadership accountability and strategic quality planning",
                  "Risk-based thinking to prevent failures and inefficiencies",
                  "Measurement, analysis, and continual improvement mechanisms",
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
                Certification demonstrates that quality management is embedded
                into everyday decision-making and organizational culture.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Sectors in Iraq Benefiting from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Iraq is applicable to organizations of
                all sizes and industries, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing facilities and industrial service providers",
                  "Oil, gas, and energy-sector contractors",
                  "Construction firms and infrastructure development projects",
                  "Transportation, logistics, and supply chain companies",
                  "IT service providers, startups, and digital businesses",
                  "Hospitals, clinics, and healthcare support organizations",
                  "Training institutes, professional firms, and consultancies",
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
                By adopting ISO 9001, Iraqi organizations can reduce
                inefficiencies, improve service consistency, and build stronger
                confidence among clients and stakeholders.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
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
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of ISO 9001 Certification in Iraq
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in Iraq gain
                several operational and commercial advantages, such as:
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
                alt="ISO 9001 Benefits in Iraq"
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
            ISO 9001 encourages a culture of accountability, clarity, and
            continuous improvement across all organizational levels.
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
                First Cert's ISO 9001 Implementation Methodology in Iraq
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert follows a structured yet flexible ISO 9001 consulting
                approach tailored to Iraqi organizations:
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
          ISO 9001 Certification Cost in Iraq
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
                  The cost of ISO 9001 Certification in Iraq depends on factors
                  such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Nature and complexity of business activities
                  </li>
                  <li className="check">
                    Scope of certification and number of locations
                  </li>
                  <li className="check">
                    Existing quality controls and documentation
                  </li>
                  <li className="check">
                    Training needs and certification audit scope
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an initial assessment to provide a
                  clear, customized, and transparent cost estimate aligned with
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
                  Achieve ISO 9001 Certification in Iraq with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in Iraq,
                  delivering complete support from initial evaluation through
                  certification and ongoing improvement. Our consultants focus
                  on simplifying ISO requirements while ensuring real
                  operational value and audit confidence.
                </div>
                <div className="title small-title">
                  By working with First Cert, organizations strengthen quality
                  governance, improve performance consistency, and build a
                  foundation for sustainable growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Iraq with First
                  Cert and demonstrate a strong commitment to quality excellence
                  and continuous improvement.
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

export default Iraq9001;
