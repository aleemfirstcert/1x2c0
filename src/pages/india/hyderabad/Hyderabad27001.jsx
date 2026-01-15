import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/india/hyderabad/27001-hyderabad.jpg";
import benefits27001 from "../../../assets/img/country/india/hyderabad/27001-benefits.jpg";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Hyderabad27001() {
  const benefits = [
    "Enhanced Information Security  – Protect sensitive company and customer data from breaches.",
    "Regulatory Compliance – Meet global and Indian data protection laws such as GDPR and the DPDP Act.",
    "Customer Trust and Brand Value – Show commitment to data protection, increasing client confidence.",
    "Risk Management – Identify, assess, and mitigate security risks effectively.",
    "Operational Efficiency – Implement structured processes and controls for stronger business resilience.",
    "Global Recognition – Gain credibility with clients and partners worldwide through ISO 27001 certification.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "We begin by understanding your business requirements, security challenges, and compliance needs.",
    },
    {
      number: "2",
      title: "Gap Assessment",
      description:
        "Our experts identify gaps and provide actionable recommendations aligned with ISO 27001 requirements.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "We prepare essential ISMS documents such as policies, procedures, risk registers, and security controls.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "Your ISMS framework is implemented with staff training and awareness programs.",
    },

    {
      number: "5",
      title: "Internal Audit",
      description:
        "We perform an internal audit to assess readiness before the certification audit.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description:
        "An accredited certification body conducts the final audit and issues ISO 27001 certification upon compliance.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "We offer ongoing monitoring, surveillance audit support, and continual improvement guidance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Hyderabad | Affordable ISO 27001
          Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking for ISO 27001 Certification in Hyderabad? First Cert provides expert consulting, documentation, training, and audit support to help you build a robust Information Security Management System (ISMS)."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Hyderabad, ISO 27001 consultants in Hyderabad, ISO 27001 certification cost in Hyderabad, ISO 27001 implementation in Hyderabad, ISO 27001 certification process Hyderabad, ISO certification consultants Hyderabad, ISO 27001 training in Hyderabad, ISO 27001 documentation Hyderabad, Information Security Management System Hyderabad, ISMS certification Hyderabad, ISO 27001 audit support Hyderabad, affordable ISO 27001 certification Hyderabad, First Cert ISO consultants, ISO 27001 consulting company Hyderabad, ISO 27001 certification for IT companies Hyderabad, ISO 27001 certification for startups Hyderabad, ISO 27001 information security certification Hyderabad."
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
          <h1 class="main-title">ISO 27001 Certification in Hyderabad</h1>
          <p class="small-desc">
            Your Path to Strong Information Security and Compliance
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
                src={img27001}
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
                Achieve <b>ISO 27001 Certification in Hyderabad</b> with the
                expert consultants at First Cert. We help organizations
                establish a robust Information Security Management System (ISMS)
                that safeguards data, ensures compliance, and builds customer
                trust. Our end-to-end support — from risk assessment and
                documentation to audit readiness — makes ISO 27001
                implementation in Hyderabad seamless, affordable, and effective.
                Strengthen your information security posture and stay compliant
                with global standards using ISO 27001 certification.
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
            What is ISO 27001 Certification in Hyderabad?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            ISO 27001 Certification in Hyderabad is an internationally
            recognized standard that defines best practices for establishing,
            implementing, maintaining, and continually improving an Information
            Security Management System (ISMS).
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            It helps organizations manage the security of assets such as
            financial information, intellectual property, employee data, and
            information entrusted by third parties.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Whether your business operates in IT, finance, healthcare,
            e-commerce, education, or manufacturing, ISO 27001 helps reduce data
            breaches, ensure regulatory compliance, and build stakeholder
            confidence.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By getting ISO 27001 certified, Hyderabad-based companies
            demonstrate their commitment to data protection, cybersecurity, and
            business continuity — critical for long-term trust and success.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Businesses Need ISO 27001 Certification Implementation in
            Hyderabad?
          </h2>

          <p className="text-center section-sub mb-5">
            Every organization that handles sensitive information or operates
            digitally should consider ISO 27001 Certification Implementation in
            Hyderabad. This includes:
          </p>
          <div className="row g-4">
            {/* LEFT SIDE CARDS */}
            <div className="col-lg-9">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-laptop iso-icon"></i>
                    <h4>IT and Software Development Companies</h4>
                    <p>
                      Including major IT firms and fast-growing tech startups
                      managing client data.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-cloud-check iso-icon"></i>
                    <h4>Cloud Service Providers</h4>
                    <p>
                      Companies offering SaaS, PaaS, or data hosting services.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-credit-card iso-icon"></i>
                    <h4>Financial Institutions and Fintech Startups</h4>
                    <p>
                      Including payment platforms, NBFCs, and banking technology
                      providers.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-hospital iso-icon"></i>
                    <h4>Healthcare Organizations </h4>
                    <p>
                      Hospitals, diagnostic labs, and health-tech startups
                      processing patient data.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-cart-check iso-icon"></i>
                    <h4>E-commerce and Retail Platforms</h4>
                    <p>
                      Online stores, delivery apps, and ERP-based retail
                      businesses managing customer information.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-mortarboard iso-icon"></i>
                    <h4>Educational Institutions</h4>
                    <p>
                      Universities, EdTech companies, and training centers
                      storing student and e-learning data.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="iso-card small-card">
                    <i className="bi bi-headset iso-icon"></i>
                    <h4>BPOs, KPOs, and Data Processing Firms</h4>
                    <p>
                      Organizations handling outsourced data, customer service,
                      and analytics operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE INTERNAL LINKS BOX */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar">
                <h5>Our Experties</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-hyderabad">
                      ISO 9001 Certification in Hyderabad
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-hyderabad">
                      ISO 27001 Certification in Hyderabad
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-hyderabad">
                      CMMI Certification in Hyderabad
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-hyderabad">
                      HIPAA Certification in Hyderabad
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-hyderabad">
                      VAPT Certification in Hyderabad
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-hyderabad">
                      GDPR Certification in Hyderabad
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-hyderabad">
                      SOC 1 Certification in Hyderabad
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-hyderabad">
                      SOC 2 Certification in Hyderabad
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          Implementing ISO 27001 helps these Hyderabad-based businesses protect
          confidential data, reduce cyber risks, and enhance customer trust —
          essential in today’s digital economy.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 27001 Certification in Hyderabad
              </h1>
              <p className="text-center section-sub mb-5">
                Achieving <b>ISO 27001 Certification in Hyderabad</b> offers
                significant strategic and operational advantages:
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
            With <a href="/">First Cert</a>, achieving{" "}
            <b>ISO 27001 Certification in Hyderabad</b> becomes a streamlined
            and value-driven experience — ensuring compliance, data integrity,
            and sustainable business growth.
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
                ISO 27001 Certification in Hyderabad – Simplified Process with
                First Cert
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                At First Cert, we follow a proven 7-step methodology to make ISO
                27001 certification smooth and effective:
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
          How Much Does It Cost to Get ISO 27001 Certified in Hyderabad?
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
                  ISO 27001 certification cost in Hyderabad varies based on:
                </div>

                <ul className="features">
                  <li className="check">Organization size</li>
                  <li className="check">
                    Type and sensitivity of data handled
                  </li>
                  <li className="check">
                    IT infrastructure and system complexity
                  </li>
                  <li className="check">Existing security controls</li>
                  <li className="check">Scope of certification</li>
                  <li className="check">
                    Training and internal audit requirements
                  </li>
                  <li className="check">Certification body fees</li>
                </ul>

                <div className="title small-title">
                  At <a href="/">First Cert</a>, we provide a customized
                  quotation after assessing your organization’s needs — ensuring
                  affordability without compromising quality.
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
                  Achieve ISO 27001 Certification in Hyderabad with First Cert –
                  Your Trusted Partner for Information Security Excellence
                </div>
                <div className="title small-title">
                  If you’re looking to achieve ISO 27001 Certification in
                  Hyderabad, First Cert is your reliable partner for expert
                  consulting and end-to-end certification support. We specialize
                  in developing strong Information Security Management Systems
                  (ISMS) that meet ISO 27001 standards — ensuring data
                  protection, operational continuity, and regulatory compliance.
                </div>
                <div className="title small-title-p">
                  With extensive experience across industries like IT, finance,
                  healthcare, education, and more, First Cert tailors solutions
                  to suit your unique business requirements. Our team ensures a
                  seamless certification journey, from documentation and risk
                  assessment to training, audit support, and continual
                  improvement.
                </div>

                <div className="title small-title-p">
                  Contact us today at info@firstcertification.com to begin your
                  ISO 27001 Certification journey in Hyderabad with First Cert —
                  your partner in achieving data security and business
                  resilience.
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

export default Hyderabad27001;
