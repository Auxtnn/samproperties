import React from "react";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-12 px-6  bg-gradient-to-r from-[#C1DEE8] to-[#ededed] text-gray-800">
      <div className="lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <div className="flex-shrink-0 justify-center items-center flex transition-transform duration-300 hover:scale-105">
            <Image
              alt="logo"
              src="/assets/bg.png"
              width={50}
              height={50}
              className="rounded-full"
              unoptimized
            />
          </div>
          <h1 className="text-2xl font-bold md:text-center">
            Samchukwu Properties
          </h1>

          <p className="text-sm md:text-center ">
            Your trusted partner in finding the perfect property. Whether
            buying, renting, or selling, we’re here to help.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <ul className="grid grid-cols-2 gap-4">
            <li className="hover:text-primary cursor-pointer">Contact Us</li>
            <li className="hover:text-primary cursor-pointer">Testimonials</li>
            <li className="hover:text-primary cursor-pointer">Listings</li>
            <li className="hover:text-primary cursor-pointer">Services</li>
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Blog</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}

      {/* Social Media */}
      <div className="text-center pt-8 pb-3">
        <div className="flex justify-center  space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100082877305169&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary transition-colors duration-300"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://www.instagram.com/chukwunonsoagbom?igsh=MWRsMG8wc2NvdTQ3ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary transition-colors duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://youtube.com/@samchukwuproperties?si=5EnCJvTCAGcFVr5K"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary transition-colors duration-300"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
      <div className=" text-center text-sm pb-4">
        <p>
          &copy; {new Date().getFullYear()} Samchukwu Properties. All Rights
          Reserved.
        </p>
      </div>
      <div className="fixed right-[1rem] bottom-10 border-2 rounded-full border-primary p-2 ">
        <Link href="https://wa.link/4u3ppa" target="_blank">
          <IoLogoWhatsapp className=" text-primary rounded-full p-1 md:text-5xl text-6xl bg-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
