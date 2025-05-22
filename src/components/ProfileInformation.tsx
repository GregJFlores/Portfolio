import React from "react";

type InfoItem = {
    label: string;
    value: string | React.ReactNode;
    icon?: React.ElementType;
};

type Props = {
    items: InfoItem[];
};

const ProfileInformation = (props: Props) => {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            {props.items.map((item, index) => (
                <div key={index}>
                    <p
                        className="text-green-500 
                      drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]"
                    >
                        {item.label}
                    </p>
                    <div className="flex items-center gap-x-2">
                        {item.icon && React.createElement(item.icon, { className: "mr-2 text-green-300", size: 16 })}
                        {item.value}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfileInformation;
