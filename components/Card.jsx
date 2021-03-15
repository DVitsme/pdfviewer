import React from "react";
import {
  IoArrowForwardSharp,
  IoEllipsisHorizontalCircle,
} from "react-icons/io5";
import xw from "xwind";
import PdfViewer from "./PdfViewer";
import slugify from "slugify";
import Link from "next/link";
// <img css={xw`w-full m-auto`} src={imgSrc} />

const Card = ({ title, desc, tags }) => {
  const pdfLink = slugify(`${title}`);
  console.log(pdfLink);
  return (
    <div css={xw`flex border justify-center my-8 pb-4 px-2 sm:px-6`}>
      <div css={xw`max-w-md rounded overflow-hidden flex flex-col`}>
        <div css={xw`bg-white dark:bg-gray-800 rounded-t pt-6`}>
          <div css={xw`flex items-start justify-between`}>
            <div css={xw`flex items-center`}>
              <div css={xw``}>
                <Link href={`/${pdfLink}`}>
                  <a
                    css={xw`sm:text-2xl text-base font-semibold leading-4 text-gray-800 px-1 dark:text-gray-100 capitalize mb-4`}
                  >
                    {title}
                  </a>
                </Link>
                {desc && (
                  <p
                    css={xw`sm:text-xl text-sm leading-6 pt-1 text-gray-500 dark:text-gray-400 mt-4`}
                  >
                    {desc}
                  </p>
                )}
              </div>
            </div>
          </div>
          {tags && (
            <p
              css={xw`mt-3  mb-4 leading-5 text-gray-800 dark:text-gray-100 w-11/12`}
            >
              <span css={xw`font-bold`}>#billy #pets #dogs</span>
            </p>
          )}
        </div>

        <PdfViewer file={`/pdfs/${title}.pdf`} navigation={false} />

        <div
          css={xw`bg-white dark:bg-gray-800 rounded-b px-1 py-5  flex justify-between items-center`}
        >
          <div css={xw`flex items-center`}>
            <div css={xw`flex items-center`}>
              <Link href={`/${pdfLink}`}>
                <a
                  css={xw`ml-2 text-xl leading-4 text-gray-500 dark:text-gray-400 cursor-pointer`}
                >
                  Read Report
                </a>
              </Link>
            </div>
          </div>
          <Link href={`/${pdfLink}`}>
            <a
              css={xw`ml-2 text-xl leading-4 text-gray-500 dark:text-gray-400 cursor-pointer`}
            >
              <IoArrowForwardSharp />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
