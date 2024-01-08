import React from 'react';
const LandscapeManagementExcellence = () => {
  return (
    <div className="bg-base-200 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Landscape Management</h2>

      <p>
        At <strong>Agave Green Landscapes</strong>, our commitment to creating and maintaining exceptional outdoor spaces
        extends beyond the initial design and construction. We take pride in offering comprehensive landscape management
        services to ensure the longevity and vibrancy of your investment.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Our Landscape Management Services:</h3>

        <ul className="list-disc pl-6">
          <li>
            <strong>Regular Maintenance:</strong> Our skilled team provides routine maintenance services, including lawn
            care, pruning, and seasonal clean-ups, to keep your landscape looking its best throughout the year.
          </li>
          <li>
            <strong>Irrigation System Optimization:</strong> We assess and optimize irrigation systems to ensure
            efficient water usage, promoting healthy plant growth while conserving resources.
          </li>
          <li>
            <strong>Fertilization and Soil Health:</strong> Tailored fertilization programs are implemented to nourish
            your plants and maintain soil health, fostering a thriving and sustainable landscape.
          </li>
          <li>
            <strong>Pest and Disease Control:</strong> Our proactive approach includes monitoring for pests and diseases,
            implementing preventive measures, and addressing issues promptly to protect the health of your greenery.
          </li>
          <li>
            <strong>Hardscape Maintenance:</strong> We extend our care to hardscape elements, conducting inspections and
            repairs as needed to preserve the structural integrity and aesthetic appeal of patios, walkways, and other
            features.
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {/* Replace the placeholder URLs with the actual URLs of your images */}
        <img src="https://via.placeholder.com/400" alt="Landscape Example 1" className="rounded-md shadow-md" />
        <img src="https://via.placeholder.com/400" alt="Landscape Example 2" className="rounded-md shadow-md" />
        <img src="https://via.placeholder.com/400" alt="Landscape Example 3" className="rounded-md shadow-md" />
        <img src="https://via.placeholder.com/400" alt="Landscape Example 4" className="rounded-md shadow-md" />
      </div>
    </div>
  );
};

export default LandscapeManagementExcellence;