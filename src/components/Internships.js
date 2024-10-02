import React from 'react';
import ViewMoreModal from './ViewMoreModal';

const Internships = () => {
  return (
    <div className="section">
      <h2>Internships</h2>
      <div className="cards">
        <div className="card">
          <h3>.NET Developer Internship</h3>
          <p>Company:<span className="company-name"> Malabar Group</span></p>
          <p><strong>Location:</strong> Calicut, Kerala</p>
          <p><strong>Timeline:</strong> May 2024 – June 2024</p>
          <ViewMoreModal
            title=".NET Developer Internship"
            description={`Developed and maintained software using ASP.NET and .NET Windows Form applications.\n
                          Achieved a significant reduction in data entry time from minutes to seconds, replacing legacy software and improving operational throughput.\n
                          Gained hands-on experience with Dynamics 365, focusing on finance and operations modules.\n
                          Designed a desktop software application in .NET, which is now live after successful verification and testing, providing valuable functionality for the company’s operations.`}
          />
        </div>

        <div className="card">
          <h3>Python Developer Internship</h3>
          <p>Company:<span className="company-name"> AuroTech Solution</span></p>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Timeline:</strong> May 2024</p>
          <ViewMoreModal
            title="Python Developer Internship"
            description={`Implemented and optimized Python scripts for various applications.\n
                          Utilized Python libraries and frameworks for rapid application development.`}
          />
        </div>

        <div className="card">
          <h3>Content Editor & Proofreader</h3>
          <p>Company:<span className="company-name"> Medulla</span></p>
          <p><strong>Location:</strong> Malappuram, Kerala</p>
          <p><strong>Timeline:</strong> May 2023 – July 2023</p>
          <ViewMoreModal
            title="Content Editor & Proofreader Internship"
            description={`Conducted web scraping and data conversion tasks using tools like Word and Excel.\n
                          Generated and validated flashcards using AI tools such as Notion and ChatGPT from scraped data.\n
                          Communicated with subject matter experts, particularly in the medical field, to ensure accuracy and relevance of content.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Internships;
