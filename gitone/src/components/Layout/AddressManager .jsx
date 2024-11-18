import React, { useState, useEffect } from "react";

const AddressManager = () => {
  const [formData, setFormData] = useState({
    building_no: "",
    appartment: "",
    block: "",
    street: "",
    area: "",
    city: "",
    country: "",
    zip_code: "",
    country_code: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const authToken = sessionStorage.getItem("authToken");

  // Fetch data from the API (GET method)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://api.dtopaz.com/api/customer/address",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`
            }
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const result = await response.json();

        // Remove unwanted fields
        if (result?.data?.item) {
          const { users_id, created_at, updated_at, ...filteredData } =
            result.data.item;
          setFormData(filteredData); // Set only the required fields
        } else {
          setError("No data found.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [authToken]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (POST method)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const response = await fetch(
        "https://api.dtopaz.com/api/customer/address",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit data.");
      }

      const result = await response.json();
      setSuccessMessage("Data saved successfully!");
      console.log("Saved data:", result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-[96%] border border-[#42738f]">
      <h1 className="w-full h-14 bg-[#42738f] text-white text-xl flex items-center justify-center">
        Additional Information
      </h1>

      {successMessage && (
        <p className="text-green-600 text-center mt-2">{successMessage}</p>
      )}
      {error && <p className="text-red-600 text-center mt-2">{error}</p>}
      {loading && (
        <p className="text-gray-600 text-center mt-2">Processing...</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-5 gap-3 font-org text-[#42738f] text-lg"
      >
        {Object.keys(formData).map((field) => (
          <div
            key={field}
            className="flex px-2 justify-center md:flex-row flex-col gap-2"
          >
            <label htmlFor={field} className="md:w-1/5 w-full capitalize">
              {field.replace(/_/g, " ")}
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="md:w-3/6 w-full border border-[#42738f] px-2 py-1"
            />
          </div>
        ))}
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="w-52 px-4 py-2 text-white bg-[#42738f] rounded-md hover:bg-[#305266]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressManager;
