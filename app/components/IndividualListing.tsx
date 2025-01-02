// components/PropertyImageCarousel.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface Media {
  id: string;
  url: string;
  type: "image" | "video";
}

interface Props {
  media: Media[];
}

const getEmbedUrl = (url: string, type: "image" | "video") => {
  if (type === "video") {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId =
        new URL(url).searchParams.get("v") || url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes("facebook.com")) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}`;
    }
  }
  return url; // For images, return the original URL
};

export const PropertyImageCarousel = ({ media }: Props) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 5000 }}
        className="h-full rounded-lg"
      >
        {media.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <div className="relative w-full h-full">
              {item.type === "image" ? (
                <Image
                  src={item.url}
                  alt={`Property media ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0} // Only prioritize loading the first image
                />
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={getEmbedUrl(item.url, item.type)}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: "none", overflow: "hidden" }}
                ></iframe>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const AgentContact = ({ propertyTitle, propertyAddress }) => {
  // WhatsApp link with pre-filled message
  const agentPhone = "+2347035214886"; // Agent's phone number in international format
  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in the property: ${propertyTitle} located at ${propertyAddress}`
  );
  const whatsappUrl = `https://wa.me/${agentPhone}?text=${whatsappMessage}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src="/assets/sam.jpg"
          alt="agent picture"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Samchukwu Properties
          </h3>
          <p className="text-gray-600">Real Estate Agent</p>
        </div>
      </div>
      <div className="space-y-3">
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/80 transition-colors duration-300">
            Contact Agent via WhatsApp
          </button>
        </Link>
        <a
          href={`tel:${agentPhone}`}
          className="block w-full text-center bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors duration-300"
        >
          Call {agentPhone}
        </a>
        <a
          href="mailto:samchukwuproperties@gmail.com"
          className="block w-full text-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors duration-300"
        >
          Email Agent
        </a>
      </div>
    </div>
  );
};
