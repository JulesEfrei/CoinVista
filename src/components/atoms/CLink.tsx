"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode, useContext, useEffect, useState } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}

const CLink = (props: Props) => {
  const [language, setLanguage] = useState("en-US");

  useEffect(() => {
    setLanguage(window.location.pathname.split("/")[1]);
  }, []);

  return (
    <Link href={"/" + language + props.href} className={props.className || ""}>
      {props.children}
    </Link>
  );
};

export default CLink;
