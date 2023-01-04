import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-evenly bg-[#333333] text-[#fafafa] py-4">
        <p>
          © {new Date().getFullYear()} Copyright - Developed by{" "}
          <a
            target="_blank"
            className="text-white underline"
            href="https://github.com/ethemkizilyer"
          >
            Ethem KIZILYER
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
