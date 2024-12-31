// app/properties/[id]/page.tsx
import {
  PropertyImageCarousel,
  AgentContact,
} from "../../components/IndividualListing";
import { getPropertyBySlug } from "@/sanity/lib/query";
import ShareButtons from "@/app/components/ShareButtonBlog";
import { FiMapPin, FiHome } from "react-icons/fi";

import { Metadata } from "next";
export async function generateMetadata({ params }): Promise<Metadata> {
  const property = await getPropertyBySlug(params.slug);

  const absoluteImageUrls = property.images
    .map((image) => {
      // Access the url property of each image object
      const imageUrl = image.url;

      // Ensure imageUrl is a string before calling startsWith
      if (typeof imageUrl === "string") {
        return imageUrl.startsWith("http")
          ? imageUrl
          : `https://samchukwuproperties.com${imageUrl}`;
      } else {
        console.warn("Invalid image format:", image); // Log invalid formats
        return null; // Or handle it as needed
      }
    })
    .filter((url) => url !== null); // Remove null values

  const description = property.description
    .map((block: any) =>
      block.children.map((child: any) => child.text).join("")
    )
    .join(" ");

  return {
    title: property.title,
    description: description,
    openGraph: {
      type: "article",
      title: property.title,
      description: description,
      url: `https://samchukwuproperties.com/properties/${property.currentSlug}`,
      siteName: "Samchukwu Properties",
      images: absoluteImageUrls.map((url) => ({
        url,
        width: 1200,
        height: 630,
        alt: property.title,
      })),

      authors: ["Samchukwu Properties"],
    },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: { slug: string };
}) {
  const property = await getPropertyBySlug(params.slug);

  if (!property) {
    return <div className="text-center">Property not found</div>;
  }

  const postUrl = `https://samchukwuproperties.com/listings/${property.currentSlug}`; // URL of the blog post
  const postTitle = property.title;
  const postImage = property.image;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <main className="container mx-auto px-4 py-8">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            {property.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <span>{property.location.category}</span>
            <span className="flex gap-2 items-center">
              {" "}
              <FiHome className="text-gray-500" />
              <span> {property.location.city}</span>
            </span>
            <span className="flex gap-2 items-center">
              {" "}
              <FiMapPin className="text-gray-500" />
              <span> {property.location.address}</span>
            </span>

            <span>•</span>
            <span className="font-semibold text-primary">
              <p className="text-lg font-bold text-gray-800">
                {formatPrice(property.price)}
                <span className="text-sm text-gray-500 ml-1">
                  {property.priceUnit === "year"
                    ? "Per Year"
                    : property.priceUnit === "month"
                      ? "Per Month"
                      : property.priceUnit === "total"
                        ? "Total Price"
                        : ""}
                </span>
              </p>
            </span>

            <div
              className={`px-3 py-1 rounded-lg text-white text-sm ${
                property.status === "rent"
                  ? "bg-blue-500"
                  : property.status === "sale"
                    ? "bg-green-500"
                    : property.status === "lease"
                      ? "bg-yellow-500"
                      : "bg-yellow-500"
              }`}
            >
              {property.status === "sale"
                ? "For Sale"
                : property.status === "rent"
                  ? "For Rent"
                  : property.status === "lease"
                    ? "For Lease"
                    : ""}
            </div>
            {property.details?.furnished && (
              <div className="text-center">
                <p className="text-xl font-semibold">
                  {property.details.furnished ? "Fully Furnished" : ""}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Image Carousel */}
        <PropertyImageCarousel images={property.images} />

        {/* Property Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            {(property.details?.bedrooms ||
              property.details?.bathrooms ||
              property.details?.toilets ||
              property.details?.area) && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-lg shadow-md">
                {property.details?.bedrooms && (
                  <div className="text-center">
                    <p className="text-gray-600">Bedrooms</p>
                    <p className="text-xl font-semibold">
                      {property.details.bedrooms}
                    </p>
                  </div>
                )}

                {property.details?.bathrooms && (
                  <div className="text-center">
                    <p className="text-gray-600">Bathrooms</p>
                    <p className="text-xl font-semibold">
                      {property.details.bathrooms}
                    </p>
                  </div>
                )}

                {property.details?.toilets && (
                  <div className="text-center">
                    <p className="text-gray-600">Toilets</p>
                    <p className="text-xl font-semibold">
                      {property.details.toilets}
                    </p>
                  </div>
                )}

                {property.details?.area && (
                  <div className="text-center">
                    <p className="text-gray-600">Area</p>
                    <p className="text-xl font-semibold">
                      {property.details.area} Sqm
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Description */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description
                  .map((block: any) =>
                    block.children.map((child: any) => child.text).join("")
                  )
                  .join(" ")}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Property Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {property.features?.[0]
                  ?.split(",") // Split the first string in the array into an array of features
                  .map((feature: any, idx: any) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-600 bg-gray-50 p-4 rounded shadow-sm"
                    >
                      <span className="mr-2 text-blue-500">•</span>
                      {feature.trim()}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <AgentContact
                propertyTitle={property.title}
                propertyAddress={property.location.address}
              />
            </div>
          </div>
        </div>
      </main>
      {/* Social media sharing buttons */}
      <div className="px-4">
        <ShareButtons
          postUrl={postUrl}
          postTitle={postTitle}
          postImage={postImage}
        />
      </div>
    </div>
  );
}
