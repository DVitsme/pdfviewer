import React, { useState } from "react";
import xw from "xwind";
import Link from "next/link";
import {
  IoCloseOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoSearchOutline,
  IoChatboxEllipsesOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

const NavigationMobile = ({ show, setShow, user }) => {
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  return (
    <div
      css={
        show
          ? xw`w-full h-full absolute z-40  transform  translate-x-0 fixed`
          : xw`w-full h-full absolute z-40  transform -translate-x-full`
      }
    >
      <div
        css={xw`bg-gray-800 opacity-50 inset-0 fixed w-full h-full`}
        onClick={() => setShow(!show)}
      />
      <div
        css={xw`md:w-96 w-64 z-20 absolute left-0 z-40 top-0 bg-gray-800 shadow flex-col justify-between transition duration-150 ease-in-out h-full`}
      >
        <div css={xw`flex flex-col justify-between h-full`}>
          <div css={xw`px-6 pt-4`}>
            <div css={xw`flex items-center justify-end`}>
              <div
                id="cross"
                css={xw`text-white`}
                onClick={() => setShow(!show)}
              >
                <IoCloseOutline className="text-white" />
              </div>
            </div>
            <ul>
              <a>
                <li css={xw`text-white pt-8`}>
                  <div css={xw`flex items-center`}>
                    <div css={xw`md:w-6 md:h-6 w-5 h-5`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.16667 3H3.83333C3.3731 3 3 3.3731 3 3.83333V7.16667C3 7.6269 3.3731 8 3.83333 8H7.16667C7.6269 8 8 7.6269 8 7.16667V3.83333C8 3.3731 7.6269 3 7.16667 3Z"
                          stroke="#667EEA"
                          strokeWidth={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.16667 11.6667H3.83333C3.3731 11.6667 3 12.0398 3 12.5V15.8333C3 16.2936 3.3731 16.6667 3.83333 16.6667H7.16667C7.6269 16.6667 8 16.2936 8 15.8333V12.5C8 12.0398 7.6269 11.6667 7.16667 11.6667Z"
                          stroke="#667EEA"
                          strokeWidth={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.1667 11.6667H12.8333C12.3731 11.6667 12 12.0398 12 12.5V15.8334C12 16.2936 12.3731 16.6667 12.8333 16.6667H16.1667C16.6269 16.6667 17 16.2936 17 15.8334V12.5C17 12.0398 16.6269 11.6667 16.1667 11.6667Z"
                          stroke="#667EEA"
                          strokeWidth={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.1667 3H12.8333C12.3731 3 12 3.3731 12 3.83333V7.16667C12 7.6269 12.3731 8 12.8333 8H16.1667C16.6269 8 17 7.6269 17 7.16667V3.83333C17 3.3731 16.6269 3 16.1667 3Z"
                          stroke="#667EEA"
                          strokeWidth={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p css={xw`text-indigo-500 ml-3 text-lg md:text-2xl`}>
                      Dashboard
                    </p>
                  </div>
                </li>
              </a>
              <a>
                <li css={xw`text-white pt-8`}>
                  <div css={xw`flex items-center`}>
                    <div css={xw`flex items-center`}>
                      <div css={xw`md:w-6 md:h-6 w-5 h-5`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M2.33333 4.83333H4.83333C5.05435 4.83333 5.26631 4.74554 5.42259 4.58926C5.57887 4.43298 5.66667 4.22101 5.66667 4V3.16667C5.66667 2.72464 5.84226 2.30072 6.15482 1.98816C6.46738 1.67559 6.89131 1.5 7.33333 1.5C7.77536 1.5 8.19928 1.67559 8.51184 1.98816C8.8244 2.30072 9 2.72464 9 3.16667V4C9 4.22101 9.0878 4.43298 9.24408 4.58926C9.40036 4.74554 9.61232 4.83333 9.83333 4.83333H12.3333C12.5543 4.83333 12.7663 4.92113 12.9226 5.07741C13.0789 5.23369 13.1667 5.44565 13.1667 5.66667V8.16667C13.1667 8.38768 13.2545 8.59964 13.4107 8.75592C13.567 8.9122 13.779 9 14 9H14.8333C15.2754 9 15.6993 9.17559 16.0118 9.48816C16.3244 9.80072 16.5 10.2246 16.5 10.6667C16.5 11.1087 16.3244 11.5326 16.0118 11.8452C15.6993 12.1577 15.2754 12.3333 14.8333 12.3333H14C13.779 12.3333 13.567 12.4211 13.4107 12.5774C13.2545 12.7337 13.1667 12.9457 13.1667 13.1667V15.6667C13.1667 15.8877 13.0789 16.0996 12.9226 16.2559C12.7663 16.4122 12.5543 16.5 12.3333 16.5H9.83333C9.61232 16.5 9.40036 16.4122 9.24408 16.2559C9.0878 16.0996 9 15.8877 9 15.6667V14.8333C9 14.3913 8.8244 13.9674 8.51184 13.6548C8.19928 13.3423 7.77536 13.1667 7.33333 13.1667C6.89131 13.1667 6.46738 13.3423 6.15482 13.6548C5.84226 13.9674 5.66667 14.3913 5.66667 14.8333V15.6667C5.66667 15.8877 5.57887 16.0996 5.42259 16.2559C5.26631 16.4122 5.05435 16.5 4.83333 16.5H2.33333C2.11232 16.5 1.90036 16.4122 1.74408 16.2559C1.5878 16.0996 1.5 15.8877 1.5 15.6667V13.1667C1.5 12.9457 1.5878 12.7337 1.74408 12.5774C1.90036 12.4211 2.11232 12.3333 2.33333 12.3333H3.16667C3.60869 12.3333 4.03262 12.1577 4.34518 11.8452C4.65774 11.5326 4.83333 11.1087 4.83333 10.6667C4.83333 10.2246 4.65774 9.80072 4.34518 9.48816C4.03262 9.17559 3.60869 9 3.16667 9H2.33333C2.11232 9 1.90036 8.9122 1.74408 8.75592C1.5878 8.59964 1.5 8.38768 1.5 8.16667V5.66667C1.5 5.44565 1.5878 5.23369 1.74408 5.07741C1.90036 4.92113 2.11232 4.83333 2.33333 4.83333"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p css={xw`text-white ml-3 text-lg md:text-2xl`}>
                        Products
                      </p>
                    </div>
                    <div onClick={() => setProduct(!product)}>
                      {product ? (
                        <div css={xw`ml-4`}>
                          <IoChevronUpOutline />
                        </div>
                      ) : (
                        <div css={xw`ml-4`}>
                          <IoChevronDownOutline />
                        </div>
                      )}
                    </div>
                  </div>
                  {product ? (
                    <div>
                      <ul css={xw`my-3`}>
                        <li css={xw`text-sm text-indigo-500 py-2 px-6`}>
                          Best Sellers
                        </li>
                        <li
                          css={xw`text-sm text-white hover:text-indigo-500 py-2 px-6`}
                        >
                          Out of Stock
                        </li>
                        <li
                          css={xw`text-sm text-white hover:text-indigo-500 py-2 px-6`}
                        >
                          New Products
                        </li>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              </a>
              <a>
                <li css={xw`text-white pt-8`}>
                  <div css={xw`flex items-center`}>
                    <div css={xw`md:w-6 md:h-6 w-5 h-5`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.66667 13.3333L8.33334 8.33334L13.3333 6.66667L11.6667 11.6667L6.66667 13.3333Z"
                          stroke="currentColor"
                          strokeWidth={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                          stroke="currentColor"
                          strokeWidth={1}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p css={xw`text-white ml-3 text-lg md:text-2xl`}>
                      Performance
                    </p>
                  </div>
                </li>
              </a>
              <a>
                <li css={xw`text-white pt-8`}>
                  <div css={xw`flex items-center`}>
                    <div css={xw`flex items-center`}>
                      <div css={xw`md:w-6 md:h-6 w-5 h-5`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5.83333 6.66667L2.5 10L5.83333 13.3333"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.1667 6.66667L17.5 10L14.1667 13.3333"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.6667 3.33333L8.33333 16.6667"
                            stroke="currentColor"
                            strokeWidth={1}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p css={xw`text-white ml-3 text-lg md:text-2xl`}>
                        Deliverables
                      </p>
                    </div>
                    <div onClick={() => setDeliverables(!deliverables)}>
                      {deliverables ? (
                        <div css={xw` ml-4`}>
                          <IoChevronUpOutline />
                        </div>
                      ) : (
                        <div css={xw`ml-4`}>
                          <IoChevronDownOutline />
                        </div>
                      )}
                    </div>
                  </div>
                  {deliverables ? (
                    <div>
                      <ul css={xw`my-3`}>
                        <li css={xw`text-sm text-indigo-500 py-2 px-6`}>
                          Best Sellers
                        </li>
                        <li
                          css={xw`text-sm text-white hover:text-indigo-500 py-2 px-6`}
                        >
                          Out of Stock
                        </li>
                        <li
                          css={xw`text-sm text-white hover:text-indigo-500 py-2 px-6`}
                        >
                          New Products
                        </li>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              </a>
            </ul>
          </div>
          <div css={xw`w-full`}>
            <div css={xw`flex justify-center mb-4 w-full px-6`}>
              <div css={xw`relative w-full`}>
                <div
                  css={xw`text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4`}
                >
                  <IoSearchOutline />
                </div>
                <input
                  css={xw`bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-700 pl-10 py-2`}
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div css={xw`border-t border-gray-700`}>
              <div css={xw`w-full flex items-center justify-between px-6 pt-1`}>
                {user ? (
                  <div css={xw`flex items-center`}>
                    <img
                      alt="profile-pic"
                      src={user?.photoURL}
                      css={xw`w-8 h-8 rounded-md`}
                    />
                    <p css={xw`md:text-xl text-white text-base leading-4 ml-2`}>
                      {user.displayName}
                    </p>
                  </div>
                ) : (
                  <div css={xw`flex items-center`}>
                    <Link href="/signin">
                      <a
                        css={xw`md:text-xl text-white text-base leading-4 ml-2 cursor-pointer hover:text-blue-600`}
                      >
                        Sign In
                      </a>
                    </Link>
                  </div>
                )}
                <ul css={xw`flex`}>
                  <li css={xw`cursor-pointer text-white pt-5 pb-3`}>
                    <IoChatboxEllipsesOutline />
                  </li>
                  <li css={xw`cursor-pointer text-white pt-5 pb-3 pl-3`}>
                    <IoNotificationsOutline />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMobile;
