import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Skills from "./component/Skills/Skills";
import Experience from "./component/Experience/Experience";
import Projects from "./component/Projects/projects";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Mobil from "./component/Mobil/Mobil";
import Edit from "./component/Mobil/Edit";
import Tambah from "./component/Mobil/Tambah";
import Login from "./component/Login/Login";

import web1 from "./assets/image/koenigseeg.jpg";
import web2 from "./assets/image/corvette.jpg";
import web3 from "./assets/image/bmw.jpg";
import web4 from "./assets/image/pagani.jpg";

const initialMobilData = [
  {
    id: 1,
    name: "BMW M4 COMPETITION",
    image: web3,
    description: "A high-performance sports car from BMW.",
  },
  {
    id: 2,
    name: "CHEVROLET CORVETTE",
    image: web2,
    description: "An iconic American sports car.",
  },
  {
    id: 3,
    name: "FERRARI F8 SPIDER",
    image: web4,
    description: "A luxurious convertible from Ferrari.",
  },
  {
    id: 4,
    name: "KOENIGSEEG",
    image: web1,
    description: "A hypercar known for its speed and innovation.",
  },
];

function App() {
  const [mobilData, setMobilData] = useState(initialMobilData);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMobil, setSelectedMobil] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login

  const handleAddMobil = (newMobil) => {
    setMobilData((prevMobilData) => [...prevMobilData, newMobil]);
  };

  const handleEditMobil = (editedMobil) => {
    setMobilData((prevMobilData) =>
      prevMobilData.map((mobil) =>
        mobil.id === editedMobil.id ? editedMobil : mobil
      )
    );
    setIsEditing(false);
    setSelectedMobil(null);
  };

  const handleSelectMobilForEdit = (mobil) => {
    setIsEditing(true);
    setSelectedMobil(mobil);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Update status login
  };

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes */}
        <Route
          path="/hero"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Hero />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/skills"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Skills />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/experience"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Experience />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Projects />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Contact />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/footer"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/mobil"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Mobil mobilData={mobilData} onEdit={handleSelectMobilForEdit} />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <ProtectedRoute>
              {isEditing ? (
                <>
                  <Navbar />
                  <Edit selectedMobil={selectedMobil} onEditMobil={handleEditMobil} />
                </>
              ) : (
                <Navigate to="/mobil" />
              )}
            </ProtectedRoute>
          }
        />
        <Route
          path="/tambah"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Tambah onAddMobil={handleAddMobil} />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
