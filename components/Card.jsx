import React from "react";
import {
  IoArrowForwardSharp,
  IoEllipsisHorizontalCircle,
} from "react-icons/io5";
import xw from "xwind";

const Card = ({ imgSrc }) => {
  return (
    <>
      <div css={xw`flex border justify-center my-8 pb-4 px-2 sm:px-6`}>
        <div css={xw`max-w-md rounded overflow-hidden`}>
          <div css={xw`bg-white dark:bg-gray-800 rounded-t py-6`}>
            <div css={xw`flex items-start justify-between`}>
              <div css={xw`flex items-center`}>
                <div css={xw``}>
                  <p
                    css={xw`sm:text-2xl text-base  font-semibold leading-4 text-gray-800 px-1 dark:text-gray-100`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                  <p
                    css={xw`sm:text-xl text-sm leading-6 pt-1 text-gray-500 dark:text-gray-400 mt-4`}
                  >
                    Got quarantined at the vet and had to give Billy a little
                    peptalk that the other dogs do wanna be his friend, he’s
                    just can’t wait to play with them
                  </p>
                </div>
              </div>
            </div>
            <p
              css={xw`mt-3  mb-4 leading-5 text-gray-800 dark:text-gray-100 w-11/12`}
            >
              <span css={xw`font-bold`}>#billy #pets #dogs</span>
            </p>
          </div>
          <img css={xw`w-full m-auto`} src={imgSrc} />
          <div
            css={xw`bg-white dark:bg-gray-800 rounded-b px-1 py-5  flex justify-between items-center`}
          >
            <div css={xw`flex items-center`}>
              <div css={xw`flex items-center`}>
                <p
                  css={xw`ml-2 text-xl leading-4 text-gray-500 dark:text-gray-400`}
                >
                  Read Report
                </p>
              </div>
            </div>
            <IoArrowForwardSharp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
