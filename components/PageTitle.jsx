import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import xw from "xwind";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

const PageTitle = () => {
  const router = useRouter();

  const isHomePage = router.asPath === "/";
  const [breadcrumbs, setBreadcrumbs] = useState("");
  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }
  return (
    <div css={xw`relative z-10 bg-gray-800 pt-8 pb-16`}>
      <div
        css={xw`container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between`}
      >
        {isHomePage ? (
          <h4 css={xw`text-2xl font-bold leading-tight text-white capitalize`}>
            Home
          </h4>
        ) : (
          <BreadCrumbPagination
            breadcrumbs={breadcrumbs}
            convertBreadcrumb={convertBreadcrumb}
          />
        )}
        <div css={xw`mt-6 lg:mt-0`}>
          <button
            css={xw`focus:outline-none mr-3 bg-transparent transition duration-150 ease-in-out hover:bg-gray-700 rounded text-white px-5 py-2 text-sm border border-white`}
          >
            Back
          </button>
          <button
            css={xw`focus:outline-none transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm`}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const BreadCrumbPagination = ({ breadcrumbs, convertBreadcrumb }) => (
  <div>
    <p css={xw`flex items-center text-gray-300 text-xs`}>
      <Link href="/">
        <a>
          <span>Home</span>
        </a>
      </Link>
      <span css={xw`mx-2`}>&gt;</span>
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <Link href={breadcrumb.href} key={breadcrumb.href}>
            <a css={xw`capitalize`}>
              {convertBreadcrumb(breadcrumb.breadcrumb)}
              <span css={i === breadcrumbs.length - 1 ? xw`hidden` : xw`mx-2`}>
                &gt;
              </span>
            </a>
          </Link>
        );
      })}
    </p>
    <h4 css={xw`text-2xl font-bold leading-tight text-white capitalize`}>
      {convertBreadcrumb(breadcrumbs[0].breadcrumb)}
    </h4>
  </div>
);
export default PageTitle;
