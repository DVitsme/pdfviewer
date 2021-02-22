import React, { useState } from "react";
import xw from "xwind";
import {
  IoAppsOutline,
  IoChevronDown,
  IoMenuSharp,
  IoCloseSharp,
} from "react-icons/io5";

export default function Navigation() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  return (
    <React.Fragment>
      <div css={xw`bg-gray-200 h-full w-full`}>
        {/* Code block starts */}
        <nav css={xw`bg-white shadow xl:block hidden`}>
          <div css={xw`mx-auto container px-6 py-2 xl:py-0`}>
            <div css={xw`flex items-center justify-between`}>
              <div css={xw`inset-y-0 left-0 flex items-center xl:hidden`}>
                <div
                  css={xw`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out`}
                >
                  <div css={xw`visible xl:hidden`}>
                    <ul
                      css={xw`p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden`}
                    >
                      <li
                        css={xw`flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none`}
                      >
                        <div css={xw`flex items-center`}>
                          <IoAppsOutline />
                          <span css={xw`ml-2 font-bold`}>Dashboard</span>
                        </div>
                      </li>
                      <li
                        css={xw`flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center`}
                      >
                        <div css={xw`flex items-center`}>
                          <IoAppsOutline />
                          <span css={xw`ml-2 font-bold`}>Products</span>
                        </div>
                      </li>
                      <li
                        css={xw`flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none`}
                      >
                        <IoAppsOutline />
                        <span css={xw`ml-2 font-bold`}>Performance</span>
                      </li>
                      <li
                        css={xw`border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none`}
                      >
                        <IoAppsOutline />
                        <span css={xw`ml-2 font-bold`}>Deliverables</span>
                      </li>
                      <li
                        css={xw`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none`}
                      >
                        <div css={xw`flex items-center`}>
                          <div
                            css={xw`w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out`}
                          >
                            <img
                              css={xw`rounded h-10 w-10 object-cover`}
                              src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                              alt="logo"
                            />
                          </div>
                          <p css={xw`text-sm ml-2 cursor-pointer`}>Jane Doe</p>
                          <div css={xw`sm:ml-2 text-white relative`}>
                            <IoChevronDown />
                          </div>
                        </div>
                      </li>
                      <li
                        css={xw`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none`}
                      >
                        <div css={xw`flex items-center`}>
                          <IoAppsOutline />
                          <IoMenuSharp />
                          <span css={xw`ml-2`}>Profile</span>
                        </div>
                      </li>
                    </ul>
                    <IoMenuSharp />
                  </div>
                  <div
                    css={xw`hidden text-gray-700`}
                    onclick="MenuHandler(this,false)"
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                css={xw`flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start`}
              >
                <div css={xw`flex items-center`}>
                  <svg
                    aria-label="Home"
                    id="logo"
                    enableBackground="new 0 0 300 300"
                    height={44}
                    viewBox="0 0 300 300"
                    width={43}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        fill="#4c51bf"
                        d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                      />
                    </g>
                  </svg>
                  <h2
                    css={xw`hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3`}
                  >
                    The North
                  </h2>
                </div>
              </div>
              <div css={xw`flex`}>
                <div css={xw`hidden xl:flex md:mr-6 xl:mr-16`}>
                  <a
                    href="javascript: void(0)"
                    css={xw`flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out`}
                  >
                    <span css={xw`mr-2`}>
                      <IoAppsOutline />
                    </span>
                    Dashboard
                  </a>
                  <a
                    href="javascript: void(0)"
                    css={xw`flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out`}
                  >
                    <span css={xw`mr-2`}>
                      <IoAppsOutline />
                    </span>
                    Products
                  </a>
                  <a
                    href="javascript: void(0)"
                    css={xw`flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out`}
                  >
                    <span css={xw`mr-2`}>
                      <IoAppsOutline />
                    </span>
                    Performance
                  </a>
                  <a
                    href="javascript: void(0)"
                    css={xw`flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out`}
                  >
                    <span css={xw`mr-2`}>
                      <IoAppsOutline />
                    </span>
                    Deliverables
                  </a>
                </div>
                <div css={xw`hidden xl:flex items-center`}>
                  <div css={xw`relative md:mr-6 my-2`}>
                    <button
                      css={xw`focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs`}
                    >
                      Manage
                    </button>
                  </div>
                  <div css={xw`ml-6 relative`}>
                    <div
                      css={xw`flex items-center relative`}
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul
                          css={xw`p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 `}
                        >
                          <li
                            css={xw`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none`}
                          >
                            <div css={xw`flex items-center`}>
                              <IoAppsOutline />
                              <span css={xw`ml-2`}>My Profile</span>
                            </div>
                          </li>
                          <li
                            css={xw`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center`}
                          >
                            <IoAppsOutline />
                            <span css={xw`ml-2`}>Help Center</span>
                          </li>
                          <li
                            css={xw`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none`}
                          >
                            <IoAppsOutline />
                            <span css={xw`ml-2`}>Account Settings</span>
                          </li>
                        </ul>
                      )}
                      <div
                        css={xw`cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out`}
                      >
                        <img
                          css={xw`rounded-full h-10 w-10 object-cover`}
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                          alt="logo"
                        />
                      </div>
                      <div css={xw`ml-2 text-gray-600`}>
                        <IoChevronDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div
            css={xw`py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40`}
          >
            <div css={xw`w-24`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={43}
                height={44}
                viewBox="0 0 43 44"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                  fill="#667EEA"
                />
              </svg>
            </div>
            <div css={xw`flex items-center`}>
              <div css={xw`relative mr-6 `}>
                <button
                  css={xw`focus:outline-none bg-gray-100 border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-300 rounded text-gray-600 px-5 py-2 text-xs`}
                >
                  Manage
                </button>
              </div>
              <div
                id="menu"
                css={xw`text-gray-800`}
                onClick={() => setShow(!show)}
              >
                {show ? "" : <IoAppsOutline />}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            css={
              show
                ? xw`w-full xl:hidden h-full absolute z-40  transform  translate-x-0`
                : xw`w-full xl:hidden h-full absolute z-40  transform -translate-x-full`
            }
          >
            <div
              css={xw`bg-gray-800 opacity-50 w-full h-full`}
              onClick={() => setShow(!show)}
            />
            <div
              css={xw`md:w-96 w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out`}
            >
              <div css={xw`px-6 h-full`}>
                <div css={xw`flex flex-col justify-between h-full w-full`}>
                  <div>
                    <div
                      css={xw`mt-6 flex w-full items-center justify-between`}
                    >
                      <div css={xw`flex items-center justify-between w-full`}>
                        <div css={xw`flex items-center`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={43}
                            height={44}
                            viewBox="0 0 43 44"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                              fill="#667EEA"
                            />
                          </svg>
                          <p css={xw`text-base md:text-2xl text-gray-800 ml-3`}>
                            The North
                          </p>
                        </div>
                        <div
                          id="cross"
                          css={xw`text-gray-800`}
                          onClick={() => setShow(!show)}
                        >
                          <IoCloseSharp />
                        </div>
                      </div>
                    </div>
                    <ul>
                      <a css={xw`cursor-pointer`}>
                        <li css={xw`text-gray-800 pt-10`}>
                          <div css={xw`flex items-center`}>
                            <div
                              css={xw`w-6 h-6 md:w-8 md:h-8 text-indigo-700`}
                            >
                              <IoAppsOutline />
                            </div>
                            <p
                              css={xw`text-indigo-700 xl:text-base md:text-2xl text-base ml-3`}
                            >
                              Dashboard
                            </p>
                          </div>
                        </li>
                      </a>
                      <a css={xw`cursor-pointer`}>
                        <li css={xw`text-gray-800 pt-8`}>
                          <div css={xw`flex items-center justify-between`}>
                            <div css={xw`flex items-center`}>
                              <div
                                css={xw`w-6 h-6 md:w-8 md:h-8 text-gray-800`}
                              >
                                <IoAppsOutline />
                              </div>
                              <p
                                css={xw`text-gray-800 xl:text-base md:text-2xl text-base ml-3`}
                              >
                                Products
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                      <a css={xw`cursor-pointer`}>
                        <li css={xw`text-gray-800 pt-8`}>
                          <div css={xw`flex items-center`}>
                            <div css={xw`w-6 h-6 md:w-8 md:h-8 text-gray-800`}>
                              <IoAppsOutline />
                            </div>
                            <p
                              css={xw`text-gray-800 xl:text-base md:text-2xl text-base ml-3`}
                            >
                              Performance
                            </p>
                          </div>
                        </li>
                      </a>
                      <li css={xw`text-gray-800 pt-8 cursor-pointer`}>
                        <div css={xw`flex items-center justify-between`}>
                          <div css={xw`flex items-center`}>
                            <div css={xw`w-6 h-6 md:w-8 md:h-8 text-gray-800`}>
                              <IoAppsOutline />
                            </div>
                            <p
                              css={xw`text-gray-800 xl:text-base md:text-2xl text-base ml-3`}
                            >
                              Deliverables
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div css={xw`w-full pt-4`}>
                    <div css={xw`flex justify-center mb-4 w-full`}>
                      <div css={xw`relative w-full`}>
                        <div
                          css={xw`text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4`}
                        >
                          <IoAppsOutline />
                        </div>
                        <input
                          css={xw`bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2`}
                          type="text"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <div css={xw`border-t border-gray-300`}>
                      <div
                        css={xw`w-full flex items-center justify-between pt-1`}
                      >
                        <div css={xw`flex items-center`}>
                          <img
                            alt="profile-pic"
                            src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                            css={xw`w-8 h-8 rounded-md`}
                          />
                          <p
                            css={xw`md:text-xl text-gray-800 text-base leading-4 ml-2`}
                          >
                            Jane Doe
                          </p>
                        </div>
                        <ul css={xw`flex`}>
                          <li css={xw`cursor-pointer text-gray-800 pt-5 pb-3`}>
                            <div css={xw`w-6 h-6 md:w-8 md:h-8`}>
                              <IoAppsOutline />
                            </div>
                          </li>
                          <li
                            css={xw`cursor-pointer text-gray-800 pt-5 pb-3 pl-3`}
                          >
                            <div css={xw`w-6 h-6 md:w-8 md:h-8`}>
                              <IoAppsOutline />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </React.Fragment>
  );
}
