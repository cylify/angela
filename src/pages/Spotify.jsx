import React from "react";

function Spotify() {
  const playlists = [
    {
      title: "angela",
      embedUrl: "https://open.spotify.com/embed/playlist/25BiqFutyDRtzS7ovL69v8",
      link: "https://open.spotify.com/playlist/25BiqFutyDRtzS7ovL69v8",
    },
    {
      title: "angel",
      embedUrl: "https://open.spotify.com/embed/playlist/5ZM00oN2UPAfOyLk1fhd2A",
      link: "https://open.spotify.com/playlist/5ZM00oN2UPAfOyLk1fhd2A",
    },
    {
      title: "a&a",
      embedUrl: "https://open.spotify.com/embed/playlist/3bQgj2ypbt6kzZW8mM3eRV",
      link: "https://open.spotify.com/playlist/3bQgj2ypbt6kzZW8mM3eRV",
    },
    {
      title: "blend",
      embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1EJI1cOhCN62uu",
      link: "https://open.spotify.com/playlist/37i9dQZF1EJI1cOhCN62uu",
    },
    {
      title: "akl.luvr",
      embedUrl: "https://open.spotify.com/embed/playlist/0aoS7MfiLVV0RmNVlrDjkR",
      link: "https://open.spotify.com/playlist/0aoS7MfiLVV0RmNVlrDjkR",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 to-pink-200 p-6 font-sans">
      <h2 className="text-4xl font-bold text-pink-600 mb-8 text-center">Playlists for Angela</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {playlists.map((playlist, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-pink-600 font-bold mb-2 text-center">{playlist.title}</h3>
            <iframe
              src={playlist.embedUrl}
              width="100%"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              className="rounded"
            ></iframe>
            <a
                href={playlist.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-center underline"
                style={{ color: "#ff69b4" }}
                >
                Open in Spotify
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Spotify;