import React from 'react';
import ViewMoreModal from './ViewMoreModal';

const SoftSkills = () => {
  return (
    <div className="section">
      <h2>Soft Skills</h2>
      <div className="cards">
        <div className="card">
          <h3>Adaptability</h3>
          <p>Quickly adapts to new technologies and environments, demonstrated in various development roles.</p>
          <ViewMoreModal
            title="Adaptability"
            description={`Adaptability is a key strength that I've developed through multiple roles. In my various internships and projects, I constantly had to learn and apply new technologies in dynamic environments. For instance, I quickly adapted to .NET and Flutter during my internships, where I learned to work with different teams and tools. This adaptability allowed me to contribute effectively to diverse projects, and it has been instrumental in accelerating my personal and professional growth.`}
          />
        </div>

        <div className="card">
          <h3>Leadership</h3>
          <p>Led the Homate startup, managing a team and delivering a mobile application.</p>
          <ViewMoreModal
            title="Leadership"
            description={`I demonstrated leadership skills while leading the Homate startup. Managing a team of developers and designers, I ensured the project stayed on track and deadlines were met. By delegating tasks based on individual strengths, maintaining clear communication, and providing motivation, we delivered a mobile application using Flutter and Firebase. The success of this project not only showcased my leadership abilities but also my capacity to guide a team through challenges and ensure collaborative success.`}
          />
        </div>

        <div className="card">
          <h3>Fast Learner</h3>
          <p>Quickly mastered new technologies such as .NET and Flutter during internships and freelancing.</p>
          <ViewMoreModal
            title="Fast Learner"
            description={`As a fast learner, I've consistently demonstrated my ability to master new technologies and frameworks. During my internships, I rapidly acquired proficiency in .NET and Flutter, which allowed me to contribute to various projects effectively. My ability to quickly learn and apply new skills helped me minimize the learning curve and deliver value sooner, which positively impacted project timelines and outcomes. This skill is crucial in a constantly evolving tech landscape and has been one of my key strengths in every role I've taken.`}
          />
        </div>

        <div className="card">
          <h3>Time Management</h3>
          <p>Effectively managed time while balancing freelancing with academic responsibilities, ensuring timely delivery of projects.</p>
          <ViewMoreModal
            title="Time Management"
            description={`Time management has been crucial in balancing freelancing, academic responsibilities, and internships. By prioritizing tasks, setting clear goals, and maintaining a structured schedule, I consistently delivered quality work on time. This skill was particularly important during my freelancing periods, where I had to juggle multiple clients while keeping up with my academic schedule. The impact of good time management is evident in my ability to complete projects on time and exceed client expectations, leading to repeat business and positive feedback.`}
          />
        </div>

        <div className="card">
          <h3>Collaboration</h3>
          <p>Worked effectively in teams, ensuring successful project outcomes through communication and teamwork.</p>
          <ViewMoreModal
            title="Collaboration"
            description={`Collaboration has been at the heart of many of my projects, especially in team-oriented environments like startups and internships. I've collaborated with cross-functional teams, including developers, designers, and product managers, to ensure seamless project execution. By fostering open communication and understanding the strengths of team members, I helped ensure successful project outcomes. This skill has not only enhanced my ability to work with diverse teams but also taught me the importance of collective problem-solving and shared success.`}
          />
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
