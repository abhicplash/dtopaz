import React from "react";
import Layout from "../Layout/Layout";
import {
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <Layout>
      {/* <div className="w-full h-72 bg-[#15303e] flex justify-center items-center text-[#e0d5af]"> */}
      <div className="w-full h-72 bg-[#2e728f]  flex justify-center items-center text-[#c08f52]">
        <h1 className="text-5xl font-bold font-mubu">Contact us</h1>
      </div>
      <div className="w-full px-32 flex justify-between py-20">
        <div>
          <h1 className="flex text-[#15303e]  items-center gap-2 font-extrabold   font-Numbers">
            <FaClock />
            Opening Hours
          </h1>
          <p className="pl-6 text-sm w-36  font-Numbers font-bold">
             24 hours - online
          </p>
        </div>
        <div>
        <h1 className="flex text-[#15303e]  items-center gap-2 font-extrabold   font-Numbers">
            <FaPhoneAlt />
            Phone Number
          </h1>
          <p className="pl-6 text-xs w-32  font-Numbers font-bold">
            +91-9562465095 +91-8547606322
          </p>
        </div>
        <div>
        <h1 className="flex text-[#15303e]  items-center gap-2 font-extrabold   font-Numbers">
            <FaEnvelope />
            E-Mail
          </h1>
          <p className="pl-6 text-sm w-32  font-Numbers font-bold">
            info@djmail.com
          </p>
        </div>
        <div>
        <h1 className="flex text-[#15303e]  items-center gap-2 font-extrabold   font-Numbers">
            <MdLocationPin />
            Location
          </h1>
          <p className="pl-6 text-sm w-32  font-Numbers font-bold">
            Yelehanka,Bangalore,<br /> Karnataka,India
          </p>
        </div>
      </div>
      <div className="flex w-full justify-between items-center pb-20 px-32">
        <iframe
          title="myFrame"
          className=" w-[38rem]  h-[18rem]   "
          src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9344122337816!2d77.56663177460582!3d13.103341511977225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19da06202f0f%3A0xf4ec8ed295f83a94!2sSuvilla%20residency!5e0!3m2!1sen!2sin!4v1708938681579!5m2!1sen!2sin"
        ></iframe>
        <div className=" text-[#15303e]   ">
          <h1 className="text-3xl text-center font-Numbers capitalize underline">
            follow Us on
          </h1>
          <div className="flex  w-full justify-center py-20 gap-10 ">
            <h1 className="text-4xl rounded-full border-2 p-2   border-[#15303e] cursor-pointer hover:scale-105 duration-700">
              <FaInstagram />
            </h1>
            <h1 className="text-4xl rounded-full border-2 p-2   border-[#15303e] cursor-pointer hover:scale-105 duration-700">
              <FaYoutube />
            </h1>
            <h1 className="text-4xl rounded-full border-2 p-2   border-[#15303e] cursor-pointer hover:scale-105 duration-700">
              <FaFacebookSquare />
            </h1>
            <h1 className="text-4xl rounded-full border-2 p-2   border-[#15303e] cursor-pointer hover:scale-105 duration-700">
              <FaXTwitter />
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
