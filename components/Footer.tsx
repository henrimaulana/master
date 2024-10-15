import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-gray-800 justify-center items-center py-20">
      <div className="flex flex-col gap-5 text-white text-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-[100px]" />
          <h2 className="text-2xl font-bold">Bursa malaysia Bhd</h2>
        </div>
        <p>Copyright © 2024 Bursa malaysia Bhd, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
