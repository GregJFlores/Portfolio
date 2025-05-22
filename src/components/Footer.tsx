import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div
            className="bg-green-900 bg-opacity-50 p-2 text-center text-xs relative z-10
          text-green-100
          drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"
        >
            © 2025 Gregory Flores
        </div>
    );
};

export default Footer;
