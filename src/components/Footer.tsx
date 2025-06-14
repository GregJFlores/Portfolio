import React from "react";

type Props = {};

const Footer = (props: Props) => {
    const currentYear = new Date().getFullYear();

    return (
        <div
            className="bg-green-800 p-2 text-center text-xs relative z-10
          text-green-100
          "
        >
            © {currentYear} Gregory Flores
        </div>
    );
};

export default Footer;
