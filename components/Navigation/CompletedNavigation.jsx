import React, { useState } from "react";

import xw from "xwind";
import {
  IoChevronDownOutline,
  IoHelpOutline,
  IoSettingsOutline,
  IoApps,
  IoMenuOutline,
} from "react-icons/io5";

import NavigationMobile from "./NavigationMobile";
import NavigationMiddleLinks from "./NavigationMiddleLinks";

const CompletedNavigation = () => {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <React.Fragment>
      {/* Mobile Starts */}

      <NavigationMobile show={show} setShow={setShow} />

      {/* Mobile End */}

      {/* Button To Variable Scoop starts */}
      <nav
        css={xw`w-full mx-auto bg-gray-800 border-b border-gray-700 shadow relative z-20`}
      >
        <div
          css={xw`container px-6 h-16 flex items-center justify-between mx-auto`}
        >
          <div css={xw`flex items-center`}>
            <div css={xw`rounded-full relative flex justify-end text-gray-500`}>
              <a href="https://variablescoop.com/">
                <button
                  css={xw`focus:outline-none mr-3 bg-transparent transition duration-150 ease-in-out hover:bg-gray-700 rounded text-white px-5 py-2 text-sm border border-white`}
                >
                  To Variable Scoop
                </button>
              </a>
            </div>
          </div>
          {/* Button To Variable Scoop Ends */}
          {/* Middle Links Start */}

          <NavigationMiddleLinks />

          {/* Middle Links End */}
          <div
            aria-haspopup="true"
            css={xw`cursor-pointer h-full xl:flex items-center justify-end hidden relative`}
          >
            <div css={xw`rounded`} onClick={() => setProfile(!profile)}>
              <img
                css={xw`rounded h-10 w-10 object-cover`}
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                alt="logo"
              />
            </div>
            <div
              css={xw`text-gray-600 ml-2`}
              onClick={() => setProfile(!profile)}
            >
              <IoChevronDownOutline />
            </div>

            {/* Drop Down when you click the avi image */}
            {profile ? (
              <ul
                css={xw`p-2 w-64 border-r bg-white absolute top-0 -ml-2 rounded right-0 shadow mt-14  `}
              >
                <li
                  css={xw`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none`}
                >
                  <div css={xw`flex items-center`}>
                    <IoSettingsOutline />
                    <span css={xw`ml-2`}>Profile</span>
                  </div>
                </li>
                <li
                  css={xw`flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none`}
                >
                  <div css={xw`flex items-center`}>
                    <IoApps />
                    <span css={xw`ml-2`}>Dashboard</span>
                  </div>
                </li>
                <li
                  css={xw`flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center`}
                >
                  <IoHelpOutline />
                  <span css={xw`ml-2`}>Products</span>
                </li>
                <li
                  css={xw`flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none`}
                >
                  <IoSettingsOutline />
                  <span css={xw`ml-2`}>Performance</span>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
          <div onClick={() => setShow(!show)} css={xw`xl:hidden`}>
            <IoMenuOutline />
          </div>
        </div>
      </nav>
      {/* Navigation ends */}
    </React.Fragment>
  );
};

export default CompletedNavigation;
