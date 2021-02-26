import React, { useState } from "react";
import { IoNavigateCircle } from "react-icons/io5";
import xw from "xwind";

const SubMenu = () => {
  // create array for tags and set default state to first item in array
  const [select, setSelect] = useState("quarterly");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(select);
  };
  return (
    <div css={xw`w-full h-auto lg:h-20 mb-6 rounded shadow bg-white`}>
      <div css={xw`lg:hidden bg-white w-full relative`}>
        <div css={xw`absolute inset-0 m-auto mr-4 z-0 w-6 h-6`}>
          <IoNavigateCircle />
        </div>
        <form onSubmit={handleSubmit}>
          <select
            aria-label="Selected tab"
            css={xw`block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10`}
            value={select}
            onChange={handleChange}
          >
            <option value="quarterly">Quarterly</option>
            <option value="myprofile">My Profile </option>
            <option value="forcasting">Forecasting </option>
            <option value="ratings">Ratings </option>
            <option value="historysheet">History Sheet </option>
            <option value="accountsettings">Account Settings </option>
          </select>
        </form>
      </div>
      <ul css={xw`hidden lg:flex flex-row items-center h-full`}>
        <li
          css={xw`ml-4 my-2 lg:my-0 rounded text-base text-gray-800 px-4 py-2 bg-gray-200`}
        >
          Quarterly
        </li>
        <li css={xw`pl-10 my-0 text-base text-gray-600`}>My Profile</li>
        <li css={xw`pl-10 my-0 text-base text-gray-600`}>Forecasting</li>
        <li css={xw`pl-10 my-0 text-base text-gray-600`}>Ratings</li>
        <li css={xw`pl-10 my-0 text-base text-gray-600`}>History Sheet</li>
        <li css={xw`pl-10 my-0 text-base text-gray-600`}>Account Settings</li>
      </ul>
    </div>
  );
};

export default SubMenu;
