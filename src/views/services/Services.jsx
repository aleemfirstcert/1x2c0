import React, { useEffect } from "react";
import { useState } from "react";
import "../../assets/css/index.css";
import iso9001 from "../../assets/img/services/card-9001.webp";
import cmmi from "../../assets/img/services/card-cmmi.webp";
import iso14001 from "../../assets/img/services/card-14001.webp";
import iso45001 from "../../assets/img/services/card-45001.webp";
import hipaa from "../../assets/img/services/card-hipaa.webp";
import iso27001 from "../../assets/img/services/card-27001.webp";
import gdpr from "../../assets/img/services/card-gdpr.webp";
import pcidss from "../../assets/img/services/card-pcidss.webp";
import soc1 from "../../assets/img/services/card-soc1.webp";
import soc2 from "../../assets/img/services/card-soc2.webp";
import vapt from "../../assets/img/services/card-vapt.webp";
import eumark from "../../assets/img/services/card-eumark.webp";
import pic1 from "../../assets/img/services/pic1.webp";
import pic2 from "../../assets/img/services/pic2.webp";
import pic3 from "../../assets/img/services/pic3.webp";
import pic4 from "../../assets/img/services/pic4.webp";
import pic5 from "../../assets/img/services/pic5.webp";
import pic6 from "../../assets/img/services/pic6.webp";

