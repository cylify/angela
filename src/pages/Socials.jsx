import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaDiscord,
  FaSpotify,
} from "react-icons/fa";

function Socials() {
  const adiSocials = [
    {
      platform: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      username: "@desire42k",
      link: "https://instagram.com/desire42k",
    },
    {
      platform: "TikTok",
      icon: <FaTiktok className="text-black text-3xl" />,
      username: "@cylify",
      link: "https://www.tiktok.com/@cylify",
    },
    {
      platform: "Discord",
      icon: <FaDiscord className="text-purple-500 text-3xl" />,
      username: "desire42k",
      link: "https://discordapp.com/users/927112788252450856",
    },
    {
      platform: "Spotify",
      icon: <FaSpotify className="text-green-500 text-3xl" />,
      username: "adi",
      link: "https://open.spotify.com/user/s2v1xif1fq3hrb82m2xz3q60z?si=f0212cd404a04b0b",
    },
  ];

  const angelaSocials = [
    {
      platform: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      username: "@anjela.akl",
      link: "https://instagram.com/anjela.akl",
    },
    {
      platform: "TikTok",
      icon: <FaTiktok className="text-black text-3xl" />,
      username: "@anjela.akl",
      link: "https://www.tiktok.com/@anjela.akl",
    },
    {
      platform: "Discord",
      icon: <FaDiscord className="text-purple-500 text-3xl" />,
      username: "ak.akl",
      link: "https://discordapp.com/users/708128367186280499",
    },
    {
      platform: "Spotify",
      icon: <FaSpotify className="text-green-500 text-3xl" />,
      username: "angela",
      link: "https://open.spotify.com/user/dv3ib3d4jboe704x5anmo2645?si=0ffae8b371ab49a6",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-100 to-pink-200 p-6 font-sans">
      <h2 className="text-4xl font-bold text-pink-600 mb-8 text-center">THE SOCIALS</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Adi Section */}
        <div>
          <h3 className="text-2xl font-bold text-pink-500 mb-4 text-center">Adi</h3>
          <div className="space-y-4">
            {adiSocials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white rounded-lg p-4 shadow hover:shadow-md transition"
              >
                {social.icon}
                <div className="ml-4">
                  <p className="text-pink-600 font-semibold">{social.platform}</p>
                  <p className="text-gray-700">{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Angela Section */}
        <div>
          <h3 className="text-2xl font-bold text-pink-500 mb-4 text-center">Angela</h3>
          <div className="space-y-4">
            {angelaSocials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-white rounded-lg p-4 shadow hover:shadow-md transition"
              >
                {social.icon}
                <div className="ml-4">
                  <p className="text-pink-600 font-semibold">{social.platform}</p>
                  <p className="text-gray-700">{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;