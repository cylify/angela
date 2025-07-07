import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

function Yap() {
  const [yaps, setYaps] = useState([]);
  const [newYap, setNewYap] = useState("");

  const yapsCollectionRef = collection(db, "yaps");

  useEffect(() => {
    const unsubscribe = onSnapshot(yapsCollectionRef, (snapshot) => {
      setYaps(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  const addYap = async (e) => {
    e.preventDefault();
    if (!newYap) {
      alert("Please enter your poem or thought.");
      return;
    }
    await addDoc(yapsCollectionRef, {
      text: newYap,
      timestamp: new Date(),
    });
    setNewYap("");
  };

  const deleteYap = async (id) => {
    const yapDoc = doc(db, "yaps", id);
    await deleteDoc(yapDoc);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 to-pink-200 p-4 font-sans">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Missed Messages</h2>
      <p className="text-xm font-bold text-pink-600 mb-6 text-center">For when you need to let your thoughts out</p>

      {/* Add Yap Form */}
      <form onSubmit={addYap} className="bg-white p-4 rounded shadow mb-6 max-w-xl mx-auto space-y-3">
        <textarea
          placeholder="Write what you'd like, at your own time..."
          value={newYap}
          onChange={(e) => setNewYap(e.target.value)}
          rows={5}
          className="w-full border border-pink-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-pink-200 text-gray-800"
        />
        <button
          type="submit"
          className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 rounded"
        >
          Post Yap
        </button>
      </form>

      {/* Yap List */}
      <div className="max-w-xl mx-auto space-y-4">
        {yaps
          .sort((a, b) => b.timestamp?.seconds - a.timestamp?.seconds)
          .map((yap) => (
          <div key={yap.id} className="bg-white border border-pink-200 rounded p-4 shadow relative">
            <p className="text-gray-800 whitespace-pre-wrap">{yap.text}</p>
            <button
              onClick={() => deleteYap(yap.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-600 text-sm"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Yap;