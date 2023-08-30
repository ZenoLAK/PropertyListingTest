import React, { useState } from "react";
import { FaSort, FaSearch } from "react-icons/fa";
import { orderBy } from "lodash";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DataTableView = ({ listings }) => {
  const [sortedListings, setSortedListings] = useState(listings);
  const [sortBy, setSortBy] = useState("price");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 10;
  const history = useHistory();

  const handleRowClick = (listingId) => {
    history.push(`/listing/${listingId}`);
  };
  const handleSort = (key) => {
    const sorted = orderBy(sortedListings, key);
    setSortedListings(sorted);
    setSortBy(key);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = listings.filter(
      (listing) =>
        listing.title.toLowerCase().includes(query) ||
        listing.address.toLowerCase().includes(query)
    );
    setSearchQuery(query);
    setSortedListings(filtered);
  };

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = sortedListings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search by title or address"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border rounded focus:outline-none"
        />
        <div className="ml-4">
          Sort by:
          <button
            onClick={() => handleSort("price")}
            className={`ml-2 ${
              sortBy === "price" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Price <FaSort className="inline-block" />
          </button>
          <button
            onClick={() => handleSort("beds")}
            className={`ml-2 ${
              sortBy === "beds" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            Beds <FaSort className="inline-block" />
          </button>
        </div>
      </div>
      <div className=" w-full overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Beds</th>
              <th className="px-4 py-2">Baths</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {currentListings.map((listing) => (
              <tr
                onClick={() => handleRowClick(listing.id)}
                key={listing.id}
                className="border-t   hover:bg-gray-50"
              >
                <td className="px-4 py-2">
                  <img
                    src={listing.imageUrl}
                    alt={listing.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{listing.title}</td>
                <td className="px-4 py-2">{listing.address}</td>
                <td className="px-4 py-2">{listing.beds}</td>
                <td className="px-4 py-2">{listing.bath}</td>
                <td className="px-4 py-2">${listing.price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        {Array.from(
          { length: Math.ceil(sortedListings.length / listingsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DataTableView;
