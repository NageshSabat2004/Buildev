import React, { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';

const Contact = () => {
  // const phoneInputRef = useRef(null);

  // useEffect(() => {
  //   if (phoneInputRef.current) {
  //     intlTelInput(phoneInputRef.current, {
  //       initialCountry: 'in', // Set India as default (use 'auto' for auto-detect)
  //       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js'
  //     });
  //   }
  // }, []);

  return (
    <div className="contact-page">

      {/* Image Section */}
      <div className="contact-image">
        <img src="/form.jpg" alt="Contact Illustration" />
      </div>

      {/* Form Section */}
      <div className="contact-form">
        <form action="https://formspree.io/f/xeozerlr" method="POST">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="tel"
            name="phone"
            // ref={phoneInputRef}
            placeholder="Your Phone"
            required
          />

          <select name="service" required>
            <option value="">Select Service</option>
            <option>Static Website</option>
            <option>Dynamic Web Apps</option>
            <option>E-commerce Sites</option>
            <option>Admin Panels</option>
            <option>Website Redesign</option>
            <option>SEO Optimization</option>
            <option>Speed Optimization</option>
            <option>Site Maintenance</option>
            <option>Hosting & Domain Setup</option>
            <option>Custom Forms</option>
            <option>Website Speed Optimization</option>
            <option>Hosting Setup & Domain Linking</option>
            <option>Payment Gateway Setup</option>
            <option>SEO Optimization (Advanced)</option>
            <option>Google Analytics Setup</option>
          </select>

          <textarea
            name="summary"
            placeholder="Your Requirement, Budget and Timeline"
            required
          ></textarea>

          <button type="submit">Submit</button>

        </form>
      </div>

    </div>
  );
};

export default Contact;
