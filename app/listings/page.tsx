import React from "react";
import { getProperties } from "@/sanity/lib/query";
import Alllistings from "../components/AllListings";

export default async function Listing() {
  const properties = (await getProperties("property")) || [];
  return (
    <main>
      <div className="md:pt-20 pt-10">
        <Alllistings properties={properties} />
      </div>
    </main>
  );
}
