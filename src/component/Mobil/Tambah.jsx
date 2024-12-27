import React, { useState } from "react";

const Tambah = ({ onAddMobil }) => {
  const [newMobil, setNewMobil] = useState({
    name: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMobil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani pemilihan file gambar
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Membuat URL sementara untuk file gambar
      setNewMobil((prev) => ({
        ...prev,
        image: imageUrl, // Menyimpan URL gambar untuk ditampilkan
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMobilData = { ...newMobil }; // Tidak perlu ID karena json-server akan otomatis menambahkan ID

    // Mengirimkan data ke json-server (API)
    fetch('http://localhost:5000/mobils', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMobilData),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddMobil(data); // Fungsi callback untuk memperbarui state di parent component
        setNewMobil({
          name: "",
          image: "",
          description: "",
        });
      })
      .catch((error) => console.error('Error adding new mobil:', error));
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Car</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gradient-to-t from-gray-800 via-gray-700 to-gray-900 p-4 rounded shadow-lg">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={newMobil.name}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="bg-gradient-to-t from-gray-800 via-gray-700 to-gray-900 p-4 rounded shadow-lg">
          <label className="block text-sm font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange} // Menambahkan fungsi untuk menangani file gambar
            className="w-full border p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="bg-gradient-to-t from-gray-800 via-gray-700 to-gray-900 p-4 rounded shadow-lg">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={newMobil.description}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-gray-800 text-white"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-6 rounded mt-4">
          Add Car
        </button>
      </form>

      {/* Menampilkan gambar mobil setelah dipilih */}
      {newMobil.image && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Preview Image</h3>
          <img
            src={newMobil.image}
            alt={newMobil.name}
            className="mt-4 max-w-full h-auto rounded-lg"
            style={{ maxWidth: '300px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Tambah;
