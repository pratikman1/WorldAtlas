import React from "react";
import footerContact from "../../api/footerApi";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer
      id="footerSection"
      className="bg-blue-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {footerContact.map((footer, index) => {
          return (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10">
              <div> {footerIcon.IoCallSharp} </div>
              <div>
                <p className="text-lg font-semibold mb-2">{footer.title}</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  {footer.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p>Copyright 2025 © - All Right Reserved.</p>
        </div>
        <div className=" flex gap-3 ">
          <FaInstagram />
          <FaXTwitter />
          <FaFacebook />
          <FaGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