function Services() {
  const cardsData = [
    {
      id: 1,
      title: "ISO 9001",
      image: iso9001,
      link: "/iso-9001-certification",
    },
    {
      id: 2,
      title: "CMMI",
      image: cmmi,
      link: "/iso-14001-certification",
    },
    {
      id: 3,
      title: "ISO 14001",
      image: iso14001,
      link: "/iso-14001-certification",
    },
    {
      id: 4,
      title: "ISO 45001",
      image: iso45001,
      link: "/iso-45001-certification",
    },
    {
      id: 5,
      title: "HIPAA",
      image: hipaa,
      link: "/hipaa-certification",
    },
    {
      id: 6,
      title: "ISO 27001",
      image: iso27001,
      link: "/iso-27001-certification",
    },
    {
      id: 7,
      title: "GDPR",
      image: gdpr,
      link: "/gdpr-certification",
    },
    {
      id: 8,
      title: "PCI DSS",
      image: pcidss,
      link: "/pci-dss-certification",
    },
    {
      id: 9,
      title: "SOC 1",
      image: soc1,
      link: "/soc-1-certification",
    },
    {
      id: 10,
      title: "SOC 2",
      image: soc2,
      link: "/soc-2-certification",
    },
    {
      id: 11,
      title: "VAPT",
      image: vapt,
      link: "/vapt-certification",
    },
    {
      id: 12,
      title: "CE MARK",
      image: eumark,
      link: "/ce-mark-certification",
    },
  ];

  const featuresData = [
    {
      id: 1,
      icon: "👨‍💼",
      title: "Expert‑Led Training",
      description:
        "Delivered by seasoned consultants with deep domain expertise across industries.",
    },
    {
      id: 2,
      icon: "📋",
      title: "Structured Documentation",
      description:
        "Step‑by‑step templates and guidance to make compliance simple and audit‑ready.",
    },
    {
      id: 3,
      icon: "🛡️",
      title: "24/7 Support",
      description:
        "Dedicated assistance during and after certification, including surveillance support.",
    },
    {
      id: 4,
      icon: "✅",
      title: "Assured Certification",
      description:
        "No certification, no payment — we stand behind the outcomes we commit to.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      quote:
        "We engaged First Cert for Vulnerability Assessment and Penetration Testing and were impressed by their professionalism and technical expertise. Their team identified critical vulnerabilities we had overlooked and provided a clear, actionable report. Communication was smooth throughout the process, and their insights helped us strengthen our security posture and meet compliance requirements. Highly recommended for any organization serious about cybersecurity.",
      author: "Osama Ghaur",
      googleReview:
        "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s5MWRGRm5hVGRtY0ZGT1ExQnVXVWRZVTFaRVptYxAB!2m1!1s0x0:0xd1e28b81bc60c740!3m1!1s2@1:CAIQACodChtycF9oOk91dFFnaTdmcFFOQ1BuWUdYU1ZEZmc%7C%7C?entry=tts&g_ep=EgoyMDI1MDkyMi4wIPu8ASoASAFQAw%3D%3D&skid=b287d7d2-aa5a-42d2-a1fe-e811edb1ea9f",
      personImage: pic1,
      rating: 5,
    },
    {
      id: 2,
      quote:
        "First Cert is a leading provider of cybersecurity solutions, specializing in ISO Certification, penetration testing Cyber Security etc. The company has built a strong reputation for offering comprehensive, scalable, and proactive security services tailored to businesses of all sizes.",
      author: "Zeba Afreen",
      googleReview:
        "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25CNE1GODRZMnRPVjBseGVub3hjMFJpVEZaNE1GRRAB!2m1!1s0x0:0xd1e28b81bc60c740!3m1!1s2@1:CAIQACodChtycF9oOnB4MF84Y2tOV0lxenoxc0RiTFZ4MFE%7C%7C?entry=tts&g_ep=EgoyMDI1MDkyMi4wIPu8ASoASAFQAw%3D%3D&skid=a25a4642-9644-4238-b8c2-5d592e6684e2",
      personImage: pic2,
      rating: 5,
    },
    {
      id: 3,
      quote:
        "First Cert delivered highly professional services with clear communication and thorough assessment. The entire process was well-structured and seamless. I am very satisfied and would strongly recommend their services.",
      author: "Ather Noor",
      googleReview:
        "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pRemVURXRkblJsY25GNlJtODVlRzR4WkRoYVZFRRAB!2m1!1s0x0:0xd1e28b81bc60c740!3m1!1s2@1:CAIQACodChtycF9oOjQzeTEtdnRlcnF6Rm85eG4xZDhaVEE%7C%7C?entry=tts&g_ep=EgoyMDI1MDkyMi4wIPu8ASoASAFQAw%3D%3D&skid=82e20be8-e6c1-4747-9234-aaa93946aa57",
      personImage: pic3,
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Excellent Service and Professionalism Great experience with FIRST CERT for ISO 9001 certification. The team was professional, efficient, and made the whole process smooth. Highly recommend their services!",
      author: "Sourav Biswal",
      googleReview:
        "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xSTmJXNTJhMVJZTW5CU2JWTlNRMlI0Wnpsbk1tYxAB!2m1!1s0x0:0xd1e28b81bc60c740!3m1!1s2@1:CAIQACodChtycF9oOlRNbW52a1RYMnBSbVNSQ2R4ZzlnMmc%7C%7C?entry=tts&g_ep=EgoyMDI1MDkyMi4wIPu8ASoASAFQAw%3D%3D&skid=c211676d-18b3-4267-81cf-2a31e0aae3aa",
      personImage: pic4,
      rating: 5,
    },
    {
      id: 5,
      quote:
        "Great support for PCI DSS compliance. The process was explained clearly and handled efficiently from start to finish.",
      author: "Mohammed Aleem",
      googleReview:
        "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tOQk9YZEZlak5ST0VaTk1VOXlSRFZ1U1dkVGVFRRAB!2m1!1s0x0:0xd1e28b81bc60c740!3m1!1s2@1:CAIQACodChtycF9oOkNBOXdFejNROEZNMU9yRDVuSWdTeEE%7C%7C?entry=tts&g_ep=EgoyMDI1MDkyMi4wIPu8ASoASAFQAw%3D%3D&skid=b0f3d2a0-65ec-4ed7-aa2b-c9af61bb84c0",
      personImage: pic5,
      rating: 5,
    },
    {
      id: 6,
      quote:
        "One of the best ISO certification consultant in Banglore. Have received great service on time from here, expert in  ISO 9001, 14001, 45001, 22000,  27001, 13485 Certifications.",
      author: "Ataullah Arif",
      googleReview:
        "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUM1bDRLLXJBRRAB!2m1!1s0x0:0xd1e28b81bc60c740!3m1!1s2@1:CIHM0ogKEICAgIC5l4K-rAE%7C%7C?entry=tts&g_ep=EgoyMDI1MDkyMi4wIPu8ASoASAFQAw%3D%3D&skid=d1ab4eab-ba20-405b-af5f-124bd5883b48",
      personImage: pic6,
      rating: 5,
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleGoogleReview = (reviewLink) => {
    if (reviewLink) {
      window.open(reviewLink, "_blank");
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={index < rating ? "#FFD700" : "#E5E5E5"}
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* -------our services Cards--------- */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-4">
            <h2 className="services-heading service-section-title">
              Our Services
            </h2>
          </div>

          <div className="col-12">
            <div className="row justify-content-center">
              {cardsData.map((card) => (
                <div key={card.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <a
                    href={card.link}
                    className="certification-card-link text-decoration-none"
                  >
                    <div className="certification-card position-relative">
                      <div
                        className="card-bg-image"
                        style={{ backgroundImage: `url(${card.image})` }}
                      ></div>

                      <div className="certification-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                        <h3 className="certification-text text-white text-center fw-bold">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --------First Cert Documents cards--------- */}
      <section className="fc-why-choose-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-5">
              <h2 className="fc-section-title fc-primary-blue">
                Why Choose First Cert?
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            {featuresData.map((feature) => (
              <div key={feature.id} className="col-lg-6 col-xl-3 col-md-6 mb-4">
                <div className="fc-feature-card">
                  <div className="fc-feature-icon-wrapper">
                    <span className="fc-feature-icon">{feature.icon}</span>
                  </div>

                  <div className="fc-feature-content">
                    <h3 className="fc-feature-title">{feature.title}</h3>
                    <p className="fc-feature-description">
                      {feature.description}
                    </p>
                  </div>

                  <div className="fc-feature-hover-effect"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------Testimonial--------- */}
      <div className="testimonial-wrapper">
        <div className="testimonial-container">
          <div className="header-section">
            <h1 style={{ color: "#0000ff" }}>What Our Clients Say</h1>
          </div>

          <div className="content-wrapper">
            <div className="testimonial-content">
              <div className="quote-section">
                <div className="quote-mark-left">"</div>
                <p className="quote-text">{slides[currentSlide].quote}</p>
                <div className="quote-mark-right">"</div>
              </div>

              <div className="divider-line"></div>

              <div className="author-section">
                <div className="author-info">
                  <div className="rating-section">
                    {renderStars(slides[currentSlide].rating)}
                    <span className="rating-text">
                      {slides[currentSlide].rating}.0
                    </span>
                  </div>
                  <h3 className="author-name">{slides[currentSlide].author}</h3>
                </div>

                <button
                  className="google-review-button"
                  onClick={() =>
                    handleGoogleReview(slides[currentSlide].googleReview)
                  }
                >
                  <div className="google-logo">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                  <span className="google-text">View on Google</span>
                </button>
              </div>
            </div>

            <div className="right-side-section">
              <div className="image-connector">
                <div className="connector-line"></div>
                <div className="connector-dot"></div>
              </div>

              <div className="person-image-wrapper">
                <div className="person-image-container">
                  <img
                    src={slides[currentSlide].personImage}
                    alt={slides[currentSlide].author}
                    className="person-image"
                  />
                </div>

                <div className="bg-line line-1"></div>
                <div className="bg-line line-2"></div>
                <div className="bg-line line-3"></div>
                <div className="bg-dot dot-1"></div>
                <div className="bg-dot dot-2"></div>
                <div className="bg-dot dot-3"></div>
                <div className="bg-dot dot-4"></div>
                <div className="bg-dot dot-5"></div>
                <div className="bg-dot dot-6"></div>

                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
                <div className="floating-element element-4"></div>
              </div>
            </div>
          </div>

          <div className="navigation-controls">
            <div className="nav-buttons">
              <button className="nav-button prev" onClick={prevSlide}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="slide-indicators">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>

              <button className="nav-button next" onClick={nextSlide}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
