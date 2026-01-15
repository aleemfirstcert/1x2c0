import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/india/delhi/9001-img.webp";
import benefits9001 from "../../../assets/img/country/india/delhi/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Delhi9001() {
  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "We start by understanding your business goals and ISO 9001 requirements to create a customized certification roadmap.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Our consultants identify process gaps and suggest improvements to align your system with ISO 9001 standards.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "We help prepare essential documents — policies, procedures, and records — that meet ISO 9001 compliance needs.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "Your Quality Management System (QMS) is implemented effectively with team training and process integration.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description:
        "An internal audit is conducted to evaluate readiness and ensure compliance before certification.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description:
        "An accredited auditor performs the final audit to verify full ISO 9001 compliance and issue certification.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "First Cert offers ongoing support and surveillance audits to maintain certification and drive continuous improvement.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Delhi | Affordable ISO 9001 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Want to know how to get ISO 9001 Certification in Delhi? First Cert offers expert consulting, training, documentation, and audit support for quality excellence."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Delhi, ISO 9001 consultants in Delhi, ISO 9001 certification cost in Delhi, ISO 9001 implementation in Delhi, ISO 9001 certification process Delhi, ISO certification consultants Delhi, ISO 9001 training in Delhi, ISO 9001 documentation Delhi, Quality Management System Delhi, QMS certification Delhi, ISO certification services Delhi, ISO 9001 audit support Delhi, affordable ISO certification Delhi, First Cert ISO consultants, ISO 9001 consulting company Delhi, ISO 9001 certification for manufacturing companies Delhi, ISO 9001 certification for IT companies Delhi, ISO 9001 quality certification Delhi"
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
          <h1 class="main-title">ISO 9001 Certification in Delhi</h1>
          <p class="small-desc">Your Path to Consistent Quality and Success</p>
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
                Achieve ISO 9001 Certification in Delhi with expert consultants
                from <strong>First Cert</strong>. We help businesses build
                strong Quality Management Systems (QMS) that improve process
                efficiency, ensure customer satisfaction, and drive continual
                growth. Our end-to-end support — from documentation to audit —
                makes ISO 9001 implementation in Delhi simple, affordable, and
                effective. Strengthen your brand credibility and stay ahead of
                competitors with a globally recognized quality certification.
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
                What is ISO 9001 Certification in Delhi?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Delhi</b> is an internationally
                recognized standard that sets out the criteria for a{" "}
                <b>Quality Management System (QMS)</b>. It helps organizations
                in Delhi streamline operations, minimize errors, and
                consistently deliver products and services that meet customer
                and regulatory requirements. Whether you operate in
                <b>
                  {" "}
                  manufacturing, IT, construction, healthcare, or education
                </b>
                , ISO 9001 ensures your business follows a structured,
                process-driven approach to achieve quality excellence and
                continual improvement.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                By getting ISO 9001 certified, Delhi-based businesses gain a
                strong reputation for reliability, operational efficiency, and
                customer-focused service — key factors for long-term growth and
                global competitiveness.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Which Businesses Need ISO 9001 Certification Implementation in
                Delhi?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Every organization that aims to improve efficiency, ensure
                customer satisfaction, and maintain consistent quality should
                consider <b>ISO 9001 Certification Implementation in Delhi</b>.
                This includes manufacturing units, IT companies, construction
                firms, healthcare providers, educational institutions, and
                service-based enterprises.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Implementing ISO 9001 standards helps Delhi businesses enhance
                process control, reduce waste, meet client expectations, and
                gain a competitive edge in both local and global markets.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-delhi">
                      ISO 9001 Certification in Delhi
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-delhi">
                      ISO 27001 Certification in Delhi
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-delhi">
                      CMMI Certification in Delhi
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-delhi">
                      HIPAA Certification in Delhi
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-delhi">
                      VAPT Certification in Delhi
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-delhi">
                      GDPR Certification in Delhi
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-delhi">
                      SOC 1 Certification in Delhi
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-delhi">
                      SOC 2 Certification in Delhi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 benefits-section">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* IMAGE SIDE */}
            <div className="col-lg-6">
              <img
                src={benefits9001}
                alt="ISO 9001 Certification Benefits"
                className="img-fluid rounded shadow-sm w-100"
                style={{
                  height: "100%", // take full height of column
                  maxHeight: "none", // remove maxHeight restriction
                  objectFit: "contain", // ensures whole image is visible
                }}
              />
            </div>

            {/* TEXT SIDE */}
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: "#0d6efd" }}>
                Benefits of Getting ISO 9001 Certification in Delhi
              </h2>

              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "1.05rem",
                  fontWeight: "400",
                  color: "#444",
                }}
              >
                Achieving <b>ISO 9001 Certification in Delhi</b> brings
                measurable value to businesses of all sizes. It ensures your
                processes meet international quality standards and helps your
                company stand out in a competitive market.
              </p>

              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "1.05rem",
                  fontWeight: "400",
                  color: "#444",
                }}
              >
                With{" "}
                <a href="/" style={{ fontWeight: "400" }}>
                  First Cert
                </a>
                , businesses in Delhi can achieve ISO 9001 certification
                smoothly — ensuring compliance, growth, and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="iso-process-section py-5 position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-light"
          style={{ marginTop: "-3rem" }}
        ></div>
        <div className="container position-relative">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="display-5 fw-bold text-dark mb-3">
                ISO 9001 Certification in Delhi – Simplified Process with{" "}
                <span style={{ color: "#0000ff" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                Achieving <b>ISO 9001 Certification in Delhi</b> with{" "}
                <b>First Cert</b> is simple, structured, and efficient. Our
                experts guide you through every stage to ensure full compliance
                and lasting quality improvement.
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
          How much does it cost to get ISO 9001 certified in Delhi?
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
                  The cost of ISO 9001 certification in Delhi varies from
                  company to company because every business has different
                  processes, team sizes, and operational needs. There is no
                  fixed price for certification.
                </div>
                <div className="title small-title-p">
                  The overall cost depends on several key factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size of the organization and number of employees
                  </li>
                  <li className="check">
                    Nature of operations (manufacturing, IT, services, trading,
                    etc.)
                  </li>
                  <li className="check">
                    Complexity and risk level of processes
                  </li>
                  <li className="check">
                    Existing documentation and process maturity
                  </li>
                  <li className="check">
                    Scope of certification (single department or full
                    organization)
                  </li>
                  <li className="check">
                    Internal audit and training requirements
                  </li>
                  <li className="check">
                    Number of audit days needed by the certification body
                  </li>
                </ul>

                <div className="title small-title">
                  ISO 9001 consultants in Delhi usually evaluate these factors
                  before giving a customized quotation. Working with an
                  experienced consultant ensures the certification is both
                  cost-effective and completed within a reasonable timeframe.
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
                  Achieve ISO 9001 Certification in Delhi with First Cert – Your
                  Trusted Partner for Quality Excellence
                </div>
                <div className="title small-title">
                  If you’re looking to achieve ISO 9001 Certification in Delhi,
                  First Cert is your trusted partner for expert guidance and
                  reliable certification support. We specialize in helping
                  organizations build a strong Quality Management System (QMS)
                  that aligns with ISO 9001 standards, enhancing efficiency,
                  consistency, and customer satisfaction.
                </div>

                <div className="title small-title">
                  With a proven track record across industries such as
                  manufacturing, IT, healthcare, and education, First Cert
                  offers customized consulting and implementation services
                  tailored to your business needs. Our experienced ISO 9001
                  consultants ensure a smooth certification journey — from
                  documentation and training to audit readiness and continual
                  improvement.
                </div>
                <div className="title small-title-p">
                  We are committed to delivering high-quality, affordable, and
                  result-oriented ISO consulting services that strengthen your
                  organization’s credibility and competitiveness.
                </div>
                <div className="title small-title-p">
                  Contact us today at info@firstcertification.com to start your
                  ISO 9001 Certification journey in Delhi with First Cert — your
                  partner in achieving process excellence and business growth.
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

export default Delhi9001;
