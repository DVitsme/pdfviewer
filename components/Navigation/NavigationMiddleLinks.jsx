import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import xw from "xwind";
import slugify from "slugify";

const menuLinks = ["pdfs", "articles", "videos", "other resources"];
const MenuLink = ({ pathTitle, index, route }) => {
  const pathName = slugify(pathTitle);
  {
    /* first half go on the left second half go on the right  
    Note: if index <= then it will apply left margin on First of the second half (because it will eval to true)
    */
  }
  let renderLeftOrRight = index < Math.round(menuLinks.length / 2);
  return (
    <Link href={`/${pathName}`}>
      <a css={route === `/${pathName}` ? xw`text-indigo-500` : xw`text-white`}>
        <li
          css={xw`cursor-pointer h-full xl:flex items-center text-sm tracking-normal hidden capitalize`}
        >
          {/* if NOT the first or the last give it spacing*/}
          {index !== 0 || index === menuLinks.length - 1 ? (
            <p css={renderLeftOrRight ? xw`ml-0 xl:ml-10` : xw`mr-10`}>
              {pathTitle}
            </p>
          ) : (
            <p>{pathTitle}</p>
          )}
        </li>
      </a>
    </Link>
  );
};

const HomeLogo = () => (
  <Link href="/">
    <a>
      <li css={xw`mx-0 xl:mx-12 cursor-pointer`}>
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
              fill="#667eea"
              d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
            />
          </g>
        </svg>
      </li>
    </a>
  </Link>
);

const NavigationMiddleLinks = () => {
  const router = useRouter();
  return (
    <ul css={xw`flex items-center justify-center h-full`}>
      {menuLinks.map((pathTitle, index) => {
        if (index === Math.round(menuLinks.length / 2))
          return (
            <React.Fragment key={Date.now()}>
              <HomeLogo />
              <MenuLink
                pathTitle={pathTitle}
                index={index}
                route={router.route}
              />
            </React.Fragment>
          );
        return (
          <MenuLink
            pathTitle={pathTitle}
            key={index}
            index={index}
            route={router.route}
          />
        );
      })}
    </ul>
  );
};

export default NavigationMiddleLinks;
