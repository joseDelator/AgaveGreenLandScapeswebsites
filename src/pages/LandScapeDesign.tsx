// LandscapeDesignServices.jsx

import React from 'react';

const LandscapeDesignServices = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Landscape Design Services</h2>

      <div className="mt-6 grid grid-cols-2 gap-4 ">
        {/* Replace the placeholder URLs with the actual URLs of your images */}
        <img src="https://via.placeholder.com/400" alt="Image 1" className="rounded-md shadow-md mb-4" />
        <img src="https://via.placeholder.com/400" alt="Image 2" className="rounded-md shadow-md mb-4" />
      </div>

      <p className="mb-6">
        At <strong>Agave Green Landscapes</strong>, we understand that a well-thought-out design is the foundation of any
        stunning landscape. Our Landscape Design Services bring your outdoor vision to life, creating a harmonious blend
        of aesthetics and functionality tailored to your preferences.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Our Landscape Design Process:</h3>

        <ol className="list-decimal pl-6">
          <li className='mb-3'>
            <strong>Initial Consultation:</strong> We begin by understanding your ideas, preferences, and goals for your
            outdoor space. Our team collaborates closely with you to capture your vision and requirements.
          </li>
          <li>
            <strong className='mb-3'>Site Analysis:</strong> Our experts conduct a thorough analysis of your property, considering
            topography, soil conditions, and existing features. This helps us optimize the design for your specific
            landscape.
          </li>
          <li>
            <strong className='mb-3'>Conceptual Design:</strong> Based on the gathered information, we develop conceptual designs that
            illustrate layout, plant selections, hardscape elements, and overall aesthetics. Your feedback is crucial in
            refining these concepts.
          </li>
          <li>
            <strong className='mb-3'>Detailed Plans:</strong> Once the conceptual design is approved, we create detailed plans and
            blueprints. These plans serve as a guide for our construction team, ensuring accurate and efficient
            implementation.
          </li>
        </ol>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {/* Replace the placeholder URLs with the actual URLs of your images */}
        <img src="https://via.placeholder.com/400" alt="Image 3" className="rounded-md shadow-md mb-4" />
        <img src="https://via.placeholder.com/400" alt="Image 4" className="rounded-md shadow-md mb-4" />
      </div>

      <p className="mt-6">
        Whether you're looking to revitalize an existing landscape or create a brand-new outdoor haven, our Landscape
        Design Services ensure that every element is meticulously planned to enhance the beauty and functionality of your
        space.
      </p>
    </div>
  );
};

export default LandscapeDesignServices;