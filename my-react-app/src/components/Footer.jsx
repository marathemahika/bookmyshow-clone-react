import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#313034] text-[#999] py-10 text-center mt-10">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex justify-center gap-6 mb-8 text-xl">
          <i className="fab fa-facebook hover:text-white cursor-pointer"></i>
          <i className="fab fa-twitter hover:text-white cursor-pointer"></i>
          <i className="fab fa-instagram hover:text-white cursor-pointer"></i>
        </div>
        <p className="text-[11px]">Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;