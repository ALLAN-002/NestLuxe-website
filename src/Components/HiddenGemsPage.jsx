import React from 'react';

const hiddenGems = [
  {
    title: 'Sunset at Amboseli',
    image: '/images/sunset-amboseli.jpg', // Updated to the correct image path
    description: 'A magical sunset view just outside Nairobi.',
  },
  {
    title: 'Riverbend Retreat',
    image: '/images/riverbend-retreat.jpg', // Updated to the correct image path
    description: 'Serene riverside views in the heart of Kiambu.',
  },
  {
    title: 'Historic Fort Hill',
    image: '/images/historic-fort-hill.jpg', // Updated to the correct image path
    description: 'A hidden historical site near Limuru with panoramic views.',
  },
  // You can add more hidden gems as needed
];

const HiddenGemsPage = () => {
  return (
    <section className="p-8 bg-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Hidden Gems</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mapping through the hidden gems array to display each item */}
        {hiddenGems.map((gem, index) => (
          <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            {/* Display the image */}
            <img
              src={gem.image}
              alt={gem.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Title and description of the gem */}
              <h3 className="text-2xl font-semibold">{gem.title}</h3>
              <p className="mt-2 text-gray-700">{gem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HiddenGemsPage;
