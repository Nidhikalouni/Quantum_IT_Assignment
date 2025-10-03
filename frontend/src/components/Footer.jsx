import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
