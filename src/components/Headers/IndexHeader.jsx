import React, { useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../index";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

// reactstrap components
import { Container, Button, NavItem, NavLink, Row } from "reactstrap";
import SectionCarousel from "../../views/index-sections/SectionCarousel";
import Clients from "views/index-sections/Clients";
import CompanyProfile from "views/index-sections/CompanyProfile";
import DemoFooter from "components/Footers/DemoFooter";
import { Link } from "react-router-dom";
import Indexbg from '../../assets/img/index-bg.webp'
import Services from "views/services/Services";
// core components



const darkMode = false;
function IndexHeader() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // trigger when 50% visible
    };

    const runCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const suffix = counter.getAttribute("data-suffix") || ""; // get suffix like '+' or '%'
      let count = 0;
      const increment = target / 200; // control speed

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = `${Math.ceil(count)}${suffix}`;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = `${target}${suffix}`;
        }
      };
      updateCount();
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          obs.unobserve(entry.target); // run only once
        }
      });
    }, options);

    counters.forEach((counter) => observer.observe(counter));
  }, []);

  const history = useHistory();
  const sectionRef = useRef(null);
  const { theme, settheme } = useContext(ThemeContext);

  const scrollToSection = () => {
    history.push("./contact");
  };
  return (
    <>
      <>
        {/* Main Header */}
        <header className="mainHeading">
          <div className="mainHeading__content container" style={{marginTop:'-5.7rem'}}>
            {/* Text Section */}
            <article className="mainHeading__text">
              <p className="mainHeading__preTitle">
                Your Trusted Certification & Compliance Partner
              </p>
              <h2 className="mainHeading__title" style={{ fontSize: "28px", color:"#0000FF" }}>
                Empowering Businesses with Global Standards
              </h2>
              <p
                className="mainHeading__description"
                style={{
                  fontWeight: '400',
                  fontSize: "16px",
                  lineHeight: "26px",
                  marginBottom: "20px",
                }}
              >
                First Cert helps businesses achieve global compliance and
                certification, including ISO 9001, 14001, 27001, SOC, GDPR,
                HIPAA, PCI DSS, and more. We offer end-to-end
                solutions—consulting, audits, training, and
                documentation—ensuring efficiency, credibility, and lasting
                value for startups and enterprises.
              </p>
              <Link to='/contact'><button className="cta">Get a Free Quote</button></Link>
            </article>

            {/* Image Section */}
            <figure className="mainHeading__image">
              <img
                src={Indexbg}
                alt="Certification"
              />
            </figure>
          </div>

          {/* Attached Numbers / Stats */}
          <div className="stats-attached container text-center">
            <div className="row stats-row" style={{ marginTop: "6rem" }}>
              <div className="col-6 col-md-3 mb-3">
                <h3 className="counter" data-target="4000" data-suffix="+">
                  0
                </h3>
                <p>Completed Projects</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <h3 className="counter" data-target="100" data-suffix="%">
                  0
                </h3>
                <p>Audit Pass Rate</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <h3 className="counter" data-target="35" data-suffix="+">
                  0
                </h3>
                <p>International Standards</p>
              </div>
              <div className="col-6 col-md-3 mb-3">
                <h3 className="counter" data-target="450" data-suffix="+">
                  0
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </header>
          <a
          href="https://wa.me/918073358319?text=Thank you for contacting First Cert"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </>

      {/* Carousel */}

      <SectionCarousel />
      <CompanyProfile />

      <div ref={sectionRef}>
        <Services />
      </div>

      <Clients />
    
      <DemoFooter />
    </>
  );
}

export default IndexHeader;
