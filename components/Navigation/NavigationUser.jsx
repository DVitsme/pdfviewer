import xw from "xwind";
import {
  IoChevronDownOutline,
  IoHelpOutline,
  IoSettingsOutline,
  IoApps,
} from "react-icons/io5";

const NavigationUser = ({ setProfile, profile, user, signOut }) => {
  return (
    <div
      aria-haspopup="true"
      css={xw`cursor-pointer h-full xl:flex items-center justify-end hidden relative`}
    >
      <div css={xw`rounded`} onClick={() => setProfile(!profile)}>
        <img
          css={xw`rounded h-10 w-10 object-cover`}
          src={user?.photoURL}
          alt="logo"
        />
      </div>
      <div css={xw`text-gray-600 ml-2`} onClick={() => setProfile(!profile)}>
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
            css={xw`flex border-b border-gray-400 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none`}
          >
            <IoSettingsOutline />
            <span css={xw`ml-2`}>Performance</span>
          </li>
          <hr />
          <li
            onClick={signOut}
            css={xw`flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none`}
          >
            <IoSettingsOutline />
            <span css={xw`ml-2`}>Sign Out</span>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavigationUser;
