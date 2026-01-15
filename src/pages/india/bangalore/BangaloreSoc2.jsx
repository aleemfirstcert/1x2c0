import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/india/bangalore/soc2-bangalore.jpg";
import benefitsSoc2 from "../../../assets/img/country/india/bangalore/soc2-benefits.jpg";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function BangaloreSoc2() {
  const benefits = [
    "Strengthens data security and cyber resilience.",
    "Improves customer trust and retention.",
    "Ensures compliance with global security standards.",
    "Reduces operational risks and vulnerabilities.",
    "Helps win international clients and large enterprise contracts.",
    "Enhances your brand’s credibility and competitive advantage.",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT & Software Companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS & Cloud Service Providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech & BFSI Organizations",
    },
    {
      icon: "bi-hdd-network",
      title: "Data Centers & Hosting Providers",
    },
    {
      icon: "bi-headset",
      title: "BPOs & KPOs",
    },
    {
      icon: "bi-heart-pulse",
      title: "Healthcare Tech Companies",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce & Digital Service Providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description:
        "We understand your business model and SOC 2 requirements to create a customized compliance roadmap.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Experts analyze your current security posture and identify gaps against SOC 2 Trust Service Criteria.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "We help prepare detailed SOC 2 documents — policies, procedures, risk assessments, and security controls.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "Your security controls are implemented effectively through training, process improvements, and monitoring systems.",
    },

    {
      number: "5",
      title: "Internal Audit",
      description:
        "An internal audit is conducted to verify readiness and ensure all SOC 2 requirements are met.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description:
        "An accredited CPA auditor performs the final audit for SOC 2 Type 1 or SOC 2 Type 2 certification.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "First Cert provides ongoing support, surveillance checks, and guidance to maintain continuous compliance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Bangalore | Affordable SOC 2 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking for SOC 2 Certification in Bangalore? First Cert offers expert SOC 2 consulting, documentation, audit readiness, and implementation support for secure and compliant operations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Bangalore, SOC 2 consultants in Bangalore, SOC 2 audit Bangalore, SOC 2 Type 1 certification Bangalore, SOC 2 Type 2 certification Bangalore, SOC 2 compliance Bangalore, SOC 2 consulting company Bangalore, SOC 2 certification cost in Bangalore, SOC 2 implementation Bangalore, SOC 2 documentation Bangalore, SOC 2 audit support Bangalore, SOC 2 security compliance Bangalore, First Cert SOC 2 consultants, SOC 2 certification for IT companies Bangalore, SOC 2 for SaaS companies Bangalore, SOC 2 cybersecurity certification Bangalore."
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
          <h1 class="main-title">SOC 2 Certification in Bangalore</h1>
          <p class="small-desc">
            Your Path to Security, Trust, and Compliance
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
                src={imgsoc2}
                alt="soc2 Certification"
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
                Achieve <b>SOC 2 Certification in Bangalore</b> with expert
                consultants from First Cert. We help businesses strengthen their
                information security controls and demonstrate trust,
                reliability, and data protection to clients. Our end-to-end SOC
                2 compliance services — including documentation, implementation,
                risk assessment, and audit preparation — make SOC 2
                certification simple, efficient, and cost-effective. Build
                customer confidence and stay ahead of competitors with a
                globally recognized security compliance standard.
              </p>
            </div>

            <EnquiryForm />
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
            What is SOC 2 Certification in Bangalore?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 Certification in Bangalore is a globally recognized compliance
            standard designed to ensure that service organizations securely
            manage customer data. Based on the{" "}
            <b>AICPA Trust Service Criteria</b> — Security, Availability,
            Processing Integrity, Confidentiality, and Privacy — SOC 2 helps
            businesses establish strong internal controls and cybersecurity
            practices.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Whether you operate a SaaS company, IT services, cloud hosting,
            fintech, healthcare, or outsourcing firm, SOC 2 Certification
            ensures your organization follows robust security and compliance
            frameworks. Businesses in Bangalore gain improved credibility,
            stronger risk management, and enhanced customer trust by becoming
            SOC 2 compliant.
          </p>

          <section class="vapt-section py-5">
            <div class="container">
              <h2 class="vapt-title text-center mb-3">
                Which Businesses Need SOC 2 Certification in Bangalore?
              </h2>
              <p
                class="vapt-subtitle text-center mb-5"
                style={{ fontWeight: "400" }}
              >
                SOC 2 Certification is essential for organizations that store,
                process, or manage customer data. This includes:
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
                        <a href="iso-9001-certification-in-bangalore">
                          ISO 9001 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-bangalore">
                          ISO 27001 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-bangalore">
                          CMMI Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-bangalore">
                          HIPAA Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-bangalore">
                          VAPT Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-bangalore">
                          GDPR Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-bangalore">
                          SOC 1 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-bangalore">
                          SOC 2 Certification in Bangalore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p class="vapt-footer text-center mt-4">
                Businesses seeking international clients, especially in the U.S.
                and Europe, often require SOC 2 Compliance to meet contract and
                security expectations.
              </p>
            </div>
          </section>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting SOC 2 Certification in Bangalore
              </h1>
            </div>
          </div>

          {/* First Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Achieving SOC 2 Certification delivers measurable business
                value:
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
                src={benefitsSoc2}
                alt="ISO 27001 Benefits"
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
            With <a href="/">First Cert</a>, companies in Bangalore achieve SOC
            2 Certification with ease — ensuring compliance, trust, and
            long-term business growth.
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
                SOC 2 Certification in Bangalore – Simplified Process with First
                Cert
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                Achieving SOC 2 Certification in Bangalore with First Cert is
                streamlined, structured, and efficient. Our experts guide you
                through every stage of your SOC 2 compliance journey.
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

      <div className="iso-cost-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold display-6 text-dark">
                How Much Does SOC 2 Certification Cost in Bangalore?
              </h2>
            </div>
          </div>

          {/* Two Columns */}
          <div className="row g-4">
            {/* LEFT COLUMN */}
            {/* LEFT COLUMN */}
            <div className="col-lg-6">
              <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                <p className="mt-3 text-muted" style={{ fontWeight: "400" }}>
                  SOC 2 Certification cost varies depending on:
                </p>
                <ul className="iso-list">
                  {[
                    "Size of the company",
                    "Nature of services (SaaS, IT, cloud, fintech, etc.)",
                    "Number of Trust Service Criteria in scope",
                    "Complexity of IT systems and security controls",
                    "Documentation and audit readiness",
                    "Type of SOC 2 report (Type 1 or Type 2)",
                    "Number of audit days required",
                  ].map((item, index) => (
                    <li key={index} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-muted" style={{ fontWeight: "400" }}>
                  Experienced SOC 2 consultants in Bangalore evaluate these
                  factors to provide a transparent, customized cost estimate.
                  With First Cert, you get cost-effective consulting tailored to
                  your company’s needs.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                <h4 className="fw-bold text-primary mb-3">
                  Achieve SOC 2 Certification in Bangalore with First cert –
                  Your Trusted Partner in Security Compliance
                </h4>

                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  If you want to achieve <b>SOC 2 Certification in Bangalore</b>
                  , First Cert is your trusted partner for end-to-end guidance
                  and expert consulting. We help organizations build strong
                  security frameworks aligned with SOC 2 standards, ensuring
                  data protection, risk reduction, and compliance.
                </p>
                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  With experience across SaaS, fintech, cloud services, IT
                  companies, and more, First Cert delivers smooth, affordable,
                  and result-oriented SOC 2 compliance services. From
                  documentation and training to implementation and audit
                  preparation — we ensure a seamless certification journey.
                </p>
                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  Start your SOC 2 Certification journey today with First Cert —
                  your partner in achieving security excellence and global
                  compliance.
                </p>
                {/* CONTACT BUTTON */}
                <div className="mt-4 text-start">
                  <a
                    href="mailto:info@firstcertification.com"
                    className="contact-btn btn btn-primary rounded-pill w-100 text-center"
                    style={{
                      fontSize: "0.85rem",
                      padding: "10px 12px",
                      whiteSpace: "normal",
                      lineHeight: "1.4",
                    }}
                  >
                    Contact Us — info@firstcertification.com
                  </a>
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

export default BangaloreSoc2;
