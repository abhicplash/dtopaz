import React from "react";
import Layout from "../Layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="md:px-36 py-16 font-Head">
        <div className="text-[17px] text-justify">
          <h1 className="text-[22px]  font-bold uppercase text-center md:text-justify">
            Privacy Policy
          </h1>
          <p className="my-10 text-[17px] md:text-justify text-center px-3">
            Thank you for visiting Diana Topaz Jewellery Design. We value your
            privacy and are committed to protecting your personal information.
            This Privacy Policy explains the types of personal information we
            collect, how we use it, and the measures we take to safeguard it.
          </p>
          <div>
            <div>
              <p className="font-bold my-5 md:text-justify text-center">
                Information We Collect:
              </p>
              <ul className="px-5 md:pl-10 flex flex-col gap-5 md:text-justify ">
                <li className="list-disc text-sm md:text-[16px]">
                  <span className="font-bold">Personal Information:</span> When
                  you visit our website or make a purchase, we may collect
                  personal information such as your name, email address,
                  shipping address, and phone number. This information is
                  essential for processing your orders and providing customer
                  support.
                </li>
                <li className="list-disc text-sm md:text-[16px]">
                  <span className="font-bold"> Payment Information: </span>We
                  may collect payment information, including credit card details
                  or other financial data, to facilitate transactions on our
                  website. This information is securely processed through our
                  payment gateway partners.
                </li>
                <li className="list-disc text-sm md:text-[16px]">
                  <span className="font-bold"> Browsing Information:</span> We
                  may collect non-personal information such as your IP address,
                  browser type, and device information to enhance our website's
                  functionality and user experience.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold my-5 md:text-justify text-center">
                How We Use Your Information:
              </p>
              <ul className="px-5 md:pl-10 flex flex-col gap-5 md:text-justify ">
                <li className="list-disc text-sm md:text-[16px]">
                  <span className="font-bold">Order Fulfillment:</span> We use
                  your personal information to process orders, arrange for
                  shipping, and provide customer support.
                </li>
                <li className="list-disc text-sm md:text-[16px]">
                  <span className="font-bold"> Communication:</span>We may use
                  your contact information to communicate about your orders,
                  respond to inquiries, and send promotional offers or
                  newsletters if you have opted to receive them. gateway
                  partners.
                </li>
                <li className="list-disc text-sm md:text-[16px]">
                  <span className="font-bold"> Improvement of Services:</span>We
                  analyze browsing and purchase patterns to improve our
                  products, services, and website functionality.
                </li>
                <li className="list-disc text-sm md:text-[16px]">
                  <span className="font-bold"> Legal Compliance:</span>We may
                  use your information to comply with applicable laws,
                  regulations, or legal processes.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold my-5 md:text-justify text-center">
                Advertising Partners Privacy Policies:
              </p>
              <p className="text-justify px-3 text-sm md:text-[16px]">
                We may work with third-party advertising partners to display ads
                on our website. These partners may use cookies and similar
                tracking technologies to collect information about your browsing
                behavior on our site and other sites. Please review the privacy
                policies of our advertising partners to understand their data
                collection and usage practices.
              </p>
            </div>
            <div>
              <p className="font-bold my-5 md:text-justify text-center">
                Security Measures:
              </p>
              <p className="text-justify px-3 text-sm md:text-[16px]">
                We take reasonable measures to protect your personal information
                from unauthorized access, misuse, or disclosure. We use
                industry-standard encryption technologies and secure socket
                layer (SSL) protocols to safeguard sensitive information
                transmitted online.
              </p>
            </div>
            <div>
              <p className="font-bold my-5 md:text-justify text-center">
                Your Rights:
              </p>
              <p className="text-justify px-3 text-sm md:text-[16px]">
                You have the right to access, correct, or delete your personal
                information. If you wish to exercise these rights or have any
                concerns about your privacy, please contact us at +971 55 872
                2226 or email at dianatopazjewellerydesign@gmail.com
              </p>
            </div>
            <div>
              <p className="font-bold my-5 md:text-justify text-center">
                {" "}
                Updates to Privacy Policy:
              </p>
              <p className="text-justify px-3 text-sm md:text-[16px]">
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. We encourage you
                to review this Privacy Policy regularly for any updates. <br />
                <br /> By using our website, you consent to the collection and
                use of your information as described in this Privacy Policy.{" "}
                <br />
                <br /> Last Updated: 29-Aug-2024 <br /> <br /> If you have any
                questions or concerns about this Privacy Policy, please contact
                us at <span className="font-semibold"> +971558722226</span>{" "}
                <br className="hidden md:flex" /> or via email at
                <span className="font-semibold">
                  {" "}
                  dianatopazjewellerydesign@gmail.com.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
