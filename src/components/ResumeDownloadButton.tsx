function ResumeDownloadButton() {
    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Gregory_Flores_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <button
            onClick={handleDownloadResume}
            className="block w-full disabled:opacity-65  disabled:bg-green-700 disabled:text-gray-200  bg-green-600/75 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-green-500/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
        >
            Download My Resume
        </button>
    );
}
export default ResumeDownloadButton;
