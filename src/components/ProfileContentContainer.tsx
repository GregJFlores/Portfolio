import React from "react";

type Props = {
    children: React.ReactNode;
};

const ProfileContentContainer = (props: Props) => {
    return <div className="p-6 relative z-10 min-h-[35rem]">{props.children}</div>;
};

export default ProfileContentContainer;
