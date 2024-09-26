import React from "react";
// import myImage from "../assets/images/eikhaingsoe.png";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-10">
    <div>
      <div className="border border-lightGreen px-6 py-4 rounded-xl">
        <h1 className="text-center text-lg text-lightGreen">
          Personal Details
        </h1>

        <div className="relative overflow-x-auto w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Age
                </th>
                <td className="px-6 py-4">28</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Freelance
                </th>
                <td className="px-6 py-4">Available</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Email
                </th>
                <td className="px-6 py-4">eikhaingsoe.ycc@gmail.com</td>
              </tr>
              <tr className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Phone
                </th>
                <td className="px-6 py-4">09456639939</td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  Address
                </th>
                <td className="px-6 py-4">Yangon Township, Myanmar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-lightGreen text-5xl font-semibold mb-5">About me</h1>
        <p className="mb-5">
          Create a button in your React component that links to the PDF
          file. You can use an anchor tag to handle the download. The href
          attribute should point to the location of the PDF file, and the
          download attribute should prompt the browser to download the file
          instead of opening it.
        </p>
       
        <button
          variant="primary"
          size="md"

        >
          <a href="../public/Eikhaingsoe_resume.pdf" download className="flex items-center gap-2" >
          <CiSaveDown2 className="text-lg" />
          Download CV
          </a>
          
        </button>
      </div>
    </div>
  </div>
  );
};

export default About;
