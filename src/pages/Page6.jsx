import React, { useState } from 'react';
import '../css/Page6.css';

const Page6 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: "What is web hosting?", answer: "We offer a wide range of hosting solutions, from web hosting to dedicated servers. Everything you need is right here." },
    { question: "How do I create a website?", answer: "Follow simple steps to create a website using different platforms." },
    { question: "How do I create a Web Application and host it on 9 Hosting?", answer: "You can utilize our comprehensive guides available online." },
    { question: "How can I setup my IP Address?", answer: "Follow the instructions provided by your internet service provider." },
    { question: "Is 9 Hosting really worth it?", answer: "Yes, we provide numerous benefits and excellent service." },
    { question: "Who is the best Hosting provider in UK?", answer: "We are here to ensure you find the best hosting solutions." },
    { question: "How do I create a website?", answer: "You can choose platforms like WordPress or use coding." }
  ];


  const cards = [
    {
        chat1: "Live Chat",
        description1: "Chat to us live — our team's ready to help, anytime.",
        icon2: <i class="ri-message-2-fill"></i>
    },
    {
        chat1: "Create Ticket",
        description1: "Need assistance? Raise a support ticket and we'll get right back to you.",
        icon2: <i class="ri-customer-service-line"></i>
    },
    {
        chat1: "FAQs",
        description1: "Browse FAQs and guides for quick, self-service support.",
        icon2: "❓"
    },
];

  const toggleFAQ = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="page6-container">
    <div className="faqs-container">
      <h2>Still Have Questions?</h2>
      <h5 className='one-text'>We offer a wide range of hosting solutions, from web hosting to dedicated servers. <br /> Everything you need is right here.</h5>
      <h4>What is web hosting ? </h4>
      <h6>Web Hosting is a type of Internet service that allows individuals, businesses, and organizations to make their websites accessible via the World Wide Web. In simple terms, web hosting is the process of storing website files on a server so that users can visit your website by typing in a domain name (like www.example.com).

When you build a website, it consists of various files like HTML, CSS, </h6>
<br /><br />
      <div className="faqs-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-toggle">{activeIndex === index ? '-' :'+🫰'}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
    <div className="card1-container">
            {cards.map((card, index) => (
                <div className="card" key={index}>
                    <div className="icon">{card.icon2}</div>
                    <h3>{card.chat1}</h3>
                    <p>{card.description1}</p>
                </div>
            ))}
        </div>

        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h1> <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none"> <path d="M30.7296 16.4227C32.0689 16.4227 33.1727 17.5141 32.9775 18.8391C32.6209 21.2596 31.7312 23.5816 30.3608 25.6326C28.5393 28.3587 25.9502 30.4834 22.9211 31.7381C19.892 32.9928 16.5589 33.3211 13.3432 32.6815C10.1275 32.0418 7.17375 30.463 4.85538 28.1446C2.53701 25.8262 0.958173 22.8725 0.318535 19.6568C-0.321103 16.4411 0.00718272 13.108 1.26188 10.0789C2.51657 7.04976 4.64132 4.46074 7.36744 2.63921C9.41839 1.26881 11.7404 0.379116 14.1609 0.0224763C15.4859 -0.172746 16.5773 0.931131 16.5773 2.27041C16.5773 3.60968 15.4803 4.67023 14.1695 4.94521C12.7098 5.25145 11.3144 5.83492 10.0619 6.67179C8.13338 7.96041 6.63026 9.79197 5.74265 11.9349C4.85503 14.0777 4.62279 16.4357 5.0753 18.7106C5.5278 20.9855 6.64472 23.0751 8.28481 24.7152C9.92491 26.3553 12.0145 27.4722 14.2894 27.9247C16.5643 28.3772 18.9223 28.145 21.0651 27.2574C23.208 26.3697 25.0396 24.8666 26.3282 22.9381C27.1651 21.6856 27.7486 20.2902 28.0548 18.8305C28.3298 17.5197 29.3903 16.4227 30.7296 16.4227Z" fill="white"/> <path d="M21.2189 16.2595C21.2189 18.823 19.1408 20.9011 16.5773 20.9011C14.0138 20.9011 11.9356 18.823 11.9356 16.2595C11.9356 13.696 14.0138 11.6178 16.5773 11.6178C19.1408 11.6178 21.2189 13.696 21.2189 16.2595Z" fill="#9E29C2"/> </svg> 9 Hosting</h1>
                    <p>123 Anywhere Street,<br/> London, United Kingdom.</p>
                    <a>012-3456-7890</a>
                    <br />
                    <a>support@9hosting.uk</a>
                </div>
                <div className="footer-links">
                    <h3>Quick Link</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Company</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Team</li>
                        <li>Term Of Service</li>
                        <li>Support</li>
                        <li>Faq</li>
                    </ul>
                </div>
                <div className="footer-keep-in-touch">
                    <h3>Keep in Touch</h3>
                    <input type="email" placeholder="Email address" />
                    <button>Subscribe</button>
                    <div className="social-icons">
                        <span><i class="ri-instagram-line"></i></span>
                        <span><i class="ri-facebook-circle-fill"></i></span>
                        <span><i class="ri-twitter-x-line"></i></span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>Copyright © 2025 - 9 Technology Group LTD</p>
            </div>
        </footer>
    </div>
    
  );
};

export default Page6;