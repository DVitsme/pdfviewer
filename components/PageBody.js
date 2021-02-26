import React from "react";
import xw from "xwind";

import SubMenu from "./SubMenu";

const PageBody = ({ children }) => {
  return (
    <div css={xw`bg-gray-200 pb-10`}>
      <div css={xw`container px-6 mx-auto`}>
        <div css={xw`relative z-10 w-full`}>
          <div css={xw`w-full -mt-8 h-auto`}>
            <SubMenu />
            {/* Remove class [ h-64 ] when adding a card block */}
            <div css={xw`container mx-auto`}>
              <div
                css={xw`bg-white w-full h-full rounded shadow mb-10 min-h-screen`}
              >
                {/* Place your content here */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBody;
