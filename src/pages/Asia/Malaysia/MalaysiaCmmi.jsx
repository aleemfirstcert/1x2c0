import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgcmmi from "../../../assets/img/country/asia/malaysia/cmmi-img.webp";
import benefitscmmi from "../../../assets/img/country/asia/malaysia/cmmi-benefits.webp";
import bgimg from "../../../assets/img/services/card-cmmi.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MalaysiaCmmi() {
  const benefits = [
    "Standardized processes that improve delivery consistency",
    "Better control over schedules, costs, and resource utilization",
    "Reduced dependency on individual expertise",
    "Clear performance metrics for informed decision-making",
    "Stronger positioning in competitive tenders and partnerships",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Maturity Assessment",
      description: "Identify current capability and target level.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Compare existing practices with CMMI requirements.",
    },
    {
      number: "3",
      title: "Process Framework Development",
      description: "Design SOPs, templates, metrics, and governance models.",
    },
    {
      number: "4",
      title: "Implementation & Coaching",
      description: "Guide teams through process adoption.",
    },
    {
      number: "5",
      title: "Internal Readiness Reviews",
      description: "Conduct mock appraisals and corrective actions.",
    },
    {
      number: "6",
      title: "SCAMPI Appraisal Support",
      description: "Coordinate and assist during formal appraisal.",
    },
    {
      number: "7",
      title: "Post-Appraisal Sustainment",
      description: "Support continuous improvement and maturity maintenance.",
    },
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development and IT services companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS platforms and technology product firms",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and shared service operations",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Engineering, design, and technical consulting organizations",
    },
    {
      icon: "bi bi-hdd-network",
      title: "Managed service providers and system integrators",
    },
    {
      icon: "bi bi-shield-check",
      title: "Manufacturing and compliance-focused industries",
    },
    {
      icon: "bi bi-rocket-takeoff",
      title:
        "Startups preparing for large enterprise or public-sector engagements",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          CMMI Certification in Malaysia | Expert CMMI Consulting & Appraisal
          Support – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve CMMI Certification in Malaysia? First Cert offers specialized CMMI consulting, process optimization, team training, and appraisal readiness services to help organizations reach CMMI Maturity Levels 2, 3, or 5 effectively."
        />
        <meta
          name="keywords"
          content="CMMI Certification in Malaysia, CMMI consultants in Malaysia, CMMI Level 2 certification Malaysia, CMMI Level 3 certification Malaysia, CMMI Level 5 certification Malaysia, CMMI appraisal in Malaysia, CMMI implementation Malaysia, CMMI certification cost Malaysia, CMMI consulting company Malaysia, CMMI SCAMPI appraisal Malaysia, CMMI training in Malaysia, CMMI documentation Malaysia, CMMI process improvement Malaysia, Capability Maturity Model Integration Malaysia, CMMI for IT companies Malaysia, CMMI for startups Malaysia, best CMMI consultants Malaysia, affordable CMMI certification Malaysia, First Cert CMMI consultants."
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
          <h1 class="main-title">CMMI Certification in Malaysia</h1>
          <p class="small-desc">
            Enabling Predictable Performance & Scalable Growth
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
                <b>CMMI Certification in Malaysia</b> supports organizations in
                building structured, repeatable, and measurable processes that
                improve delivery consistency and business performance. As
                Malaysian companies expand regionally and serve enterprise or
                government clients, strong process governance and execution
                discipline have become critical success factors.
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
                <a href="/">First Cert</a> partners with organizations across
                Malaysia to implement CMMI practices that align with business
                objectives and operational realities. Our approach emphasizes
                adoption, usability, and measurable improvement rather than
                documentation-heavy compliance.
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
            Understanding CMMI Certification in Malaysia
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>CMMI Certification in Malaysia</b> is based on the globally
            adopted Capability Maturity Model Integration framework, overseen by
            ISACA. The model evaluates how effectively an organization plans,
            manages, measures, and improves its processes across projects and
            services. CMMI supports organizations in improving:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Organizational process consistency and governance</h5>
            </div>

            <div class="vapt-card">
              <h5>Project estimation, planning, and monitoring practices</h5>
            </div>

            <div class="vapt-card">
              <h5>Quality assurance and performance metrics</h5>
            </div>

            <div class="vapt-card">
              <h5>Risk identification and performance tracking</h5>
            </div>

            <div class="vapt-card">
              <h5>Continuous improvement and maturity progression</h5>
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
            Achieving CMMI certification signals that an organization operates
            with structured management practices and predictable outcomes.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement CMMI in Malaysia?
          </h2>

          <p className="text-center section-sub mb-5">
            CMMI is well suited for Malaysian organizations seeking to
            strengthen delivery reliability and operational maturity, including:
          </p>

          <div className="row g-4">
            {/* LEFT: HIPAA Cards */}
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

            {/* RIGHT: Internal Links */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar">
                <h5>Our Experties</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-malaysia">
                      ISO 9001 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-malaysia">
                      ISO 27001 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-malaysia">
                      CMMI Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-malaysia">
                      HIPAA Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-malaysia">
                      VAPT Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-malaysia">
                      GDPR Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-malaysia">
                      SOC 1 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-malaysia">
                      SOC 2 Certification in Malaysia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center section-sub mb-5">
          CMMI helps Malaysia organizations reduce delivery risks and
          demonstrate process reliability to global clients.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Value of CMMI Certification in Malaysia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving CMMI Certification in Malaysia realize
                tangible benefits:
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
                alt="cmmi Benefits"
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
            CMMI transforms process maturity into a measurable business asset.
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
                CMMI Implementation Approach in Malaysia with First Cert
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
                First Cert follows a structured and result-oriented CMMI
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
          CMMI Certification Cost in Malaysia?
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
                  The cost of CMMI Certification in Malaysia varies based on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">Target maturity level (2, 3, or 5)</li>
                  <li className="check">Organization size and Structure</li>
                  <li className="check">Number and complexity of projects</li>
                  <li className="check">Documentation and training scope</li>
                  <li className="check">SCAMPI appraisal type and duration</li>
                  <li className="check">Overall implementation timeline</li>
                </ul>

                <div className="title small-title">
                  First Cert provides transparent and customized pricing after
                  assessing your organization’s readiness and goals.
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
                  Achieve CMMI Certification in Malaysia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted CMMI consulting partner in Malaysia,
                  helping organizations build strong process capability and
                  achieve sustainable performance improvements. Our consultants
                  align CMMI practices with business strategy to ensure value
                  beyond certification.
                </div>
                <div className="title small-title">
                  From initial assessment to appraisal and long-term maturity
                  sustainment, First Cert ensures your CMMI journey delivers
                  real operational impact.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your CMMI
                  Certification journey in the Malaysia with First Cert and
                  establish a strong foundation for scalable growth, delivery
                  excellence, and international competitiveness.
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

export default MalaysiaCmmi;
