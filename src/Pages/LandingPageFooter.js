import React from 'react'
import { useEffect } from "react";
import LogoCAN from '../Photos/LogoCAn.png'
import { useLocation } from "react-router-dom";
import Logo from '../Photos/CANPink.png'
import Cookies from "js-cookie";

const LandingPageFooter = () => {

  useEffect(() => {
    const scrollToSection = () => {
      if (window.location.hash && window.location.hash === "#aboutus") {
        const aboutUsSection = document.getElementById("aboutus"); // Replace 'aboutus' with the actual ID of your section
        if (aboutUsSection) {
          aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToSection(); // Check for hash and scroll on component mount
  }, []);
  const location = useLocation();
    return (
      <>
        {/* footer */}

        <footer className=" text-white py-8 px-4">
          <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="flex flex-wrap md:flex-row w-full md:w-auto md:flex-grow  justify-between sm:justify-around container">
              <div className="mb-4 md:mb-0 w-full md:w-auto text-center">
                <a href="/" className="flex flex-col  lg:items-center">
                  <img
                    className="w-[40%] lg:w-[100%] h-auto "
                    src={LogoCAN}
                    alt="Logo"
                  />
                  <img className="w-20" src={Logo} alt="CAN" />
                </a>
              </div>

              <div className="mb-4 md:mb-0 md:mr-8 ">
                <h4 className="text-[#EB8299] font-semibold text-[22px] lg:text-[1.2vw]  font-roboto mb-4">
                  Navigation
                </h4>
                <ul>
                  <li className="mb-2">
                    <a
                      href="/KnowMore"
                      className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                    >
                      Know About Cancer
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/whycan"
                      className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                    >
                      Why CAN
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/whycan#aboutus"
                      className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                    >
                      About us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="/ContactUs"
                      className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                    >
                      Contact us/Help&Support
                    </a>
                  </li>
                </ul>
              </div>

              {Cookies.get("token") ? (
                <div className="mb-4 md:mb-0 md:mr-8 ">
                  <h4 className="text-[#EB8299] font-semibold text-[22px] lg:text-[1vw]  font-roboto mb-4">
                    My Space
                  </h4>
                  <ul>
                    <li className="mb-2">
                      <a
                        href="/home"
                        className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                      >
                        My Feed{" "}
                        <span className="bg-[#0067dd] mr-2 text-[12px] lg:text-[0.9vw] rounded text-[#FFF] p-1 ">
                          {" "}
                          beta
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/appointment"
                        className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                      >
                        Appointments{" "}
                        <span className="bg-[#0067dd] mr-2 text-[12px] lg:text-[0.9vw] rounded text-[#FFF] p-1 ">
                          {" "}
                          beta
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/HealthRecord1"
                        className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                      >
                        Health Records{" "}
                        <span className="bg-[#0067dd] mr-2 text-[12px] lg:text-[0.9vw] rounded text-[#FFF] p-1 ">
                          {" "}
                          beta
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="mb-4 md:mb-0 md:mr-8 ">
                  <h4 className="text-[#EB8299] font-semibold text-[22px] lg:text-[1vw]  font-roboto mb-4">
                    My Space
                  </h4>
                  <ul>
                    <li className="mb-2">
                      <a
                        href="/LoginForm"
                        className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                      >
                        My Feed{" "}
                        <span className="bg-[#0067dd] mr-2 text-[12px] lg:text-[0.9vw] rounded text-[#FFF] p-1 ">
                          {" "}
                          beta
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/LoginForm"
                        className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                      >
                        Appointments{" "}
                        <span className="bg-[#0067dd] mr-2 text-[12px] lg:text-[0.9vw] rounded text-[#FFF] p-1 ">
                          {" "}
                          beta
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/LoginForm"
                        className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                      >
                        Health Records{" "}
                        <span className="bg-[#0067dd] mr-2 text-[12px] lg:text-[0.9vw] rounded text-[#FFF] p-1 ">
                          {" "}
                          beta
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}

              <div className="">
                <h4 className="text-[#EB8299] font-semibold text-[22px] lg:text-[1vw]  font-roboto mb-4">
                  Resources
                </h4>
                <ul>
                  {Cookies.get("token") ? (
                    <div>
                      <li className="mb-2">
                        <a
                          href="/HelpAFriend"
                          className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                        >
                          Help a Friend
                        </a>
                      </li>
                      <li className="mb-2">
                        <a className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]">
                          Career
                        </a>
                      </li>
                    </div>
                  ) : (
                    <div>
                      {/* <li className="mb-2">
                        <a href="/LoginForm"
                          className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                        >
                          Help & Support
                        </a>
                      </li> */}
                      <li className="mb-2">
                        <a
                          href="/LoginForm"
                          className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                        >
                          Help a Friend
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          href="#"
                          className="hover:underline text-[16px] lg:text-[1vw] cursor-pointer text-[#5E5E5E]"
                        >
                          Career
                        </a>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-around container mx-auto ">
            {/* <div className="h-14  px-4 border border-[#ED839A]  rounded-xl flex flex-row items-center gap-1 justify-center ">
              <img className="w-5" src={india} alt="US" />
              <p className="text-[18px] lg:text-[1vw] text-center text-[#5E5E5E]">
                India | English
              </p>
            </div> */}
            <span className="text-sm lg:text-[1vw] text-gray-500 text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                CAN
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="/" className="text-gray-500 ">
                <svg
                  className="w-4 lg:w-10 h-4 lg:h-10"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="/" className="text-gray-500 ">
                <svg
                  className="w-4 lg:w-10 h-4 lg:h-10"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="/" className="text-gray-500 ">
                <svg
                  className="w-4 lg:w-10 h-4 lg:h-10"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </footer>
      </>
    );
}

export default LandingPageFooter