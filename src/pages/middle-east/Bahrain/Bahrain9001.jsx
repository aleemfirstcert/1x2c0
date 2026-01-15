import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/middle-east/bahrain/9001-img.webp";
import benefits9001 from "../../../assets/img/country/middle-east/bahrain/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Bahrain9001() {
  const benefits = [
    "Improved process consistency and efficiency",
    "Increased customer satisfaction and retention",
    "Better compliance with contractual and regulatory expectations",
    "Lower operational risks and reduced rework",
    "Enhanced credibility in tenders, partnerships, and audits",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Establish certification boundaries and quality objectives",
    },
    {
      number: "2",
      title: "Gap Assessment",
      description: "Review existing systems against ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Development",
      description: "Create customized policies, procedures, and controls",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Guide teams in applying quality practices",
    },
    {
      number: "5",
      title: "Internal Audits",
      description: "Perform audits and management reviews",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description: "Support Stage 1 and Stage 2 certification audits",
    },
    {
      number: "7",
      title: "Ongoing Improvement",
      description: "Assist in maintaining and strengthening the QMS",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Bahrain | Professional Quality Management
          Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain ISO 9001 Certification in Bahrain? First Cert delivers expert ISO 9001 consulting services, covering QMS development, process alignment, staff training, and complete audit assistance to help organizations achieve reliable and measurable quality outcomes."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Bahrain, ISO 9001 consultants Bahrain, ISO 9001 certification cost Bahrain, ISO 9001 implementation Bahrain, ISO certification services Bahrain, ISO 9001 training Bahrain, ISO 9001 documentation Bahrain, Quality Management System Bahrain, QMS certification Bahrain, ISO 9001 audit Bahrain, ISO consultants Bahrain, First Cert ISO 9001 Bahrain, ISO quality certification Bahrain, ISO 9001 for businesses Bahrain"
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
          <h1 className="main-title">ISO 9001 Certification in Bahrain</h1>
          <p className="small-desc">
            Strengthening Quality and Business Performance
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
                alt="ISO 9001 Certification in Bahrain"
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
                <b>ISO 9001 Certification in Bahrain</b> enables organizations
                to establish dependable quality management systems that drive
                efficiency, consistency, and customer confidence. With Bahrain's
                growing focus on industrial development, financial services,
                logistics, healthcare, construction, and professional sectors,
                ISO 9001 has become a key requirement for organizations seeking
                credibility and long-term competitiveness.
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
                <b>First Cert</b> supports businesses across Bahrain by
                designing ISO 9001 systems that reflect actual operational
                practices. Our approach prioritizes practical application,
                performance improvement, and audit readiness rather than complex
                or unnecessary documentation.
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
                Understanding ISO 9001 Certification in Bahrain
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Bahrain</b> confirms that an
                organization has implemented a Quality Management System
                compliant with internationally recognized ISO standards. The
                framework helps businesses standardize operations, manage risks
                effectively, and drive continual improvement across all
                functions.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Key principles addressed under ISO 9001 include:
              </p>

              <ul className="iso-list">
                {[
                  "Clear and controlled business processes",
                  "Customer-focused quality objectives",
                  "Active leadership involvement and responsibility",
                  "Risk-based thinking to prevent quality issues",
                  "Ongoing performance monitoring and improvement",
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
                Achieving certification signals that quality management is
                embedded within everyday operations and decision-making.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Industries in Bahrain That Adopt ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Bahrain is suitable for organizations
                of all sizes and sectors, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing units and industrial service providers",
                  "Oil, gas, and energy-related contractors",
                  "Construction companies and infrastructure projects",
                  "Logistics, warehousing, and supply chain firms",
                  "IT services, fintech companies, and startups",
                  "Hospitals, clinics, and healthcare support services",
                  "Educational institutions and consultancy firms",
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
                By implementing ISO 9001, organizations in Bahrain can
                streamline workflows, reduce operational errors, and enhance
                stakeholder trust.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-bahrain">
                      ISO 9001 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-bahrain">
                      ISO 27001 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-bahrain">
                      CMMI Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-bahrain">
                      HIPAA Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-bahrain">
                      VAPT Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-bahrain">
                      GDPR Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-bahrain">
                      SOC 1 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-bahrain">
                      SOC 2 Certification in Bahrain
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
                Advantages of ISO 9001 Certification in Bahrain
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations certified to ISO 9001 in Bahrain experience
                multiple operational and strategic benefits, such as:
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
                alt="ISO 9001 Benefits in Bahrain"
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
            ISO 9001 promotes a culture of accountability, clarity, and
            continuous improvement across all levels of the organization.
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
                First Cert's ISO 9001 Consulting Approach in Bahrain
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert follows a systematic and business-driven ISO 9001
                implementation methodology:
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
          ISO 9001 Certification Cost in Bahrain
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
                  The cost of ISO 9001 Certification in Bahrain varies depending
                  on several elements, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and workforce strength
                  </li>
                  <li className="check">Complexity of business activities</li>
                  <li className="check">Scope and coverage of certification</li>
                  <li className="check">
                    Existing quality systems and documentation
                  </li>
                  <li className="check">
                    Training and certification audit requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial evaluation to provide a
                  transparent and tailored ISO 9001 cost estimate aligned with
                  your business needs.
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
                  Get ISO 9001 Certified in Bahrain with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Bahrain, offering end-to-end support from initial assessment
                  to certification and continuous improvement. Our consultants
                  simplify ISO requirements while ensuring measurable business
                  value and audit confidence.
                </div>
                <div className="title small-title">
                  Partnering with First Cert helps organizations build a robust
                  Quality Management System that supports sustainable growth,
                  operational excellence, and long-term customer satisfaction.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Bahrain with
                  First Cert and strengthen your organization's commitment to
                  quality and performance excellence.
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

export default Bahrain9001;
