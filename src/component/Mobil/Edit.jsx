import React, { useState, useEffect } from "react";

const Edit = ({ selectedMobil, onEditMobil }) => {
  const [editedMobil, setEditedMobil] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (selectedMobil) {
      setEditedMobil(selectedMobil);
    }
  }, [selectedMobil]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMobil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditMobil(editedMobil);
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="bg-gradient-to-t from-gray-800 via-gray-700 to-gray-900 p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Car</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-4 rounded shadow-lg">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={editedMobil.name || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded text-gray-900"
            />
          </div>
          <div className="p-4 rounded shadow-lg">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={editedMobil.description || ""}
              onChange={handleChange}
              className="w-full border p-2 rounded text-gray-900"
              rows="4"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded mt-4">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
