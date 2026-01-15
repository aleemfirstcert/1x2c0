import DemoFooter from "components/Footers/DemoFooter";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import aboutbg from "../../assets/img/services/mtcte-bg.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MTCTE() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <IndexNavbar />

      <Helmet>
        <title>
          Mandatory Testing & Certification of Telecom Equipment in India
          (MTCTE)
        </title>
        <meta
          name="description"
          content="Mandatory Testing and Certification of Telecommunication Equipment (MTCTE) by TEC Approval ensures telecom products meet Indian safety and quality standards before import or sale."
        />
        <link rel="canonical" href="/mtcte" />
      </Helmet>

      <div className="about-page">
        {/* Header - Fixed Centering */}
        <div
          className="about-header position-relative d-flex flex-column justify-content-center align-items-center text-white"
          style={{
            height: "50vh",
            minHeight: "300px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100 hero-bg"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${aboutbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            className="position-relative text-center px-3 w-100"
            style={{
              zIndex: 1,
              textShadow: "0 2px 4px rgba(0,0,0,0.8)",
              transform: "translateY(0)", // Ensure perfect centering
            }}
          >
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(1rem, 5vw, 3rem)",
                fontWeight: "600",
                letterSpacing: "1.5px",
                lineHeight: "1.2",
              }}
            >
              Mandatory Testing & Certification <br /> of Telecom Equipment in
              India (MTCTE)
            </h1>
          </div>
        </div>

        {/* MTCTE CONTENT SECTION */}
        <section
          className="py-5"
          style={{
            background: "linear-gradient(120deg, #f8fbff 0%, #eef4ff 100%)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* LEFT CONTENT */}
              <div className="col-lg-7 col-md-12 pe-lg-5">
                <span
                  className="badge mb-3"
                  style={{
                    backgroundColor: "#0d6efd",
                    padding: "8px 14px",
                    fontSize: "0.75rem",
                    letterSpacing: "1px",
                  }}
                >
                  M.T.C.T.E
                </span>

                <h2 className="fw-bold mb-4" style={{ color: "#0d6efd" }}>
                  Mandatory Testing & Certification of Telecom Equipment (MTCTE)
                </h2>

                <p
                  className="mb-3"
                  style={{
                    lineHeight: "1.8",
                    color: "#1f2937",
                    fontWeight: 500,
                  }}
                >
                  India’s telecommunications industry has witnessed rapid growth
                  with advancements in wireless communication, networking
                  technologies, and digital services. As telecom networks become
                  more complex, the need for safe, reliable, and standardized
                  equipment has become critical.
                </p>

                <p
                  className="mb-4"
                  style={{
                    lineHeight: "1.8",
                    color: "#1f2937",
                    fontWeight: 500,
                  }}
                >
                  To ensure this, the{" "}
                  <strong>Telecommunication Engineering Centre (TEC)</strong>{" "}
                  has introduced strict regulatory frameworks, including the{" "}
                  <strong>
                    Mandatory Testing and Certification of Telecommunication
                    Equipment (MTCTE)
                  </strong>{" "}
                  scheme.
                </p>

                <div
                  className="p-4 rounded shadow-sm"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h5 className="fw-semibold mb-2" style={{ color: "#0d6efd" }}>
                    Why MTCTE Certification Matters
                  </h5>
                  <p
                    className="mb-0"
                    style={{
                      lineHeight: "1.7",
                      color: "#1f2937",
                      fontWeight: 500,
                    }}
                  >
                    <b>MTCTE certification</b> ensures that telecom equipment
                    used in India complies with national safety, quality, and
                    technical standards, creating a trusted and secure telecom
                    ecosystem.
                  </p>
                </div>
                <br />
              </div>

              <EnquiryForm />
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              {/* LEFT CONTENT */}
              <div className="col-lg-7 pe-lg-5">
                <h2 className="fw-bold mb-4" style={{ color: "#0d6efd" }}>
                  Why TEC Approval and MTCTE Certification Are Required
                </h2>

                <p
                  className="mb-3"
                  style={{
                    color: "#1f2937",
                    fontWeight: 500,
                    lineHeight: "1.8",
                  }}
                >
                  As per the{" "}
                  <strong>Indian Telegraph (Amendment) Rules, 2017</strong>,
                  obtaining TEC approval is mandatory before telecom equipment
                  can be manufactured, imported, sold, or deployed in India.
                  This requirement is enforced through the{" "}
                  <strong>
                    Mandatory Testing and Certification of Telecommunication
                    Equipment (MTCTE)
                  </strong>{" "}
                  scheme, which currently covers more than{" "}
                  <strong>74 categories of telecom products</strong> and their
                  variants.
                </p>

                <p
                  className="mb-4"
                  style={{
                    color: "#1f2937",
                    fontWeight: 500,
                    lineHeight: "1.8",
                  }}
                >
                  Under MTCTE, products undergo testing at{" "}
                  <strong>TEC-designated laboratories</strong> to verify
                  compliance with defined technical, safety, and performance
                  parameters. Once testing is successfully completed,{" "}
                  <b>telecom equipment certification in India</b> is granted by
                  TEC, allowing legal market entry.
                </p>

                {/* HIGHLIGHT POINTS */}
                <div className="mt-4">
                  <h6 className="fw-semibold mb-3" style={{ color: "#0d6efd" }}>
                    This mandatory certification process helps:
                  </h6>

                  <ul className="list-unstyled">
                    <li className="d-flex mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-4"></i>
                      <span
                        style={{
                          color: "#1f2937",
                          fontWeight: 500,
                          marginLeft: "5px",
                        }}
                      >
                        Ensure network reliability and interoperability
                      </span>
                    </li>

                    <li className="d-flex mb-3">
                      <i className="bi bi-shield-check text-primary me-3"></i>
                      <span
                        style={{
                          color: "#1f2937",
                          fontWeight: 500,
                          marginLeft: "5px",
                        }}
                      >
                        Maintain high safety and quality standards
                      </span>
                    </li>

                    <li className="d-flex">
                      <i className="bi bi-x-octagon-fill text-primary me-3"></i>
                      <span
                        style={{
                          color: "#1f2937",
                          fontWeight: 500,
                          marginLeft: "5px",
                        }}
                      >
                        Prevent the use of non-compliant telecom equipment
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="col-lg-5 text-center mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
                <div className="image-container" style={{ width: "100%" }}>
                  <img
                    src={require("../../assets/img/services/mtct.webp")}
                    alt="MTCTE"
                    className="img-fluid rounded shadow"
                    style={{
                      maxHeight: "850px",
                      height: "auto",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-white">
          <div className="container">
            <div className="row align-items-start">
              {/* LEFT INTRO */}
              <div className="col-lg-5 mb-4 mb-lg-0">
                <h2 className="fw-bold mb-4" style={{ color: "#0d6efd" }}>
                  Our TEC Approval and Certification Services
                </h2>

                <div
                  className="mt-4 p-3 rounded"
                  style={{ backgroundColor: "#eef4ff" }}
                >
                  <p
                    className="mb-0"
                    style={{
                      color: "#1f2937",
                      fontWeight: 500,
                    }}
                  >
                    ✔ We offer comprehensive support for obtaining{" "}
                    <b>MTCTE certification</b>, <b>TEC approval</b>, and related
                    regulatory clearances, helping businesses achieve compliance
                    smoothly and efficiently.
                  </p>
                </div>
              </div>

              {/* RIGHT SERVICES */}
              <div className="col-lg-7">
                {/* SERVICE 1 */}
                <div className="mb-4 p-4 rounded shadow-sm bg-white border-start border-4 border-primary">
                  <h5 className="fw-semibold mb-2" style={{ color: "#0d6efd" }}>
                    MTCTE Certification
                  </h5>

                  <p
                    className="mb-0"
                    style={{
                      color: "#1f2937",
                      fontWeight: 500,
                      lineHeight: "1.8",
                    }}
                  >
                    <b>MTCTE certification</b> confirms that telecom products
                    meet Indian regulatory requirements and technical standards.
                    It is essential for companies looking to enter or operate in
                    the Indian telecom market with confidence and compliance.
                  </p>
                </div>

                {/* SERVICE 2 */}
                <div className="p-4 rounded shadow-sm bg-white border-start border-4 border-primary">
                  <h5 className="fw-semibold mb-2" style={{ color: "#0d6efd" }}>
                    COMSEC Approval (NCCS)
                  </h5>

                  <p
                    className="mb-2"
                    style={{
                      color: "#1f2937",
                      fontWeight: 500,
                      lineHeight: "1.8",
                    }}
                  >
                    With the growing use of smart and connected telecom devices,
                    cybersecurity is a critical concern.{" "}
                    <b>The Communication Security (ComSec) Scheme</b>, governed
                    by the Department of Telecommunications (DoT) and managed by
                    the <b>National Centre for Communication Security (NCCS)</b>
                    , ensures that telecom equipment is protected against cyber
                    threats.
                  </p>
                  <p
                    className="mb-2"
                    style={{
                      color: "#1f2937",
                      fontWeight: 500,
                      lineHeight: "1.8",
                    }}
                  >
                    <b>NCCS approval</b> or <b>COMSEC certification</b> verifies
                    that products incorporate robust security features to
                    safeguard sensitive data and communication networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" style={{ backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div className="row align-items-start">
              {/* LEFT CONTENT */}
              <div className="col-lg-5 mb-4 mb-lg-0">
                <h2 className="fw-bold mb-3" style={{ color: "#0d6efd" }}>
                  Telecom Products Covered Under MTCTE Certification
                </h2>

                <div
                  className="mt-4 p-3 rounded"
                  style={{ backgroundColor: "#e7f1ff" }}
                >
                  The MTCTE certification scheme applies to a wide range of
                  telecom equipment, including:
                </div>
              </div>

              {/* RIGHT PRODUCT LIST */}
              <div className="col-lg-7">
                <div className="row">
                  {[
                    "BNG / BRAS Routers",
                    "Cloud Control Capable Routers",
                    "IPv4 and IPv6 Routers",
                    "MPLS Routers and Switches",
                    "L2 and L3 LAN Switches",
                    "IoT Gateways",
                    "PON OLT, ONT, and ONU Devices",
                    "Firewall Equipment",
                    "Smart Electricity Meters",
                    "Transmission Terminal Equipment",
                    "Multiplexing, SDH, and DWDM Equipment",
                    "Digital Cross Connect Systems",
                    "Precision Timing Protocol (PTP) Grand Master Equipment",
                    "SIP Terminals",
                    "IP Multimedia Conferencing Equipment",
                    "Wi-Fi Access Points, CPEs, and WLAN Controllers",
                  ].map((item, index) => (
                    <div key={index} className="col-md-6 mb-3">
                      <div className="d-flex align-items-start">
                        <i className="bi bi-dash-lg text-primary me-2 mt-1"></i>
                        <span
                          style={{
                            fontWeight: 500,
                            color: "#111827",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-5"
          style={{
            background: "linear-gradient(120deg, #f9fbff 0%, #eef3ff 100%)",
          }}
        >
          <div className="container">
            <div className="row g-4">
              {/* NCCS / COMSEC PRODUCTS */}
              <div className="col-lg-6">
                <div
                  className="h-100 p-4 rounded shadow-sm"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <h4 className="fw-bold mb-0" style={{ color: "#0d6efd" }}>
                      Products Requiring NCCS / COMSEC Certification
                    </h4>
                  </div>

                  <p
                    className="mb-4"
                    style={{
                      fontWeight: 500,
                      color: "#374151",
                      lineHeight: "1.7",
                    }}
                  >
                    Certain telecom products must also comply with{" "}
                    <b>mandatory security certification</b> under the{" "}
                    <b>NCCS approval</b> framework, including:
                  </p>

                  <ul className="list-unstyled mb-0">
                    {[
                      "IP Routers",
                      "Wi-Fi CPEs",
                      "Optical Network Terminals (ONT)",
                      "Optical Line Terminals (OLT)",
                    ].map((item, index) => (
                      <li key={index} className="mb-3 d-flex align-items-start">
                        <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                        <span
                          style={{
                            fontWeight: 500,
                            color: "#111827",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CONCLUSION */}
              <div className="col-lg-6">
                <div
                  className="h-100 p-4 rounded shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%)",
                    color: "#ffffff",
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <i
                      className="bi bi-award-fill me-2"
                      style={{ fontSize: "1.6rem" }}
                    ></i>
                    <h4 className="fw-bold mb-0">Conclusion</h4>
                  </div>

                  <p
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.8",
                      opacity: 0.95,
                    }}
                  >
                    Obtaining{" "}
                    <b>
                      Mandatory Testing and Certification of Telecommunication
                      Equipment, MTCTE certification, TEC approval
                    </b>
                    , and <b>NCCS / COMSEC certification</b> is essential for
                    legal compliance and successful market entry in India. These
                    regulatory frameworks ensure telecom equipment meets safety,
                    quality, and security standards, supporting a reliable and
                    secure digital infrastructure across the country.
                  </p>

                  <div className="mt-4">
                    <span
                      className="badge px-3 py-2"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                        fontSize: "9px",
                      }}
                    >
                      Compliance • Security • Market Readiness
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <DemoFooter />
    </div>
  );
}

export default MTCTE;
