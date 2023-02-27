import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center text-white">
      <div className="flex w-full  flex-col items-center bg-[#383838] px-4 lg:px-36">
        <div className="flex w-full max-w-[1280px] flex-col py-8 ">
          <div className="flex w-full flex-col items-center justify-between lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center lg:items-start">
              <Link href="/">
                <i
                  className="my-1 block h-[44px] w-48 cursor-pointer invert"
                  style={{
                    backgroundImage: "url('/assets/images/logoSVG.svg')",
                    backgroundSize: '192px',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></i>
              </Link>
              <h3 className="text-sm">
                <a href="mailto:ys146228@gmail.com">
                  ys146228@gmail.com
                </a>
              </h3>
              <h3 className="text-sm">
                <a href="tel:+917002079576">+91 8624016814</a>
              </h3>
              <div className="my-3 flex">
                <a
                  href="#"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <div className="mx-2  h-8 w-8 overflow-hidden rounded-full bg-[#0E5FFF]">
                    <FaFacebookF className=" h-8 w-8 p-2" />
                  </div>
                </a>
                <a
                  href="#"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <div className="mx-2  h-8 w-8 overflow-hidden rounded-full bg-[#0E5FFF]">
                    <FaTwitter className="h-8 w-8 p-2" />
                  </div>
                </a>
                <a
                  href="#"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <div className="mx-2  h-8 w-8 overflow-hidden rounded-full bg-[#0E5FFF]">
                    <AiFillInstagram className=" h-8 w-8  p-2" />
                  </div>
                </a>
                <a
                  href="#"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <div className="mx-2  h-8 w-8 overflow-hidden rounded-full bg-[#0E5FFF]">
                    <BsWhatsapp className="h-8 w-8 p-2" />
                  </div>
                </a>
                <a
                  href="#"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <div className="mx-2 h-8  w-8 overflow-hidden rounded-full bg-[#0E5FFF]">
                    <FaLinkedinIn className="h-8 w-8 p-2" />
                  </div>
                </a>
                <a
                  href="#"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <div className="mx-2 h-8 w-8 overflow-hidden rounded-full bg-[#0E5FFF]">
                    <BsYoutube className=" h-8 w-8 p-2" />
                  </div>
                </a>
              </div>
            </div>
            <div className="grid w-full  grid-cols-2 items-center text-center lg:text-end">
              <div>
                <Link href="/">
                  <div className="my-5 list-none">Home </div>
                </Link>
                <Link href="/help">
                  <div className="my-5 list-none">Help & FAQ</div>
                </Link>
                <Link href="/about">
                  <div className="my-5 list-none">About Us</div>
                </Link>
              </div>
              <div>
                <a
                  href="#"
                  target={`_blank`}
                >
                  <div className="my-5 list-none">Download App</div>
                </a>
                <Link href="/privacy">
                  <div className="my-5 list-none">Privacy Policy</div>
                </Link>
                <Link href="/terms">
                  <div className="my-5 list-none">Terms & Conditions</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full  flex-col items-center bg-[#0E5FFF] px-4 lg:px-36">
        <div className="flex w-full max-w-[1280px] flex-col py-4">
          <h2 className="text-center text-xs">
            &copy;2023 SocieMan. All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;