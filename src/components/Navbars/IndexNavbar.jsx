import React from "react";
import classnames from "classnames";
import { useHistory, Link } from "react-router-dom";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import logo from "../../assets/img/firstcertlogo.png";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState("Quality");
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = React.useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [mobileLocationOpen, setMobileLocationOpen] = React.useState(false);
  const [mobileProductOpen, setMobileProductOpen] = React.useState(false);

  // Data configurations
  const serviceCategories = [
    {
      title: "Quality",
      icon: "fa-award",
      color: "#57C5B6",
      items: [
        { name: "ISO 9001", path: "/iso-9001-certification" },
        { name: "CMMI", path: "/cmmi-certification" },
      ],
    },
    {
      title: "Environment",
      icon: "fa-leaf",
      color: "#4CAF50",
      items: [{ name: "ISO 14001", path: "/iso-14001-certification" }],
    },
    {
      title: "Health & Safety",
      icon: "fa-shield-alt",
      color: "#FF6B6B",
      items: [
        { name: "ISO 45001", path: "/iso-45001-certification" },
        { name: "HIPAA", path: "/hipaa-certification" },
      ],
    },
    {
      title: "Cyber Security",
      icon: "fa-lock",
      color: "#9C27B0",
      items: [
        { name: "ISO 27001", path: "/iso-27001-certification" },
        { name: "GDPR", path: "/gdpr-certification" },
        { name: "PCI DSS", path: "/pci-dss-certification" },
        { name: "SOC 1", path: "/soc-1-certification" },
        { name: "SOC 2", path: "/soc-2-certification" },
        { name: "VAPT", path: "/vapt-certification" },
      ],
    },
  ];

  const productCategories = [
    {
      title: "Product Certification",
      icon: "fa-certificate",
      color: "#FF9800",
      items: [
        { name: "CE MARKING", path: "/ce-mark-certification" },
        { name: "M T C T E", path: "/mtcte" },
      ],
    },
  ];

  const locationCategories = [
    {
      title: "INDIA",
      icon: "fa-globe",
      color: "#0d6efd",
      items: [
        { name: "Bangalore", path: "iso-9001-certification-in-bangalore" },
        { name: "Hyderabad", path: "iso-9001-certification-in-hyderabad" },
        { name: "Mumbai", path: "iso-9001-certification-in-mumbai" },
        { name: "Pune", path: "iso-9001-certification-in-pune" },
        { name: "Delhi", path: "iso-9001-certification-in-delhi" },
        { name: "Chennai", path: "iso-9001-certification-in-chennai" },
        { name: "Coimbatore", path: "iso-9001-certification-in-coimbatore" },
        { name: "Kerala", path: "iso-9001-certification-in-kerala" },
      ],
    },
    {
      title: "ASIA",
      icon: "fa-globe",
      color: "#0d6efd",
      items: [
        { name: "Philippines", path: "iso-9001-certification-in-philippines" },
        { name: "Singapore", path: "iso-9001-certification-in-singapore" },
        { name: "Malaysia", path: "iso-9001-certification-in-malaysia" },
        { name: "Indonesia", path: "iso-9001-certification-in-indonesia" },
        { name: "Thailand", path: "iso-9001-certification-in-thailand" },
        { name: "Cambodia", path: "iso-9001-certification-in-cambodia" },
        { name: "Maldives", path: "iso-9001-certification-in-maldives" },
      ],
    },
    {
      title: "NORTH AMERICA",
      icon: "fa-globe",
      color: "#0d6efd",
      items: [
        { name: "Mexico", path: "iso-9001-certification-in-mexico" },
        { name: "USA", path: "iso-9001-certification-in-usa" },
      ],
    },
    {
      title: "MIDDLE EAST",
      icon: "fa-globe",
      color: "#0d6efd",
      items: [
        {
          name: "Saudi Arabia",
          path: "iso-9001-certification-in-saudi-arabia",
        },
        { name: "UAE", path: "iso-9001-certification-in-uae" },
        { name: "Kuwait", path: "iso-9001-certification-in-kuwait" },
        { name: "Qatar", path: "iso-9001-certification-in-qatar" },
        { name: "Yemen", path: "iso-9001-certification-in-yemen" },
        { name: "Oman", path: "iso-9001-certification-in-oman" },
        { name: "Bahrain", path: "iso-9001-certification-in-bahrain" },
        { name: "Iran", path: "iso-9001-certification-in-iran" },
        { name: "Iraq", path: "iso-9001-certification-in-iraq" },
      ],
    },
    {
      title: "AFRICA",
      icon: "fa-globe",
      color: "#0d6efd",
      items: [
        {
          name: "South Africa",
          path: "iso-9001-certification-in-south-africa",
        },
        {
          name: "Egypt",
          path: "iso-9001-certification-in-egypt",
        },
        {
          name: "Ghana",
          path: "iso-9001-certification-in-ghana",
        },
        {
          name: "Nigeria",
          path: "iso-9001-certification-in-nigeria",
        },
        {
          name: "Mauritius",
          path: "iso-9001-certification-in-mauritius",
        },
      ],
    },
  ];

  const phoneNumbers = [
    { country: "INDIA", number: "+91 8073358319" },
    { country: "SAUDI", number: "+966 594566395" },
    { country: "QATAR", number: "+974 55794689" },
    { country: "NIGERIA", number: "+234 8138720480" },
    { country: "BAHRAIN", number: "+968 77174678 " },
    { country: "UAE", number: "+971 525293563" },
    { country: "PHILIPPINES", number: "+63 9634516528" },
  ];

  // Style
  const navLinkStyle = {
    color: "black",
    fontWeight: "600",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    position: "relative",
    padding: "0.4rem 0.8rem",
    borderRadius: "6px",
    margin: "0 2px",
    textDecoration: "none",
  };

  const hoverStyle = {
    color: "#57C5B6",
    transform: "translateY(-1px)",
  };

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const handleLinkClick = () => {
    setNavbarCollapse(false);
    document.documentElement.classList.remove("nav-open");
    setMobileServicesOpen(false);
    setMobileLocationOpen(false);
    setMobileProductOpen(false);
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (navbarCollapse) return;
      if (scrollTop === 0) {
        setNavbarColor("navbar-transparent");
        setScrolled(false);
      } else {
        setNavbarColor("navbar-solid");
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", updateNavbarColor);
    return () => window.removeEventListener("scroll", updateNavbarColor);
  }, [navbarCollapse]);

  const history = useHistory();

  // Mobile Menu Components
  const MobileServicesMenu = () => (
    <div style={{ width: "100%", margin: "0.5rem 0" }}>
      <button
        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.8rem 1rem",
          backgroundColor: "#f8f9fa",
          border: "1px solid #e9ecef",
          borderRadius: "6px",
          color: "#333",
          fontWeight: "600",
          fontSize: "0.9rem",
          textAlign: "left",
          marginBottom: mobileServicesOpen ? "0.5rem" : "0",
        }}
      >
        <span>
          <i className="fa fa-code-branch" style={{ marginRight: "8px" }} />
          SERVICES
        </span>
        <i
          className={`fa ${
            mobileServicesOpen ? "fa-chevron-up" : "fa-chevron-down"
          }`}
          style={{ fontSize: "0.8rem" }}
        />
      </button>

      {mobileServicesOpen && (
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #e9ecef",
            borderRadius: "6px",
            padding: "0.5rem 0",
            marginBottom: "1rem",
          }}
        >
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  color: category.color,
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  backgroundColor: "#f1f3f4",
                  marginTop: index > 0 ? "0.3rem" : "0",
                }}
              >
                <i
                  className={`fa ${category.icon}`}
                  style={{ marginRight: "8px" }}
                />
                {category.title}
              </div>
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  to={item.path}
                  onClick={handleLinkClick}
                  style={{
                    display: "block",
                    color: "#4A5568",
                    padding: "0.6rem 1.5rem",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    borderBottom: "1px solid #f0f0f0",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = category.color;
                    e.target.style.backgroundColor = "#f8f9fa";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#4A5568";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const MobileProductMenu = () => (
    <div style={{ width: "100%", margin: "0.5rem 0" }}>
      <button
        onClick={() => setMobileProductOpen(!mobileProductOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.8rem 1rem",
          backgroundColor: "#f8f9fa",
          border: "1px solid #e9ecef",
          borderRadius: "6px",
          color: "#333",
          fontWeight: "600",
          fontSize: "0.6rem",
          textAlign: "left",
          marginBottom: mobileProductOpen ? "0.5rem" : "0",
        }}
      >
        <span>
          <i className="fa fa-certificate" style={{ marginRight: "8px" }} />
          PRODUCT CERTIFICATION
        </span>
        <i
          className={`fa ${
            mobileProductOpen ? "fa-chevron-up" : "fa-chevron-down"
          }`}
          style={{ fontSize: "0.8rem" }}
        />
      </button>

      {mobileProductOpen && (
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #e9ecef",
            borderRadius: "6px",
            padding: "0.5rem 0",
            marginBottom: "1rem",
          }}
        >
          {productCategories.map((category, index) => (
            <div key={index}>
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  to={item.path}
                  onClick={handleLinkClick}
                  style={{
                    display: "block",
                    color: "#4A5568",
                    padding: "0.6rem 1.5rem",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    borderBottom: "1px solid #f0f0f0",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = category.color;
                    e.target.style.backgroundColor = "#f8f9fa";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#4A5568";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const MobileLocationMenu = () => (
    <div style={{ width: "100%", margin: "0.5rem 0" }}>
      <button
        onClick={() => setMobileLocationOpen(!mobileLocationOpen)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.8rem 1rem",
          backgroundColor: "#f8f9fa",
          border: "1px solid #e9ecef",
          borderRadius: "6px",
          color: "#333",
          fontWeight: "600",
          fontSize: "0.9rem",
          textAlign: "left",
          marginBottom: mobileLocationOpen ? "0.5rem" : "0",
        }}
      >
        <span>
          <i className="fa fa-map-marker-alt" style={{ marginRight: "8px" }} />
          LOCATION
        </span>
        <i
          className={`fa ${
            mobileLocationOpen ? "fa-chevron-up" : "fa-chevron-down"
          }`}
          style={{ fontSize: "0.8rem" }}
        />
      </button>

      {mobileLocationOpen && (
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #e9ecef",
            borderRadius: "6px",
            padding: "0.5rem 0",
            marginBottom: "1rem",
          }}
        >
          {locationCategories.map((category, index) => (
            <div key={index}>
              <div
                style={{
                  padding: "0.5rem 1rem",
                  color: category.color,
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  backgroundColor: "#f1f3f4",
                  marginTop: index > 0 ? "0.3rem" : "0",
                }}
              >
                <i
                  className={`fa ${category.icon}`}
                  style={{ marginRight: "8px" }}
                />
                {category.title}
              </div>
              {category.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  to={item.path}
                  onClick={handleLinkClick}
                  style={{
                    display: "block",
                    color: "#4A5568",
                    padding: "0.6rem 1.5rem",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    borderBottom: "1px solid #f0f0f0",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = category.color;
                    e.target.style.backgroundColor = "#f8f9fa";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#4A5568";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // DESKTOP DROPDOWNS
  const DesktopServiceDropdown = () => {
    const [hoverTimeout, setHoverTimeout] = React.useState(null);

    const handleMouseEnter = () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setServicesDropdownOpen(true);
    };

    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setServicesDropdownOpen(false);
      }, 300);
      setHoverTimeout(timeout);
    };

    return (
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          style={{
            ...navLinkStyle,
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, navLinkStyle)}
        >
          Services
          <i
            className="fa fa-chevron-down"
            style={{ marginLeft: "6px", fontSize: "0.8rem" }}
          />
        </NavLink>

        {servicesDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              minWidth: "450px",
              backgroundColor: "#F7FAFC",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              overflow: "hidden",
              zIndex: 1000,
              marginTop: "8px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "160px",
                  backgroundColor: "white",
                  padding: "0.8rem 0",
                  borderRight: "1px solid #E2E8F0",
                }}
              >
                {serviceCategories.map((category, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "0.6rem 0.8rem",
                      cursor: "pointer",
                      backgroundColor:
                        activeCategory === category.title
                          ? "#F7FAFC"
                          : "transparent",
                      borderLeft: `3px solid ${
                        activeCategory === category.title
                          ? category.color
                          : "transparent"
                      }`,
                    }}
                    onMouseEnter={() => setActiveCategory(category.title)}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <i
                        className={`fa ${category.icon}`}
                        style={{
                          color:
                            activeCategory === category.title
                              ? category.color
                              : "#718096",
                          marginRight: "8px",
                          fontSize: "0.8rem",
                        }}
                      />
                      <span
                        style={{
                          color:
                            activeCategory === category.title
                              ? "#2D3748"
                              : "#718096",
                          fontWeight:
                            activeCategory === category.title ? "600" : "500",
                          fontSize: "0.8rem",
                        }}
                      >
                        {category.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "1rem",
                  minHeight: "180px",
                }}
              >
                {serviceCategories
                  .find((cat) => cat.title === activeCategory)
                  ?.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={handleLinkClick}
                      style={{
                        display: "block",
                        color: "#4A5568",
                        padding: "0.6rem 0.8rem",
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        marginBottom: "0.3rem",
                        borderLeft: `3px solid ${
                          serviceCategories.find(
                            (cat) => cat.title === activeCategory
                          )?.color
                        }`,
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Desktop Product Certification Dropdown - Updated for 2 products
  const DesktopProductDropdown = () => {
    const [hoverTimeout, setHoverTimeout] = React.useState(null);

    const handleMouseEnter = () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setProductDropdownOpen(true);
    };

    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setProductDropdownOpen(false);
      }, 300);
      setHoverTimeout(timeout);
    };

    return (
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          style={{
            ...navLinkStyle,
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, navLinkStyle)}
        >
          Product Certification
          <i
            className="fa fa-chevron-down"
            style={{ marginLeft: "6px", fontSize: "0.8rem" }}
          />
        </NavLink>

        {productDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              minWidth: "200px",
              backgroundColor: "#F7FAFC",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              overflow: "hidden",
              zIndex: 1000,
              marginTop: "8px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ padding: "0.8rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                {productCategories[0].items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={handleLinkClick}
                    style={{
                      display: "block",
                      color: "#4A5568",
                      padding: "0.6rem 0.8rem",
                      fontSize: "0.9rem",
                      textDecoration: "none",
                      textAlign: "center",
                      borderLeft: `3px solid #FF9800`,
                      transition: "all 0.2s ease",
                      backgroundColor: "white",
                      borderRadius: "4px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#FF9800";
                      e.target.style.backgroundColor = "#f8f9fa";
                      e.target.style.transform = "translateX(2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#4A5568";
                      e.target.style.backgroundColor = "white";
                      e.target.style.transform = "translateX(0)";
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Desktop Location Dropdown
  const DesktopLocationDropdown = () => {
    const [hoverTimeout, setHoverTimeout] = React.useState(null);
    const [activeLocationCategory, setActiveLocationCategory] =
      React.useState("INDIA");

    const handleMouseEnter = () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setLocationDropdownOpen(true);
    };

    const handleMouseLeave = () => {
      const timeout = setTimeout(() => {
        setLocationDropdownOpen(false);
      }, 300);
      setHoverTimeout(timeout);
    };

    return (
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          style={{
            ...navLinkStyle,
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
          }}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, navLinkStyle)}
        >
          Location
          <i
            className="fa fa-chevron-down"
            style={{ marginLeft: "6px", fontSize: "0.8rem" }}
          />
        </NavLink>

        {locationDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              minWidth: "200px",
              backgroundColor: "#F7FAFC",
              borderRadius: "8px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              border: "1px solid #E2E8F0",
              overflow: "hidden",
              zIndex: 1000,
              marginTop: "8px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "175px",
                  backgroundColor: "white",
                  padding: "0.8rem 0",
                  borderRight: "1px solid #E2E8F0",
                }}
              >
                {locationCategories.map((category, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "0.6rem 0.8rem",
                      cursor: "pointer",
                      backgroundColor:
                        activeLocationCategory === category.title
                          ? "#F7FAFC"
                          : "transparent",
                      borderLeft: `3px solid ${
                        activeLocationCategory === category.title
                          ? category.color
                          : "transparent"
                      }`,
                    }}
                    onMouseEnter={() =>
                      setActiveLocationCategory(category.title)
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <i
                        className={`fa ${category.icon}`}
                        style={{
                          color:
                            activeLocationCategory === category.title
                              ? category.color
                              : "#718096",
                          marginRight: "8px",
                          fontSize: "0.8rem",
                        }}
                      />
                      <span
                        style={{
                          color:
                            activeLocationCategory === category.title
                              ? "#2D3748"
                              : "#718096",
                          fontWeight:
                            activeLocationCategory === category.title
                              ? "600"
                              : "500",
                          fontSize: "0.8rem",
                        }}
                      >
                        {category.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "1rem",
                  minHeight: "120px",
                  width: "151px",
                }}
              >
                {locationCategories
                  .find((cat) => cat.title === activeLocationCategory)
                  ?.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={handleLinkClick}
                      style={{
                        display: "block",
                        color: "#4A5568",
                        padding: "0.6rem 0.8rem",
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        marginBottom: "0.3rem",
                        borderLeft: `3px solid ${
                          locationCategories.find(
                            (cat) => cat.title === activeLocationCategory
                          )?.color
                        }`,
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Top Contact Header - Desktop Only */}
      <div
        className="d-none d-lg-block"
        style={{
          background: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)",
          borderBottom: "1px solid #e9ecef",
          padding: "12px 0",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo and Text on Left - Gap maintained */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                minWidth: "300px",
              }}
            >
              <img
                src={logo}
                style={{
                  height: "65px",
                  width: "auto",
                  marginRight: "-15px", // Gap between logo and text
                }}
                alt="First Cert Logo"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#2C3E50",
                    lineHeight: "1.2",
                  }}
                >
                  FIRST CERT
                </span>
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.90rem",
                    fontWeight: "600",
                    color: "#0000FF",
                    letterSpacing: "1px",
                    marginTop: "4px",
                  }}
                >
                  Accelerating your growth
                </span>
              </div>
            </div>

            {/* Phone Numbers on Right - Country and number in same line, smaller font */}
            {/* Phone Numbers on Right - Dynamic layout */}
            {/* Phone Numbers on Right - 3 columns with vertical flow */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                flex: 2,
                minWidth: "700px",
                marginLeft: "40px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "20px 40px" /* row-gap column-gap */,
                  width: "100%",
                }}
              >
                {/* Column 1: num1, num2, num3 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {phoneNumbers.slice(0, 3).map((phone, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          color: "#2C3E50",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          whiteSpace: "nowrap",
                          lineHeight: "1.3",
                        }}
                      >
                        <span
                          style={{
                            color: "#57C5B6",
                            fontWeight: "700",
                            marginRight: "5px",
                            fontSize: "1rem",
                          }}
                        >
                          {phone.country}
                        </span>
                        <span>{phone.number}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 2: num4, num5, num6 */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {phoneNumbers.slice(3, 6).map((phone, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          color: "#2C3E50",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          whiteSpace: "nowrap",
                          lineHeight: "1.3",
                        }}
                      >
                        <span
                          style={{
                            color: "#57C5B6",
                            fontWeight: "700",
                            marginRight: "5px",
                            fontSize: "1rem",
                          }}
                        >
                          {phone.country}
                        </span>
                        <span>{phone.number}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 3: num7 (and any extras) */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {phoneNumbers.slice(6).map((phone, index) => (
                    <div key={index} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          color: "#2C3E50",
                          fontSize: "1rem",
                          fontWeight: "bold",
                          whiteSpace: "nowrap",
                          lineHeight: "1.3",
                        }}
                      >
                        <span
                          style={{
                            color: "#57C5B6",
                            fontWeight: "700",
                            marginRight: "5px",
                            fontSize: "1rem",
                          }}
                        >
                          {phone.country}
                        </span>
                        <span>{phone.number}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Contact Header - Show all numbers */}
      <div
        className="d-lg-none"
        style={{
          backgroundColor: "#2C3E50",
          color: "white",
          padding: "8px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <div
            style={{
              display: "grid",
              height: "14rem",
              gap: "10px",
              fontSize: "0.85rem", // Smaller font for mobile
            }}
          >
            {phoneNumbers.map((phone, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontWeight: "600",
                    color: "#57C5B6",
                    marginRight: "3px",
                    display: "inline",
                  }}
                >
                  {phone.country}
                </div>
                <div style={{ display: "inline" }}>{phone.number}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <Navbar
        className={classnames("fixed-top", navbarColor)}
        expand="lg"
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : "white",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0,0,0,0.1)"
            : "0 2px 4px rgba(0,0,0,0.05)",
          padding: "0.5rem 0",
          transition: "all 0.3s ease",
          // marginTop: "-7px",
        }}
      >
        <Container fluid>
          {/* Mobile Brand */}
          <div className="navbar-translate d-lg-none">
            <NavbarBrand
              tag={Link}
              to="./index"
              style={{
                display: "flex",
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                style={{ height: "35px", width: "auto" }}
                alt="First Cert Logo"
              />
              <div>
                <span
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "1.2em",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  First Cert
                </span>
                <h6
                  style={{
                    color: "#0000FF",
                    fontSize: "0.65rem",
                  }}
                >
                  Accelerating your growth
                </h6>
              </div>
            </NavbarBrand>

            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler", {
                toggled: navbarCollapse,
              })}
              onClick={toggleNavbarCollapse}
              style={{
                border: "none",
                background: "transparent",
                padding: "4px 6px",
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div
            className="d-none d-lg-flex"
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Navigation Links */}
            <Nav
              navbar
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <NavItem>
                <NavLink
                  style={navLinkStyle}
                  tag={Link}
                  to="./index"
                  onClick={handleLinkClick}
                  onMouseEnter={(e) =>
                    Object.assign(e.target.style, hoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.target.style, navLinkStyle)
                  }
                >
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/aboutus"
                  style={navLinkStyle}
                  onClick={handleLinkClick}
                  onMouseEnter={(e) =>
                    Object.assign(e.target.style, hoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.target.style, navLinkStyle)
                  }
                >
                  About Us
                </NavLink>
              </NavItem>

              <NavItem>
                <DesktopServiceDropdown />
              </NavItem>

              <NavItem>
                <DesktopProductDropdown />
              </NavItem>

              <NavItem>
                <DesktopLocationDropdown />
              </NavItem>

              <NavItem>
                <NavLink
                  tag={Link}
                  to="/contact"
                  style={navLinkStyle}
                  onClick={handleLinkClick}
                  onMouseEnter={(e) =>
                    Object.assign(e.target.style, hoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.target.style, navLinkStyle)
                  }
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>

            {/* REQUEST QUOTE Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <Button
                className="btn-round"
                color="primary"
                onClick={() => history.push("./contact")}
                style={{
                  background: "#0000FF",
                  border: "none",
                  borderRadius: "20px",
                  padding: "0.8rem 1.5rem",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  boxShadow: "0 4px 10px rgba(0, 0, 255, 0.3)",
                  transition: "all 0.3s ease",
                  minWidth: "150px",
                  marginLeft: "2rem",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 15px rgba(0, 0, 255, 0.4)";
                  e.target.style.backgroundColor = "#0056b3";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 255, 0.3)";
                  e.target.style.backgroundColor = "#0000FF";
                }}
              >
                REQUEST QUOTE
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Collapse */}
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
            // style={{height:'25rem !important'}}
          >
            <Nav navbar style={{ alignItems: "center" }}>
              <div className="d-lg-none" style={{ width: "100%" }}>
                <NavItem style={{ width: "100%" }}>
                  <NavLink
                    style={navLinkStyle}
                    tag={Link}
                    to="./index"
                    onClick={handleLinkClick}
                  >
                    <i className="fa fa-home" style={{ marginRight: "8px" }} />
                    Home
                  </NavLink>
                </NavItem>

                <NavItem style={{ width: "100%" }}>
                  <NavLink
                    tag={Link}
                    to="/aboutus"
                    style={navLinkStyle}
                    onClick={handleLinkClick}
                  >
                    <i className="fa fa-users" style={{ marginRight: "8px" }} />
                    About Us
                  </NavLink>
                </NavItem>

                <MobileServicesMenu />
                <MobileProductMenu />
                <MobileLocationMenu />

                <NavItem style={{ width: "100%" }}>
                  <NavLink
                    tag={Link}
                    to="/contact"
                    style={navLinkStyle}
                    onClick={handleLinkClick}
                  >
                    <i className="fa fa-phone" style={{ marginRight: "8px" }} />
                    Contact
                  </NavLink>
                </NavItem>

                <NavItem style={{ width: "100%", marginTop: "1rem" }}>
                  <Button
                    className="btn-round"
                    color="primary"
                    onClick={() => {
                      setNavbarCollapse(false);
                      document.documentElement.classList.remove("nav-open");
                      history.push("./contact");
                    }}
                    style={{
                      background: "#0000FF",
                      border: "none",
                      borderRadius: "20px",
                      padding: "0.6rem 1.5rem",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      width: "100%",
                    }}
                  >
                    REQUEST QUOTE
                  </Button>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
