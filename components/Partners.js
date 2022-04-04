import React from "react";
import Image from "next/image";

const partnerLogo = [
  {
    id:1,
    source: "/images/partners/playstation-vector-icon.svg",
    alt: "Playstation icon",
    height: "77.18",
    width: "100",
  },
  {
    id:2,
    source: "/images/partners/nike-vector-icon.svg",
    alt: "Nike icon",
    height: "35",
    width: "100",
  },
  {
    id:3,
    source: "/images/partners/spotify-vector-icon.svg",
    alt: "Spotify icon",
    height: "100",
    width: "100",
  },
  {
    id:4,
    source: "/images/partners/apple-vector-icon.svg",
    alt: "Apple icon",
    height: "81.25",
    width: "68.26",
  },
  {
    id:5,
    source: "/images/partners/google-vector-icon.svg",
    alt: "Google icon",
    height: "82.03px",
    width: "80.39px",
  },
  {
    id:6,
    source: "/images/partners/netflix-vector-icon.svg",
    alt: "Netflix icon",
    height: "100",
    width: "55.02",
  },
  {
    id:7,
    source: "/images/partners/microsoft-vector-icon.svg",
    alt: "Apple icon",
    height: "79.17",
    width: "79.17",
  },
];

const Partners = () => {
  return (
    <>
      {partnerLogo.map((partner) => (
        <Image
        key={partner.id}
          src={partner.source}
          alt={partner.alt}
          width={partner.width}
          height={partner.height}
          layout="fixed"
        />
      ))}
    </>
  );
};

export default Partners;
