import React from 'react';
import ServiceCard from './ServiceCard';
import 'remixicon/fonts/remixicon.css';
import '../css/Services.css';

const servicesData = [
  {
    icon: "ri-map-2-line",
    title: "Data Center Co-location",
    description: "Host your physical servers in our secure, high-performance data centers. Get 24/7 monitoring and redundant power."
  },
  {
    icon: "ri-global-line",
    title: "VPS Hosting",
    description: "Experience powerful virtual servers with full control. Enjoy high performance, root access, and scalability."
  },
  {
    icon: "ri-home-7-line",
    title: "Website Hosting",
    description: "Reliable and secure web hosting with fast loading, 24/7 support, and easy scalability for all business sizes."
  },
  {
    icon: "ri-cloud-line",
    title: "Infrastructure Consultancy",
    description: "Automatically back up and restore your data with our secure and scalable cloud infrastructure."
  },
  {
    icon: "ri-lock-line",
    title: "vNOC Monitoring",
    description: "Protect your website and customer data with robust SSL certificates and HTTPS encryption."
  },
  {
    icon: "ri-server-line",
    title: "Need a Custom Solution",
    description: "Get complete control with powerful hardware and dedicated resources tailored to your needs.",
    btn: "Get in Touch"
  },
];

console.log(servicesData.length);

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Service</h2>
      <h1>Our Top Notch Services</h1>
      <p>
        Enterprise-grade hosting solutions tailored to meet your business needs.<br />
        Unmatched reliability and performance guaranteed.
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            btn={service.btn} 
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
