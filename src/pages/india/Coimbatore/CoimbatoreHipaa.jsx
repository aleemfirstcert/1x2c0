import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/india/coimbatore/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/india/coimbatore/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function CoimbatoreHipaa() {
  const benefits = [
    "Reduced exposure to healthcare data breaches and violations",
    "Stronger oversight of patient and clinical information",
    "Enhanced trust from U.S. healthcare clients and partners",
    "Improved staff awareness and adherence to privacy standards",
    "Increased credibility in global healthcare markets",
    "Long-term compliance and operational resilience",
  ];

  const industryData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, clinics, and diagnostic centers",
    },
    {
      icon: "bi-telephone-plus",
      title: "Telemedicine and digital health service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical billing, revenue cycle, and health IT firms",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Clinical research laboratories and trial organizations",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical and life sciences companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS, cloud, and IT providers serving healthcare clients",
    },
    {
      icon: "bi-headset",
      title: "Outsourcing firms managing healthcare operations",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "PHI Identification",
      description: "Identify PHI creation, storage, and transmission points",
    },
    {
      number: "2",
      title: "Risk Assessment",
      description: "Conduct privacy and security risk assessments",
    },
    {
      number: "3",
      title: "Policy Development",
      description: "Develop HIPAA-compliant policies, procedures, and controls",
    },
    {
      number: "4",
      title: "Safeguard Implementation",
      description:
        "Implement technical, administrative, and physical safeguards",
    },
    {
      number: "5",
      title: "Employee Training",
      description: "Train employees on responsibilities and best practices",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Conduct internal reviews to validate compliance",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Provide ongoing support to maintain regulatory alignment",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Coimbatore | Healthcare Data Consulting – First
          Cert
        </title>
        <meta
          name="description"
          content="Obtain HIPAA Certification in Coimbatore with First Cert. We provide risk assessments, PHI safeguards, compliance documentation, and audit-ready HIPAA frameworks."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Coimbatore, HIPAA consultants Coimbatore, HIPAA compliance Coimbatore, HIPAA audit Coimbatore, HIPAA implementation Coimbatore, HIPAA certification cost Coimbatore, healthcare data protection Coimbatore, PHI security Coimbatore, HIPAA privacy rule Coimbatore, HIPAA security rule Coimbatore, First Cert HIPAA Coimbatore, healthcare IT compliance Coimbatore, HIPAA for IT companies Coimbatore"
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
          <h1 className="main-title">HIPAA Certification in Coimbatore</h1>
          <p className="small-desc">Ensuring Secure Healthcare Data</p>
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
                src={imghipaa}
                alt="HIPAA Certification in Coimbatore"
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
                <b>HIPAA Certification in Coimbatore</b> enables organizations
                handling U.S. healthcare data to operate under strict privacy
                and security standards. As Coimbatore grows in healthcare IT,
                medical billing, telemedicine, research labs, and cloud health
                solutions, compliance with HIPAA has become essential to engage
                U.S. healthcare clients confidently.
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
                <b>First Cert</b> assists Coimbatore organizations in
                implementing HIPAA programs that are practical, audit-ready, and
                aligned with real operational workflows.
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
            What HIPAA Certification in Coimbatore Ensures
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Coimbatore</b> validates that an
            organization follows the U.S. Health Insurance Portability and
            Accountability Act for managing Protected Health Information (PHI).
            It ensures patient and clinical data is protected through structured
            policies, technical controls, and operational procedures.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A HIPAA-compliant organization demonstrates:
          </p>

          <ul className="iso-list">
            {[
              "Clearly assigned responsibility for handling healthcare information",
              "Secure system access, data storage, and record management",
              "Robust technical, administrative, and physical safeguards",
              "Documented incident response and breach reporting",
              "Ongoing monitoring of data privacy and security risks",
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
            This confirms that sensitive healthcare data is protected, accurate,
            and managed responsibly.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Implement HIPAA in Coimbatore
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification in Coimbatore is required for organizations
                that handle U.S. healthcare data, including:
              </p>

              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
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

                {/* RIGHT SIDE INTERNAL LINKS BOX */}
                <div className="col-lg-3">
                  <div className="iso-links-box tall-sidebar">
                    <h5>Our Expertise</h5>
                    <ul>
                      <li>
                        <a href="iso-9001-certification-in-coimbatore">
                          ISO 9001 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-coimbatore">
                          ISO 27001 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-coimbatore">
                          CMMI Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-coimbatore">
                          HIPAA Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-coimbatore">
                          VAPT Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-coimbatore">
                          GDPR Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-coimbatore">
                          SOC 1 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-coimbatore">
                          SOC 2 Certification in Coimbatore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              HIPAA ensures Coimbatore organizations meet U.S. regulatory
              expectations and operate with confidence.
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
                Benefits of HIPAA Certification in Coimbatore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving HIPAA Certification in Coimbatore
                experience:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="HIPAA Benefits in Coimbatore"
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
              <br />
              <p
                className="text-center section-sub mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                HIPAA supports secure and sustainable healthcare operations
                while enhancing trust and efficiency.
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
                First Cert's HIPAA Consulting Approach in Coimbatore
              </h2>
              <p className="text-center section-sub mb-5">
                Our approach ensures practical compliance and operational
                alignment:
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
          HIPAA Certification Cost in Coimbatore
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
                  The cost of HIPAA Certification in Coimbatore depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and operational complexity
                  </li>
                  <li className="check">
                    Volume and sensitivity of healthcare data
                  </li>
                  <li className="check">
                    IT systems, cloud usage, and existing security measures
                  </li>
                  <li className="check">
                    Level of staff training, policy development, and
                    documentation
                  </li>
                  <li className="check">
                    Ongoing compliance management support
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides a detailed assessment and customized cost
                  estimate for your organization.
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
                  Get HIPAA Certified in Coimbatore with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner in
                  Coimbatore, assisting hospitals, IT firms, and outsourcing
                  companies with audit-ready compliance programs. Our experts
                  integrate HIPAA into daily operations, ensuring strong data
                  protection and regulatory alignment.
                </div>

                <div className="title small-title">
                  From risk evaluation to ongoing compliance support, Coimbatore
                  organizations can protect healthcare information, meet U.S.
                  standards, and establish lasting trust with clients.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your HIPAA Certification journey in Coimbatore with
                  First Cert and demonstrate your commitment to patient data
                  privacy, security, and global healthcare compliance.
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

export default CoimbatoreHipaa;
