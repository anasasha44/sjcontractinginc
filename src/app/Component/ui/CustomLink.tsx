"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode } from "react";
import { usePageLoader } from "./PageLoader";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function CustomLink({
  href,
  children,
  className,
  ...props
}: Props) {
  const pathname = usePathname();
  const { startLoading } = usePageLoader();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    const targetPath = typeof href === "string" ? href : href.pathname || "";

    if (targetPath && targetPath !== pathname) {
      startLoading();
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}