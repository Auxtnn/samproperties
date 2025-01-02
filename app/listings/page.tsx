"use client";

import React, { useState, useEffect } from "react";
import { getProperties } from "@/sanity/lib/query";
import Alllistings from "../components/AllListings";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [lastPropertyId, setLastPropertyId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMoreProperties, setHasMoreProperties] = useState(true);

  const loadInitialProperties = async () => {
    setLoading(true);
    try {
      const initialProperties = await getProperties(null, 9); // Fetch first 10 properties
      if (initialProperties.length > 0) {
        setProperties(initialProperties);
        setLastPropertyId(initialProperties[initialProperties.length - 1]._id);
        setHasMoreProperties(initialProperties.length >= 9); // Set to true if initial properties are equal or more than the limit
      } else {
        setHasMoreProperties(false);
      }
    } catch (error) {
      console.error("Error loading initial properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialProperties();
  }, []);

  const loadMoreProperties = async () => {
    setLoading(true);
    try {
      const newProperties = await getProperties(lastPropertyId, 9);
      if (newProperties.length > 0) {
        setProperties((prevProperties) => [
          ...prevProperties,
          ...newProperties,
        ]);
        setLastPropertyId(newProperties[newProperties.length - 1]._id);
        setHasMoreProperties(newProperties.length >= 9); // Set to true if new properties are equal or more than the limit
      } else {
        setHasMoreProperties(false);
      }
    } catch (error) {
      console.error("Error loading more properties:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="md:pt-20 pt-10">
        <Alllistings
          properties={properties}
          loadMoreProperties={loadMoreProperties}
          loading={loading}
          hasMoreProperties={hasMoreProperties}
        />
      </div>
    </main>
  );
};

export default Properties;
