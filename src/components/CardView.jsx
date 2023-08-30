import React from "react";
import { Link } from "react-router-dom";

const CardView = ({ listings }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
      {listings.map((listing) => (
        <Link to={`/listing/${listing.id}`}>
          <div key={listing.id} className="bg-white rounded-lg p-4 shadow-lg">
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-52 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
            <p className="text-gray-600 mb-2">{listing.address}</p>
            <p className="text-gray-700">
              Beds: {listing.beds} | Baths: {listing.bath}
            </p>
            <p className="text-blue-500 mt-2">
              Price: ${listing.price.toLocaleString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardView;
