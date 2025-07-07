import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

function Navbar() {
  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-lg shadow-md py-3 px-6 flex justify-between items-center rounded-xl mx-4 mt-4 animate__animated animate__fadeInDown">
      <Link to="/" className="text-pink-600 font-bold text-xl no-underline !text-pink-600">
        Adi & Angela
      </Link>

      <div className="flex gap-4">
        <Link to="/wishlist" className="text-pink-600 hover:text-pink-800 font-medium no-underline !text-pink-600">Wishlist</Link>
        <Link to="/pictures" className="text-pink-600 hover:text-pink-800 font-medium no-underline !text-pink-600">Pictures</Link>
        <Link to="/spotify" className="text-pink-600 hover:text-pink-800 font-medium no-underline !text-pink-600">Spotify</Link>
        <Link to="/todo" className="text-pink-600 hover:text-pink-800 font-medium no-underline !text-pink-600">To-do</Link>
        <Link to="/yap" className="text-pink-600 hover:text-pink-800 font-medium no-underline !text-pink-600">Yap</Link>
        <Link to="/socials" className="text-pink-600 hover:text-pink-800 font-medium no-underline !text-pink-600">Socials</Link>
      </div>
    </nav>
  );
}

export default Navbar;
