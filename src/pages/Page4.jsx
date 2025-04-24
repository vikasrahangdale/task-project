import React from 'react';
import '../css/Page4.css'; // CSS file for styling

const features = [
    { icon1: '🕒', title: 'True 24/7 Support' },
    { icon1: '🔗', title: 'Great Connectivity' },
    { icon1: '🏢', title: 'Server Room Maintenance' },
    { icon1: '🔒', title: 'Security' },
    { icon1: '⚡', title: 'Redundant Power' },
    { icon1: '🌐', title: 'Network Redundancy' },
    { icon1: '📈', title: 'Scalable' },
    { icon1: '📍', title: 'Usable Clean IP’s' },
    { icon1: '🛡️', title: 'Data Protection' },
    { icon1: '✅', title: '100% Uptime' },
];

const Page4 = () => {
    return (
        <div className='full-screen'>
            <div className="container">
                <h1>Why Us</h1>
                <h2>What Every 9 Hosting Service Includes</h2>
                <p>
                    Your infrastructure is your business lifeline — and we treat it that way.
                    Every service we offer comes with essential features to keep you connected,
                    secure and supported, 24/7.
                </p>

                <div className="circle-container">
                    {features.map((feature, index) => (
                        <div className="circle-item" key={index}>
                            <div className="circle">{feature.icon1}</div>
                            <p className="circle-label">{feature.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page4;
