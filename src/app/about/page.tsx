import AboutMe from "@/components/AboutMe";

type Props = {};

export const metadata = {
    title: "About - Gregory (Greg) Flores",
    description:
        "Software Engineer Gregory (Greg) Flores brings comprehensive engineering expertise to full-stack development and innovative technology solutions. Based in San Antonio with a B.S. from St. Mary's University.",
};

const page = (props: Props) => {
    return <AboutMe />;
};

export default page;
