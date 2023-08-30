import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = ({ listings }) => {
  const { id } = useParams();
  const listing = listings.find((item) => item.id === parseInt(id));

  if (!listing) {
    return <p>Loading...</p>; // Handle case where listing is not found
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-7xl flex justify-center">
        <div className="bg-white w-1/2 flex justify-center flex-col items-center shadow-lg rounded-lg p-8">
          <img
            src={listing.imageUrl}
            alt={listing.title}
            className="w-full h-64 object-cover rounded"
          />
          <h1 className="text-2xl font-semibold mt-4">{listing.title}</h1>
          <p className="text-gray-600">{listing.address}</p>
          <p className="text-gray-700">
            Beds: {listing.beds} | Baths: {listing.bath}
          </p>
          <p className="text-gray-700">
            Covered Area: {listing.coveredAreaSQFT} sqft
          </p>
          <p className="text-gray-700">Property Type: {listing.propertyType}</p>
          <p className="text-gray-700">
            Commercial: {listing.isCommercial ? "Yes" : "No"}
          </p>
          <p className="text-blue-500 mt-2">
            Price: ${listing.price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
