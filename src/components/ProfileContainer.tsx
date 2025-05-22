import React from "react";

type Props = {
    children: React.ReactNode;
};

const ProfileContainer = (props: Props) => {
    return (
        <div className=" text-green-300 font-mono tracking-tight overflow-hidden">
            <div
                className="w-full md:w-6xl mx-auto bg-gray-900 bg-opacity-70 border-4 border-green-500 rounded-lg overflow-hidden 
        relative
        shadow-[0_0_50px_rgba(34,197,94,0.4)]"
            >
                {props.children}
            </div>
        </div>
    );
};

export default ProfileContainer;
