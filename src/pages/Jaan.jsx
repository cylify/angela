import React from "react";

function Jaan() {
  const poem = `
I want to know your heart’s language
not the words you say, the words you don’t

In urdu we call someone we love “jaan”.
It means life. soul. my everything
you are my jaan, my life, my heart

I don’t want to own or fix you
I want to understand you so deeply
that your feelings feel like mine

to know your heart like mine is my wish
near or far, silent or speaking
I wish for that only
  `;

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 to-pink-200 p-16 flex justify-center items-center font-serif">
      <div className="bg-white bg-opacity-80 p-6 rounded shadow max-w-xl w-full">
        <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">Jaan</h2>
        <p className="text-xl text-center mb-6">A poem to you, my Angela.</p>
        <pre className="whitespace-pre-wrap text-gray-800 text-center leading-relaxed">
          {poem}
        </pre>
      </div>
    </div>
  );
}

export default Jaan;