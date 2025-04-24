import React from 'react';
import '../css/Page5.css'; // Import the CSS file

const Page5 = () => {
    const testimonials = [
        {
            quote: "Great service from a trusted provider. The internet is very fast and stable. I am very glad with this service.",
            name: "James Macrus",
            role: "Customer"
        },
        {
            quote: "The staff and support are second to none. They are polished, proficient, and patient.",
            name: "Loana Hadid",
            role: "Customer"
        },
        {
            quote: "Very stable internet connection with reliable price for home office. Very glad to be a loyal customer.",
            name: "Souma Halifa",
            role: "Customer"
        }
    ];

    return (
        <div className="testimonials-container">
            <p>trusted by over 1500</p>
            <h2>What People are Saying</h2>
            <div className="trusted-logos">
                <img src="https://imgs.search.brave.com/H5kf1_Nl7Fj-AgNcQK4ZS1unvQIgKxPSJMPLp89IhZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c21vcmUucnVuL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAz/L2xvZ29pcHN1bS1s/b2dvLTUwLTItMzAw/eDc0LnBuZw" alt="Logo 2" />
                <img src="https://imgs.search.brave.com/H5kf1_Nl7Fj-AgNcQK4ZS1unvQIgKxPSJMPLp89IhZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c21vcmUucnVuL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAz/L2xvZ29pcHN1bS1s/b2dvLTUwLTItMzAw/eDc0LnBuZw" alt="Logo 2" />
                <img src="https://imgs.search.brave.com/H5kf1_Nl7Fj-AgNcQK4ZS1unvQIgKxPSJMPLp89IhZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c21vcmUucnVuL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAz/L2xvZ29pcHN1bS1s/b2dvLTUwLTItMzAw/eDc0LnBuZw" alt="Logo 2" />
                <img src="https://imgs.search.brave.com/H5kf1_Nl7Fj-AgNcQK4ZS1unvQIgKxPSJMPLp89IhZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c21vcmUucnVuL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAz/L2xvZ29pcHN1bS1s/b2dvLTUwLTItMzAw/eDc0LnBuZw" alt="Logo 2" />
            </div>

            <div className="testimonial-wrapper">
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <p>"{testimonial.quote}"</p>
                        <div className="testimonial-author">
                            <div className="author-image" />
                            <div>
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page5;
