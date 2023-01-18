import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-p-1 w-full p-4">
      <div className="h-full flex items-center justify-center flex-col lg:flex-row">
        <div className="box-border bg-slate-100 p-4 rounded shadow-lg border border-p-3 text-p-2 m-2">
          <p className="font-semibold">Connect with us</p>
          <div className="grid gap-4 grid-cols-2 grid-rows-2 mt-2">
            <a
              className="flex items-center justify-center"
              href="https://www.facebook.com/hanlonlabs"
              target="_blank" 
            >
              <FaFacebookSquare className="w-8 h-8" />
            </a>
            <a
              className="flex items-center justify-center"
              href="https://twitter.com/hanlonlab"
              target="_blank" 
            >
              <FaTwitterSquare className="w-8 h-8" />
            </a>
            <a
              className="flex items-center justify-center"
              href="https://www.instagram.com/hanlonlab"
              target="_blank" 
            >
              <FaInstagramSquare className="w-8 h-8" />
            </a>
            <a
              className="flex items-center justify-center"
              href="mailto:fscadmin@stevens.edu"
              rel="nofollow noreferrer noopener"
            >
              <MdEmail className="h-8 w-8" />
            </a>
          </div>
        </div>
        <div className="box-border bg-slate-100 p-4 rounded shadow-lg border border-p-3 text-p-2 m-2">
          <p className="font-semibold">Address</p>
          <p>
            Hanlon Financial Systems Lab
            <br />Babbio Center
            <br />
            525 River St.
            <br />
            Hoboken, NJ 07030
            <br />
            <span className="font-semibold">
              Hanlon Lab Research Room Work Phone:
            </span>
            <br />
            +1(201)216-5298
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
