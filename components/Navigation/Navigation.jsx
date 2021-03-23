import React, { useContext, useState } from "react";

import xw from "xwind";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";

import * as db from "../../lib/firebase";

import { UserContext } from "../../lib/context";
import NavigationMobile from "./NavigationMobile";
import NavigationMiddleLinks from "./NavigationMiddleLinks";
import NavigationUser from "./NavigationUser";

const CompletedNavigation = () => {
  const { user } = useContext(UserContext);

  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <React.Fragment>
      {/* Mobile Starts */}

      <NavigationMobile show={show} setShow={setShow} user={user} />

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

          {/* Show Authed User Start */}
          {user ? (
            <NavigationUser
              setProfile={setProfile}
              profile={profile}
              signOut={db.signOut}
              user={user}
            />
          ) : (
            <div css={xw``}>
              <Link href="/signin">
                <button css={xw`text-white`}>Log In</button>
              </Link>
            </div>
          )}
          {/* Show Authed User End */}

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
