import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { servicesData } from "../data";
import FooterComponent from "../sections/FooterComponent";
import "./Services.css";

const Services = () => {
  // 1. Call hooks at the top level
  const { serviceId } = useParams();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 569);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 569);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Retrieve the service from your data
  const service = servicesData[serviceId];

  // 3. If not found, return early – after the hooks
  if (!service) {
    return (
      <div className="service-page">
        <p className="small-heading">CALIFORNIA PURE HEALTH &amp; WELLNESS</p>
        <h1>Service Not Found</h1>
        <p>We couldn’t find the service you’re looking for.</p>
        <Link to="/services">Go back to all services</Link>
      </div>
    );
  }

  // 4. Use desktop images if available, else fall back to mobile
  const heroImage =
    isDesktop && service.images.desktopHero
      ? service.images.desktopHero
      : service.images.hero;

  const whyChooseBg =
    isDesktop && service.desktopWhyChooseBg
      ? service.desktopWhyChooseBg
      : service.whyChooseBg;

  // Build the rich snippet using Schema.org's MedicalProcedure type
  const richSnippet = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": service.title,
    "description": service.shortDescription,
    "url": `https://purehealthdx.com/services/${serviceId}`,
    "image": service.images.desktopHero || service.images.hero,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://purehealthdx.com/services/${serviceId}`
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(richSnippet)}
        </script>
      </Helmet>
      <div className="service-page">
        {/* HERO SECTION */}
        <div
          className="service-hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="services-hero-overlay">
            <div className="services-hero-content-title">
              <div className="line"></div>
              <h1 className="company-name-services">
                CALIFORNIA PURE HEALTH &amp; WELLNESS
              </h1>
              <div className="line"></div>
            </div>
            <h1>{service.title}</h1>
            <p>{service.shortDescription}</p>
            <Link to="/contact" className="cta-button">
              Book an Appointment
            </Link>
            {/* Optional Contact Info */}
            <div className="contact-info">
              <p>
                Email:{" "}
                <a href="mailto:info@purehealthdx.com">
                  info@purehealthdx.com
                </a>
              </p>
              <p>Phone: (default phone)</p>
            </div>
          </div>
        </div>

        {/* Overlay Images: Render only on mobile (<768px) */}
        {!isDesktop && (
          <div className="overlay-images">
            <img
              src={service.images.overlay1}
              alt="Overlay 1"
              className="image1"
            />
            <img
              src={service.images.overlay2}
              alt="Overlay 2"
              className="image2"
            />
          </div>
        )}

        {/* MAIN CONTENT SECTION */}
        <div className="service-content">
          <div className="content-section">
            <img
              src={
                isDesktop
                  ? "https://i.postimg.cc/FRn1qY8d/Screenshot-2025-03-11-190333.png"
                  : service.images.section
              }
              alt={service.title}
              className="content-image"
            />

            <div className="service-content-with-title">
              <h1 id="services-title-small">{service.title}</h1>
              <div className="content-text">
                {service.mainContent
                  .split("\n\n")
                  .filter((paragraph) => paragraph.trim() !== "")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* INFO SECTION with background image + dark overlay */}
        <div
          className="info-section"
          style={{
            backgroundImage: `url(${whyChooseBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="info-overlay">
            <h2 className="info-title">{service.whyChooseTitle}</h2>
            <p className="info-text">{service.whyChooseContent}</p>

            <h3 className="info-subtitle">{service.helpTitle}</h3>
            <ul className="info-list">
              {service.helpList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <Link to="/about-us">
              <h3 className="info-subtitle">{service.providerTitle}</h3>
            </Link>
            <div className="provider-container">
              <div className="provider-text">
                <p className="info-text">{service.providerContent}</p>
              </div>
              <div className="provider-image">
                <img
                  src="https://i.postimg.cc/tRW060nV/Screenshot-2025-03-08-132625-1-1.webp"
                  alt="Our Provider"
                />
              </div>
            </div>
            <Link to="/contact" className="cta-button" style={{ margin: "20px" }}>
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <FooterComponent />
      </div>
    </>
  );
};

export default Services;
