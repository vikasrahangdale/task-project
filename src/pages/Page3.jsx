// PricingCard.js
import React from "react";
import "../css/page3.css";

const cardData = [
  {
    title: "Standard",
    name: "Home",
    price: "$29.95/mo",
    features: [
      "Fast internet 30 Mbps",
      "Mobile Broadband",
      "Home Line",
      "Free tv streaming",
      "Free Home Protect",
      "$80,000 coverage",
    ],
  },
  {
    title: "Super",
    name: "Office &  B2B",
    price: "$59.95/mo",
    features: [
      "Fast internet 100 Mbps",
      "Dedicated Support",
      "VoIP Line",
      "HD TV Streaming",
      "Advanced Security",
      "$200,000 coverage",
    ],
  },
  {
    title: "Premium",
    name: "Enterprise",
    price: "$99.95/mo",
    features: [
      "Fast internet 1 Gbps",
      "Enterprise Support",
      "Multiple Lines",
      "Ultra HD Streaming",
      "Complete Protection",
      "$500,000 coverage",
    ],
  },
];

const Page3 = () => {
  return (

    <div className="heading">
    <h3>Packages</h3>
    <h1>Choose your best Package</h1>
    
   
    <div className="card-container">
     
    {cardData.map((card, index) => (
  <div
    className={`pricing-card ${
      card.title === "Super"
        ? "premium-card"
        : "grey-card"



    }`}
    key={index}
  >




    <h3>{card.title}</h3>
    <h2>{card.name}</h2>
    <p className="price">{card.price}</p>
    <p className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
    </p>
    <ul>
      {card.features.map((feature, i) => (
        <li key={i}>
          <span className="icon">✔️</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button>Get Started</button>
  </div>
))}

    </div>

    </div>
  );
};

export default Page3;
