import React from "react";
import { FiClock, FiInbox, FiMapPin, FiHome } from "react-icons/fi";
import Link from "next/link";
import { propertiesType } from "../types";
import Image from "next/image";

interface PropertyPageProps {
  properties: propertiesType[];
}

const Alllistings: React.FC<PropertyPageProps> = ({ properties }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section
      className={`max-w-screen-xl px-4 bg-white ${properties.length > 0 ? "md:py-20 py-20 mt-10" : "flex items-center justify-center min-h-96"}`}
    >
      {properties.length > 0 ? (
        <div className="container mx-auto lg:w-11/12">
          {/* Title Caption */}
          <h2 className="text-2xl md:text-4xl md:text-center font-bold text-gray-900 mb-8">
            Our Available Properties
          </h2>

          {/* Property Listings */}
          <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {properties.map((post: any) => (
              <div
                key={post._id}
                className="w-full md:max-w-sm mx-auto rounded-lg shadow-md hover:scale-95 transition-transform duration-300 ease-in-out border"
              >
                {/* Property Image */}
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={post.image}
                    alt="property-image"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  {/* Category Badge */}
                  <div className="flex justify-between self-center">
                    <div className="flex items-center gap-2 mb-2">
                      <FiHome className="text-gray-500" />
                      <span className="text-sm text-gray-500 capitalize">
                        {post.category}
                      </span>
                    </div>

                    <div
                      className={`px-3 py-1 rounded-lg text-white text-sm ${
                        post.status === "rent"
                          ? "bg-blue-500"
                          : post.status === "sale"
                            ? "bg-green-500"
                            : post.status === "lease"
                              ? "bg-yellow-500"
                              : "bg-yellow-500"
                      }`}
                    >
                      {post.status === "sale"
                        ? "For Sale"
                        : post.status === "rent"
                          ? "For Rent"
                          : post.status === "lease"
                            ? "For Lease"
                            : ""}
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-700 line-clamp-1">
                    {post.title}
                  </h2>

                  {/* Description */}

                  <p className="text-sm text-gray-500 my-3 line-clamp-2">
                    {post.description
                      .map((block: any) =>
                        block.children.map((child: any) => child.text).join("")
                      )
                      .join(" ")}
                  </p>

                  {/* Location */}
                  <div className="flex items-start gap-2 mt-2">
                    <FiMapPin className="text-gray-500 mt-1" />
                    <div>
                      <p className="text-sm font-medium">
                        {post.location?.city}
                      </p>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {post.location?.address}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex justify-between items-center my-4">
                    <div>
                      <p className="text-lg font-bold text-gray-800">
                        {formatPrice(post.price)}
                        <span className="text-sm text-gray-500 ml-1">
                          {post.priceUnit === "year"
                            ? "Per Year"
                            : post.priceUnit === "month"
                              ? "Per Month"
                              : post.priceUnit === "total"
                                ? "Total Price"
                                : ""}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* View Property Button */}
                  <Link href={`/listings/${post.currentSlug}`}>
                    <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700">
                      View Property
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-800 text-center space-y-4">
          <FiInbox className="text-6xl text-gray-500" />
          <p className="text-lg font-medium">No available property yet</p>
        </div>
      )}
    </section>
  );
};

export default Alllistings;
