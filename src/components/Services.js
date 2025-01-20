import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-200 text-black p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-8">What I Offer</h2>
        
        {/* Hard Skills Section */}
        <h5 className="text-3xl font-bold mt-4">Hard Skills</h5>
        <ul className="list-disc pl-8 mt-4 text-left">
          <li><strong>Manual Testing:</strong> Ensuring software quality through thorough manual testing processes.</li>
          <li><strong>Automated Testing:</strong> Implementing automated test scripts using tools like Cypress.</li>
          <li><strong>API Testing:</strong> Validating APIs using tools like Postman to ensure functionality and performance.</li>
          <li><strong>Performance Testing:</strong> Conducting performance tests with JMeter to assess application scalability and reliability.</li>
          <li><strong>Regression Testing:</strong> Ensuring new features do not break existing functionality through comprehensive regression testing.</li>
          <li><strong>Test Case Development:</strong> Creating detailed test cases and documentation for various testing scenarios.</li>
          <li><strong>Agile Methodologies:</strong> Collaborating in Agile teams to enhance product quality through continuous testing.</li>
          <li><strong>Bug Tracking and Reporting:</strong> Utilizing tools like JIRA for effective bug tracking and reporting.</li>
          <li><strong>Programming Skills:</strong> Gaining proficiency in programming languages such as JavaScript and Python for writing automated tests.</li>
          <li><strong>CI/CD Practices:</strong> Learning about Continuous Integration/Continuous Deployment (CI/CD) using tools like Jenkins to integrate testing seamlessly into development workflows.</li>
          <li><strong>Security Testing with SQL:</strong> Exploring security testing fundamentals to identify vulnerabilities in applications, including testing for SQL injection attacks. SQL injection testing ensures that database queries are properly sanitized and protected from malicious inputs. By simulating attacks, testers validate the application's ability to resist unauthorized access or data breaches through SQL-based exploits.</li>
          <li><strong>User Acceptance Testing (UAT):</strong> Conducting UAT to validate that the software meets user requirements and is ready for production by involving end-users in the testing process.</li>
        </ul>

        {/* Problem-Solving Skills Section */}
        <div className="mt-12">
          <h5 className="text-3xl font-bold">Problem-Solving Skills</h5>
          <ul className="list-disc pl-8 mt-4 text-left">
            <li><strong>Critical Thinking:</strong> Evaluating information and arguments to make informed decisions.</li>
            <li><strong>Creativity:</strong> Using creativity to develop innovative solutions to challenges.</li>
            <li><strong>Analytical Thinking:</strong> Ability to analyze complex problems and identify effective solutions.</li>
            <li><strong>Resourcefulness:</strong> Finding quick and clever ways to overcome difficulties.</li>
            <li><strong>Logical Reasoning:</strong> Using structured thinking to solve problems effectively.</li>
            <li><strong>Risk Assessment:</strong> Identifying and evaluating potential risks in decision-making.</li>
            <li><strong>Troubleshooting:</strong> Diagnosing and resolving issues efficiently.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;