import React, { useEffect, useRef } from 'react';


const services = [
  { title: "Static Website", description: "Responsive static websites using HTML, CSS, and JS for personal or business use.", price: "Starts at ₹7,000" },
  { title: "Dynamic Web Apps", description: "Custom web apps using React or PHP, with admin panel integration.", price: "Starts at ₹15,000" },
  { title: "E-commerce Sites", description: "Online store with product management, checkout, and payment gateway.", price: "Starts at ₹30,000" },
  { title: "Admin Panels", description: "Custom dashboards with login systems and data management features.", price: "Starts at ₹40,000" },
  { title: "Website Redesign", description: "Upgrade existing sites to modern, responsive designs.", price: "Starts at ₹10,000" },
  { title: "SEO Optimization", description: "Basic SEO strategies to improve your site’s search visibility.", price: "Starts at ₹5,000" },
  { title: "Speed Optimization", description: "Enhance loading speed and site performance for better UX.", price: "Starts at ₹3,000" },
  { title: "Site Maintenance", description: "Ongoing updates, backups, and security checks monthly.", price: "₹2,000/month" },
  { title: "Hosting & Domain Setup", description: "Full setup of hosting and domain, ready for website launch.", price: "Starts at ₹1,500" },
  { title: "Custom Forms", description: "Booking, contact, or custom forms designed as per your needs.", price: "Starts at ₹2,000" },
  { title: "Website Speed Optimization", description: "Optimize your website's performance using professional techniques.", price: "₹3,000+" },
  { title: "Hosting Setup & Domain Linking", description: "Professional hosting and domain configuration for your website.", price: "₹1,500+" },
  { title: "Payment Gateway Setup", description: "Secure payment gateway integration to accept online payments.", price: "₹4,000+" },
  { title: "SEO Optimization (Advanced)", description: "Advanced SEO strategies for higher Google rankings and visibility.", price: "₹5,000+" },
  { title: "Google Analytics Setup", description: "Track visitors and conversions using Google Analytics setup.", price: "₹1,000+" }
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className="service-card"
          >
            <div className="service-title">{service.title}</div>
            <div className="service-description">{service.description}</div>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
