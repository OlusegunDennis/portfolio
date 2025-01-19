import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-8">My Skills</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Skill Cards */}
                {['Manual Testing', 'API Testing', 'Automation Testing', 'Performance Testing', 'CI/CD', 'SQL'].map(skill => (
                    <div key={skill} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">{skill}</h3>
                        <p className="text-gray-600">Description of {skill}.</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;