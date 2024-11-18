import React, { useEffect, useState } from "react";
import SideBar from "../Layout/SideBar";

const ProvideInformation = () => {
  const [addressData, setAddressData] = useState({
    building_no: "",
    apartment: "",
    block: "",
    street: "",
    area: "",
    zip_code: "",
    country: "",
    country_code: "",
    phone: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  // Fetch address data on component mount
  useEffect(() => {
    const fetchAddress = async () => {
      const savedToken = sessionStorage.getItem("authToken");
      if (!savedToken) {
        setError("Authorization token is missing.");
        return;
      }
      try {
        setLoading(true);
        const response = await fetch("https://api.dtopaz.com/api/customer/address", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${savedToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch address data. Please try again.");
        }

        const result = await response.json();
        setAddressData(result.data || {});
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({ ...prev, [name]: value }));
  };

  // Save updated address data
  const saveData = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const savedToken = sessionStorage.getItem("authToken");
    if (!savedToken) {
      setError("Authorization token is missing.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://api.dtopaz.com/api/customer/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${savedToken}`,
        },
        body: JSON.stringify(addressData),
      });

      if (!response.ok) {
        throw new Error("Failed to save address data. Please try again.");
      }

      setSuccess("Address updated successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <SideBar />
      <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
        Update Address Information
      </h2>

      {/* Loading state */}
      {loading && (
        <div className="text-center text-gray-600 py-4">
          <p>Loading...</p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-500 py-2">
          <p>{error}</p>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="text-center text-green-500 py-2">
          <p>{success}</p>
        </div>
      )}

      {/* Address Form */}
      <form onSubmit={saveData} className="space-y-5">
        {[
          "building_no",
          "apartment",
          "block",
          "street",
          "area",
          "zip_code",
          "country",
          "country_code",
          "phone",
          "city",
        ].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-sm font-medium text-gray-700 capitalize"
            >
              {field.replace("_", " ")}
            </label>
            <input
              id={field}
              type="text"
              name={field}
              value={addressData[field]}
              onChange={handleChange}
              placeholder={`Enter ${field.replace("_", " ")}`}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default ProvideInformation;
