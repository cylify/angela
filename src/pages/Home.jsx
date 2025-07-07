import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"; // adjust path if needed

function Home() {
  const navigate = useNavigate();
  const petals = Array.from({ length: 30 });

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 to-pink-200 flex flex-col items-center">
      {/* Petals */}
      {petals.map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `-${Math.random() * 20}vh`,
            animation: `fall ${5 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <div
            className="rounded-full opacity-70 bg-pink-300"
            style={{
              width: `${10 + Math.random() * 15}px`,
              height: `${10 + Math.random() * 15}px`,
              animation: `sway ${3 + Math.random() * 2}s ease-in-out infinite alternate`,
              borderRadius: "50% 50% 50% 50%",
            }}
          />
        </div>
      ))}

      {/* Message */}
      <div className="relative z-10 text-center px-4 mt-70 mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700 mb-2">
          My Dearest Angela
        </h1>
        <p className="text-pink-600 text-lg sm:text-xl max-w-xl mx-auto">
          You are my beautiful rose, my forever garden of love. May this always remind you of how cherished you are every day.
        </p>
      </div>

      {/* Up Arrow to Letter Page */}
      <button
        onClick={() => navigate("/letter")}
        className="text-pink-500 hover:text-pink-300 text-3xl animate-bounce mb-25"
      >
        ↑
      </button>

      {/* Roses Footer only here */}
      <Footer />

      {/* Keyframes */}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(0vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes sway {
            0% {
              transform: translateX(0px);
            }
            100% {
              transform: translateX(20px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;