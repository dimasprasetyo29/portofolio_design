import React from "react";

const Mobil = ({ mobilData, onEdit, onDelete }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Available Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mobilData.map((mobil) => (
          <div
            key={mobil.id}
            className="border p-4 rounded shadow-lg bg-gradient-to-t from-gray-800 via-gray-700 to-gray-900"
          >
            <img
              src={mobil.image}
              alt={mobil.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{mobil.name}</h3>
            <p className="text-sm text-gray-300">{mobil.description}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => onEdit(mobil)} // Untuk mengedit mobil
                className="bg-blue-500 text-white py-1 px-3 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(mobil.id)} // Untuk menghapus mobil
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobil;
