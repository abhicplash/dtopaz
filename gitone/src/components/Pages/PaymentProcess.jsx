import React, { useEffect, useState } from "react";

const PaymentProcess = () => {
  const [data, setData] = useState(null); // Store API response
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      const savedToken = sessionStorage.getItem("authToken"); // Get token from session storage

      if (!savedToken) {
        setError("Authorization token is missing. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const requestBody = {
          invoice_items: [
            {
              name: "Sample Item", // Replace with actual item details
              quantity: 1,
              unit_price: 100, // Replace with actual price
            },
          ],
          payment_method_id: 1, // Replace with a valid payment method ID
        };

        const response = await fetch("https://api.dtopaz.com/api/payment/link", {
          method: "POST", // Change to POST as per your API
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${savedToken}`,
          },
          body: JSON.stringify(requestBody), // Include request body
        });

        if (!response.ok) {
          const errorDetails = await response.json();
          console.error("Server Error Details:", errorDetails);
          throw new Error(errorDetails.message || "Request failed.");
        }

        const result = await response.json();
        setData(result?.data || {}); // Update state with API data
        console.log("API Response:", result);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

//   if (loading) {
//     return <div>Loading payment methods...</div>;
//   }

//   if (error) {
//     return (
//       <div>
//         <h1>Choose a Payment Method</h1>
//         <p style={{ color: "red" }}>{error}</p>
//       </div>
//     );
//   }

  return (
    <div>
      <h1>Choose a Payment Method</h1>
      {data?.invoice_url ? (
        <a href={data.invoice_url} target="_blank" rel="noopener noreferrer">
          Proceed to Payment
        </a>
      ) : (
        <p>No payment URL available. Please try again.</p>
      )}
    </div>
  );
};

export default PaymentProcess;
