"use client";

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

const EstateBrokerage = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16" id="about">
      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/hello.gif"
            alt="Estate Brokerage"
            width={550}
            height={350}
            className="rounded-lg w-full h-[350px] lg:h-[410px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Your Gateway to Premium Real Estate Solutions:{" "}
            <span className="text-primary">Samchukwu Properties</span>
          </h2>
          <p className="text-gray-600 leading-7">
            Whether you're buying, selling, renting, or leasing, we offer
            tailored services to meet your unique needs. With our deep market
            expertise and unwavering dedication, we make finding your dream home
            or ideal investment property simple and stress-free.
          </p>
          <p className="text-gray-600 leading-7">
            Let us help you explore a wide range of properties, from stunning
            apartments to expansive commercial spaces, all designed to suit your
            lifestyle and aspirations.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary">
                <CountUp start={0} end={100} duration={2.5} separator="," />+
              </p>
              <p className="text-gray-700 mt-2">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary">
                <CountUp start={0} end={50} duration={2.5} separator="," />+
              </p>
              <p className="text-gray-700 mt-2">Properties Sold</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary">
                <CountUp start={0} end={100} duration={2.5} separator="," />+
              </p>
              <p className="text-gray-700 mt-2">Properties Rented</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateBrokerage;
