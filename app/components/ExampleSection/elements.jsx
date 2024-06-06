import React from 'react';


const ExampleSection = () => {
  return (
    <div className="relative py-10 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold text-primary mb-4">Welcome to Our Agency</h1>
            <p className="text-lg lg:text-xl text-dark mb-6">
              We provide the best services for our clients.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-secondary transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ExampleSection;
