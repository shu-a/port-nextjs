import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <>
      <a
        href="mailto:master@shu-a.app"
        className="relative flex flex-row items-center"
      >
        <label htmlFor="contactUs" className="sr-only">
          Contact Us
        </label>
        <EnvelopeIcon className="w-[18px] h-[18px]" />
        <div className="ml-2">Contact Us</div>
      </a>
    </>
  );
};

export default Footer;
