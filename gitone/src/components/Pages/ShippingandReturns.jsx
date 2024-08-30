import React from "react";
import Layout from "../Layout/Layout";

const ShippingandReturns = () => {
  return (
    <Layout>
      <div className="md:px-36 py-16 font-Head">
        <div className="text-[17px] text-justify">
          <h1 className="text-[22px]  font-bold uppercase text-center md:text-justify ">
            Shipping and Returns
          </h1>
          <ul className="my-10 px-3 pl-10 flex flex-col gap-4   text-sm md:text-[16px] ">
            <li className="list-disc ">
              For any complaint or request for exchange, please contact us to
              dianatopazjewellerydesign@gmail.com or Call us on +971 55 872 2226
            </li>
            <li className="list-disc ">
              You may request to exchange a product for another one of equal or
              higher value, within 10 business days of receipt.
            </li>
            <li className="list-disc ">
              {" "}
              Personalized items are not exchangeable.
            </li>
            <li className="list-disc ">
              Diana Topaz is not responsible for any shipping charges, taxes or
              any other fees on returned items and new handlings.
            </li>
            <li className="list-disc ">
              Returns will only be accepted for exchange, if the pieces are
              still intact and with their original packaging.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingandReturns;
