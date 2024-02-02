
import React from 'react';
import dsf from '../../public/grass.webp';
import stab from '../../public/backroud.webp'
import Image from 'next/image';
import other from '../../public/gravelphoto.webp'
const LandscapeConstructionServices = () => {
  return (
    <div className="bg-base-200 p-8 ">
      <h2 className="text-3xl font-bold mb-6 text-center">Landscape Construction</h2>
      <div className="mt-6 grid gap-4 items-center">
        <Image src={stab} alt="Backyard Napa" className="rounded-md shadow-md mb-4" />
      </div>
      <p className="mb-6">
        Transforming visions into reality, our Landscape Construction Services at <strong>Agave Green Landscapes</strong> are
        dedicated to creating outdoor spaces that seamlessly blend beauty and functionality. With a passion for
        construction, we turn ordinary landscapes into extraordinary environments.
      </p>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Our Landscape Construction Capabilities:</h3>
        <ul className="list-disc pl-6">
          <li className='mb-3'>
            <strong>Hardscape Construction:</strong> From patios and walkways to retaining walls and outdoor structures,
            our skilled craftsmen bring hardscape elements to life, enhancing the structural beauty of your outdoor space.
          </li>
          <li className='mb-3'>
            <strong>Softscape Installation:</strong> We specialize in the strategic placement of plants, trees, and
            greenery, ensuring a harmonious and vibrant balance between soft and hard elements in your landscape.
          </li>
          <li className='mb-3'>
            <strong>Water Features:</strong> Elevate your outdoor experience with the soothing sounds of water features.
            Our construction services include the installation of fountains, ponds, and other water elements for a
            tranquil atmosphere.
          </li>
          <li className='mb-3'>
            <strong>Outdoor Lighting:</strong> Illuminate your landscape's beauty with carefully designed lighting
            solutions. Our construction team integrates outdoor lighting to enhance safety, highlight focal points, and
            extend the usability of your space into the evening hours.
          </li>
          <li className='mb-3'>
            <strong>Fence Installation:</strong> Define and enhance your property with our professional fence
            installation services. We offer a variety of styles and materials to suit your privacy, security, and aesthetic
            preferences.
          </li>
          <li>
            <strong>Concrete Services:</strong> Our expertise extends to concrete work, including pathways, driveways, and
            other concrete features. We combine durability with design to create functional and visually appealing
            concrete elements.
          </li>
          <li className='mb-3'>
            <strong>Artificial Grass Installation:</strong> Enjoy the beauty of lush green grass year-round with our
            artificial grass installation services. Experience low maintenance, water conservation, and a consistently
            vibrant lawn.
          </li>
        </ul>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">

        <Image src={dsf} alt="Artificial grass"className="rounded-md shadow-md mb-4" />
        <Image src={other} alt="Backyard Sonoma" className="rounded-md shadow-md mb-4" />
      </div>
      <p className="mt-6">
        At <strong>Agave Green Landscapes</strong>, we actively collaborate with cities and counties to promote
        water-saving practices. Take advantage of available rebates for switching to water-efficient landscaping. Let us
        help you navigate the process and create a sustainable, beautiful outdoor space that aligns with conservation
        initiatives.
      </p>
    </div>
  );
};

export default LandscapeConstructionServices;