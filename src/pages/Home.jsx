import React, { useEffect, useState } from "react";
import CardView from "../components/CardView";
import DataTableView from "../components/DataTableView";
import axios from "axios";
// import { fetchListings } from '../data/mockApi';

const Home = ({ listings }) => {
  const [isTableView, setIsTableView] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-semibold">Property Listings</h1>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded ${
                isTableView
                  ? "bg-cyan-500 shadow-sm  text-white"
                  : "bg-white border-2 border-cyan-400 hover:bg-cyan-500 shadow-sm hover:text-white"
              }`}
              onClick={() => setIsTableView(true)}
            >
              Table View
            </button>
            <button
              className={`px-4 py-2 rounded ${
                !isTableView
                  ? "bg-cyan-500 shadow-sm  text-white"
                  : "bg-white border-2 border-cyan-400 hover:bg-cyan-500 shadow-sm hover:text-white"
              }`}
              onClick={() => setIsTableView(false)}
            >
              Card View
            </button>
          </div>
        </div>

        {isTableView ? (
          <DataTableView listings={listings} />
        ) : (
          <CardView listings={listings} />
        )}
      </div>
    </div>
  );
};

export default Home;
