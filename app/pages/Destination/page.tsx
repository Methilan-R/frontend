import React from 'react'

const destinations = [
  {
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1522098543979-ffc7f79d5e78",
    description: "The city of love, lights, and legendary cuisine.",
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    description: "A vibrant blend of tradition, technology, and culture.",
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Tropical paradise with stunning beaches and temples.",
  },
  {
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    description: "The city that never sleeps, full of energy and dreams.",
  },
  {
    name: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1526481280690-5cbf956ae2fd",
    description: "An open-air museum of ancient ruins and rich history.",
  },
  {
    name: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1506023912703-42f3d09f53a5",
    description: "Iconic harbor views and sun-kissed beaches await.",
  },
]

const Destination = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="/images/hotel.jpg"
          alt="Destinations Hero"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Explore Top Destinations</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">
            Hand-picked places around the globe to turn your journey into unforgettable memories.
          </p>
        </div>
      </div>

      {/* Destination Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-gray-600">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Destination
