import { Fragment } from "react";
import xw from "xwind";
import Link from "next/link";

// Navigation Temp for v0.0.1 Deploy
const Navigation = () => {
  return (
    <Fragment>
      {/* Mobile Starts */}

      {/* Mobile End */}

      {/* Button To Variable Scoop starts */}
      <nav
        css={xw`w-full mx-auto bg-gray-800 border-b border-gray-700 shadow relative z-20`}
      >
        <div
          css={xw`container px-6 h-16 flex items-center justify-between mx-auto`}
        >
          <div css={xw`flex items-center`}>
            <div
              css={xw`rounded-full relative flex justify-end text-gray-500`}
            ></div>
          </div>
          {/* Button To Variable Scoop Ends */}
          {/* Middle Links Start */}
          <Link href="/">
            <a css={xw`text-white text-2xl font-semibold cursor-pointer`}>
              Variable Scoop Tools
            </a>
          </Link>

          {/* Middle Links End */}
          <div
            aria-haspopup="true"
            css={xw`cursor-pointer h-full xl:flex items-center justify-end hidden relative`}
          >
            <div css={xw`rounded`}></div>
          </div>
        </div>
      </nav>
      {/* Navigation ends */}
    </Fragment>
  );
};

export default Navigation;
