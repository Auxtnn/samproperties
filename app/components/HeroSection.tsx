"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className="w-full px-4 py-8 md:py-0 bg-gradient-to-r from-[#C1DEE8] to-[#ededed]"
    >
      <div className="lg:w-11/12 mx-auto pt-20 pb-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Content Section */}
          <motion.div
            variants={staggerChildren}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <div className="space-y-4">
              <motion.span
                variants={fadeInFromLeft}
                className="inline-block text-gray-800 text-xl font-medium"
              >
                Welcome to Samchukwu Properties
              </motion.span>

              <motion.h1
                variants={fadeInFromLeft}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Find Your Dream Home
              </motion.h1>

              <motion.p
                variants={fadeInFromLeft}
                className="text-gray-600 md:max-w-lg"
              >
                Discover the perfect property tailored to your needs. Whether
                you're buying, renting, or investing, we make it effortless.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex gap-4 pt-4 md:justify-start justify-center md:items-start items-center"
            >
              <Link href="/listings">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-4 rounded-full bg-black text-white font-medium hover:bg-black/90 transition-all focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  Explore Listings
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary border px-8 py-4 rounded-full border-primary hover:bg-white hover:text-black transition-all font-semibold"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div variants={imageAnimation} className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] md:aspect-square w-full max-w-xl mx-auto">
              <Image
                src="/assets/Img-1.png"
                alt="Luxury Property"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
