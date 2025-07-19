"use client";

import { cn } from "atomv2/util/atomHelperV2";
import _ from "lodash";
import Link from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";

export interface AtomUrlV2Props {
  href?: string | UrlObject;
  baseUrl?: string; // external URL (e.g., https://google.com)
  isExternal?: boolean; // should open in new tab
  prefetch?: boolean; // Next.js prefetch
  replace?: boolean; // Next.js history.replace
  scroll?: boolean; // Next.js scroll behavior
  target?: "_blank" | "_self" | "_parent" | "_top"; // <a> tag target
  title?: string; // Tooltip эсвэл accessibility
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

export default function AtomUrlV2({
  href,
  baseUrl,
  className,
  children,
  ...props
}: AtomUrlV2Props) {
  if (_.isEmpty(href) && _.isEmpty(baseUrl)) return <>{children}</>;

  const classNameReady = cn(
    "w-fit h-fit block hover:brightness-90 transition-all duration-200 ease-in-out",
    className
  );

  // console.log("AtomUrlV2 df", { href, baseUrl, className, classNameReady });

  if (!_.isEmpty(baseUrl)) {
    return (
      <a
        href={baseUrl}
        target={props.target ?? "_blank"}
        rel="noopener noreferrer"
        className={classNameReady}
        {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href!} className={classNameReady} {...props}>
      {children}
    </Link>
  );
}
