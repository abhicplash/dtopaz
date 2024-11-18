import React, { useEffect, useState } from "react";

const PaymentMethods = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.dtopaz.com/api/paymentmethods",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }
  return (
    <div className="flex flex-col md:flex-row justify-center w-full h-[100vh] items-center">
      <div className="md:w-4/6 w-full bg-shop h-[30vh] md:h-[100vh] bg-cover bg-center"></div>

      <div
        className="md:w-2/6 h-full   font-org flex flex-col 
       bg-gradient-to-b from-[#1e4f64] to-[#3a89e3] 
       gap-6
         text-white   justify-center items-center"
      >
        <h1 className="text-center capitalize text-xl">
        Pick Your Payment <br /> Option to Continue
          </h1>
        <div
          className="flex flex-wrap justify-center  items-center gap-2 
        "
        >
          {data.map((paymentmethods) => (
            <div
              key={paymentmethods.id}
              className=" md:w-32 w-16 border border-[#3a89e3]
              bg-gradient-to-b from-[#1e4f64]/80 to-[#3a89e3]/80 
               h-16 md:h-20 flex justify-center items-center flex-col ">
              <div className=" rounded-full flex justify-center items-center
                w-16 h-12 ">
                <img
                  src={paymentmethods.image_url}
                  alt="paymentmethods"
                  className="w-12 h-7   "
                />
              </div>
              <h1 className="md:text-xs w-16 md:w-[90%] 
               h-10 flex items-center justify-center
               text-center text-[8px]">
                {paymentmethods.method_name_en}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
