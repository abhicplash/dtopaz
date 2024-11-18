import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
// import Header from "../Layout/Header";
// import ShopLayout from "../Layout/ShopLayout";
import SideBar from "../Layout/SideBar";
import AddressManager from "../Layout/AddressManager ";

const PersonalInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const savedToken = sessionStorage.getItem("authToken");
      try {
        const response = await fetch(
          "https://api.dtopaz.com/api/user-profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${savedToken}`
            }
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
        console.log(result.data.item);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Layout>
      <div
        className="w-full h-72 bg-shop bg-center bg-cover  flex justify-center 
      items-center"
      >
        <h1
          className="text-5xl font-org w-full text-center h-full flex items-center justify-center
          text-[#f3f3f3]  bg-[#00000088] "
        >
          My Account
        </h1>
      </div>
      <div className="font-org flex md:flex-row flex-col md:w-full py-5 md:px-16 gap-5">
        <SideBar />
        <div className="flex flex-col w-full gap-5">
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col w-[96%]  border border-[#42738f]">
              <h1 className="w-full h-14 bg-[#42738f] text-white text-xl flex items-center justify-center">
                Personal Information
              </h1>
              <div className="flex flex-col py-5 gap-3 font-org text-[#42738f] text-lg">
                <div className="flex px-2 gap-2">
                  <h1>Name:</h1>
                  <h1>{data.item.first_name + data.item.last_name}</h1>
                </div>
                <div className="flex px-2 gap-2">
                  <h1>Date Of Birth :</h1>
                  <h1>08/08/1993</h1>
                </div>
                <div className="flex px-2 gap-2">
                  <h1>Number:</h1>
                  <h1>+919562465095</h1>
                </div>
                <div className="flex px-2 gap-2">
                  <h1>Email:</h1>
                  <h1>{data.item.email}</h1>
                </div>
                <div className="flex px-2 gap-2">
                  <h1>Address:</h1>
                  <h1>Kozhikode,Kerala ,india ,673522</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <AddressManager />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalInfo;
