import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <form 
        action="https://formsubmit.co/olusegundennis88@gmail.com" 
        method="POST"
        className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
      >
        {/* Form Fields */}
        {['name', 'email', 'message'].map(field => (
          <div key={field} className="mb-4">
            <label htmlFor={field} className="block text-left mb-1 text-gray-700 capitalize">{field}</label>
            {field !== 'message' ? (
              <input 
                type={field === 'email' ? 'email' : 'text'} 
                id={field} 
                name={field} 
                placeholder={`Your ${field}`} 
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            ) : (
              <textarea 
                id={field} 
                name={field} 
                rows={4} 
                placeholder={`Your message here...`} 
                required
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            )}
          </div>
        ))}
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;