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
      <div
        className="w-full h-72 bg-[#2e728f]  flex justify-center 
      items-center text-[#c08f52]"
      >
        <h1 className="text-5xl  font-org">Contact Us</h1>
      </div>
      <div
        className="w-full md:px-32 flex md:flex-row flex-col
       md:justify-between justify-center items-center md:gap-0 gap-6 py-20"
      >
        <div className="">
          <h1
            className="flex text-[#15303e]  items-center gap-2 
          font-extrabold   font-Numbers"
          >
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
            +971 50 559 0994
          </p>
        </div>
        <div>
          <h1 className="flex text-[#15303e]  items-center gap-2 font-extrabold   font-Numbers">
            <FaEnvelope />
            E-Mail
          </h1>
          <p className="pl-6 text-sm w-32  font-Numbers font-bold">
            dianatopaz.jewellery@gmail.com
          </p>
        </div>
        <div>
          <h1 className="flex text-[#15303e]  items-center gap-2 font-extrabold   font-Numbers">
            <MdLocationPin />
            Location
          </h1>
          <p className="pl-6 text-sm w-32  font-Numbers font-bold">
            Dubai
            <br /> UAE
          </p>
        </div>
      </div>
      <div
        className="flex md:flex-row flex-col py-5 px-5  w-full justify-between 
      items-center pb-20 md:px-32 gap-10 md:gap-0"
      >
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.073060979568!2d55.182655375379746!3d25.133220677752167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzU5LjYiTiA1NcKwMTEnMDYuOCJF!5e0!3m2!1sen!2sin!4v1718128809770!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          className=" md:w-[38rem]  md:h-[18rem] h-52 w-80 "
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3612.073060979568!2d55.182655375379746!3d25.133220677752167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA3JzU5LjYiTiA1NcKwMTEnMDYuOCJF!5e0!3m2!1sen!2sin!4v1718128809770!5m2!1sen!2sin"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.67912622277!2d77.62522299088258!3d12.910299474730188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1491bfdc6ecd%3A0xf232718439fbc879!2sHSR%20Layout%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716512206829!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className=" text-[#15303e]   ">
          <h1 className="text-3xl text-center font-Numbers capitalize underline">
            follow Us on
          </h1>
          <div className="flex  w-full justify-center py-20 md:gap-10 gap-5 ">
            <a href="https://www.instagram.com/dtopaz.ae/">
              <h1 className="text-4xl rounded-full border-2 p-2   border-[#15303e] cursor-pointer hover:scale-105 duration-700">
                <FaInstagram />
              </h1>
            </a>
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
