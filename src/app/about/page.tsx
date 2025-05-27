import AboutMe from "@/components/AboutMe";

type Props = {};

export const metadata = {
    title: "Gregory Flores",
    description: "Software Engineer with B.S. from St. Mary's University, San Antonio. Passionate about creating streamlined technology solutions.",
};

const page = (props: Props) => {
    return <AboutMe />;
};

export default page;
