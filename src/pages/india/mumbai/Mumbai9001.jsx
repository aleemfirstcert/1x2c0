import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/india/mumbai/9001-img.jpg";
import benefits9001 from "../../../assets/img/country/india/mumbai/9001-benefits.jpg";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Mumbai9001() {
  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "Understanding your goals and building a tailored roadmap.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Identifying gaps and recommending improvements based on ISO 9001 standards.",
    },
    {
      number: "3",
      title: "Documentation",
      description: "Preparing required policies, procedures, and records.",
    },
    {
      number: "4",
      title: "Implementation",
      description: "Integrating the QMS with training and process development.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description: "Conducting a readiness check before certification.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description:
        "An accredited auditor verifies compliance and issues the certificate.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "Assistance with surveillance audits and ongoing improvements.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Mumbai | Affordable ISO 9001 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Want to know how to get ISO 9001 Certification in Mumbai? First Cert offers expert consulting, training, documentation, and audit support for quality excellence."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Mumbai, ISO 9001 consultants in Mumbai, ISO 9001 certification cost in Mumbai, ISO 9001 implementation in Mumbai, ISO 9001 certification process Mumbai, ISO certification consultants Mumbai, ISO 9001 training in Mumbai, ISO 9001 documentation Mumbai, Quality Management System Mumbai, QMS certification Mumbai, ISO certification services Mumbai, ISO 9001 audit support Mumbai, affordable ISO certification Mumbai, First Cert ISO consultants, ISO 9001 consulting company Mumbai, ISO 9001 certification for manufacturing companies Mumbai, ISO 9001 certification for IT companies Mumbai, ISO 9001 quality certification Mumbai"
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
          <h1 class="main-title">ISO 9001 Certification in Mumbai</h1>
          <p class="small-desc">
            Your Path to Consistent Quality and Success
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
                Achieve <b>ISO 9001 Certification in Mumbai</b> with expert
                consultants from First Cert. We help businesses build strong{" "}
                <b>Quality Management Systems (QMS)</b> that improve process
                efficiency, ensure customer satisfaction, and drive continual
                growth. Our end-to-end support — from documentation to audit —
                makes ISO 9001 implementation in Mumbai simple, affordable, and
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
                What is ISO 9001 Certification in Mumbai?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Mumbai</b> is an internationally
                recognized standard that defines the requirements for a Quality
                Management System (QMS). It helps organizations in Mumbai
                streamline operations, reduce errors, and consistently deliver
                products and services that meet customer and regulatory
                requirements.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Whether your business is in manufacturing, IT, construction,
                healthcare, education, or services, ISO 9001 ensures a
                structured, process-driven approach that promotes quality
                excellence and continual improvement.
              </p>
              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                By achieving ISO 9001 certification, Mumbai-based organizations
                gain a strong reputation for reliability, operational
                efficiency, and customer-focused service — essential for
                long-term success and global competitiveness.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Which Businesses Need ISO 9001 Certification Implementation in
                Mumbai?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Any organization that wants to improve efficiency, increase
                customer satisfaction, and maintain consistent quality should
                consider ISO 9001 Certification Implementation in Mumbai, This
                includes:
              </p>

              <ul className="iso-list">
                {[
                  "Manufacturing companies",
                  "IT and software firms",
                  "Construction companies",
                  "Healthcare providers",
                  "Educational institutions",
                  "Trading and service-based enterprises",
                ].map((item, index) => (
                  <li key={index} className="mb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-mumbai">
                      ISO 9001 Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-mumbai">
                      ISO 27001 Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-mumbai">
                      CMMI Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-mumbai">
                      HIPAA Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-mumbai">
                      VAPT Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-mumbai">
                      GDPR Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-mumbai">
                      SOC 1 Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-mumbai">
                      SOC 2 Certification in Mumbai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p
              className="details-text text-center"
              style={{ color: "#000000", fontWeight: "400" }}
            >
              Implementing ISO 9001 helps Mumbai businesses build strong
              processes, reduce waste, meet customer expectations, and stay
              competitive in both local and global markets.
            </p>
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
                Benefits of Getting ISO 9001 Certification in Mumbai
              </h2>

              <p
                style={{
                  lineHeight: "1.7",
                  fontSize: "1.05rem",
                  fontWeight: "400",
                  color: "#444",
                }}
              >
                Achieving <b>ISO 9001 Certification in Mumbai</b> provides
                measurable benefits for businesses of all types and sizes. It
                ensures your processes meet international quality standards and
                helps your business stand out in a competitive market.
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
                , companies in Mumbai can achieve ISO 9001 certification
                smoothly, ensuring compliance, long-term improvement, and
                sustained growth.
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
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0000FF" }}
              >
                ISO 9001 Certification in Mumbai – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                Achieving <b>ISO 9001 Certification in Mumbai</b> with{" "}
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
          How much does it cost to get ISO 9001 certified in Mumbai?
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
                  The cost of ISO 9001 certification in Mumbai varies for each
                  business because factors like size, industry, and operational
                  complexity differ, Key cost factors include:
                </div>

                <ul className="features">
                  <li className="check">Number of employees</li>
                  <li className="check">
                    Type of business operations (IT, manufacturing, services,
                    etc.)
                  </li>
                  <li className="check">Process complexity and risk</li>
                  <li className="check">
                    Existing documentation and system maturity
                  </li>
                  <li className="check">Compliance requirements</li>
                  <li className="check">Scope of certification</li>
                  <li className="check">Training and internal audit needs</li>
                  <li className="check">
                    Number of audit days required by the certification body
                  </li>
                </ul>

                <div className="title small-title">
                  ISO 9001 consultants in Mumbai evaluate these aspects before
                  giving a customized quotation. Working with experienced
                  consultants ensures a cost-effective and timely certification
                  process.
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
                  Achieve ISO 9001 Certification in Mumbai with First Cert –
                  Your Trusted Partner in Quality Excellence
                </div>
                <div className="title small-title">
                  If you’re looking to achieve ISO 9001 Certification in Mumbai,
                  First Cert is your trusted partner for expert guidance and
                  reliable certification support. We help organizations build
                  strong Quality Management Systems (QMS) that align with ISO
                  9001 standards, ensuring improved efficiency, consistency, and
                  customer satisfaction.
                </div>

                <div className="title small-title">
                  With experience across industries such as manufacturing, IT,
                  education, and healthcare, First Cert provides tailored
                  consulting and implementation services to meet your specific
                  needs. Our ISO 9001 consultants ensure a smooth certification
                  journey — from documentation and training to audit readiness
                  and continual improvement.
                </div>
                <div className="title small-title-p">
                  We are committed to delivering high-quality, affordable, and
                  results-driven ISO consulting services that enhance your
                  organization’s credibility and competitiveness.
                </div>
                <div className="title small-title-p">
                  Contact us at info@firstcertification.com to begin your ISO
                  9001 Certification journey in Mumbai with First Cert — your
                  partner for quality excellence and business growth.
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

export default Mumbai9001;
