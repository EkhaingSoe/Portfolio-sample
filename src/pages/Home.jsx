import React from "react";
import Button from "../components/Common/Button";
// import myImage from "../assets/images/eikhaingsoe.png";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      {/* home  */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-10  flex items-center justify-center ">
        <div className=" gap-5">
          <div>
            <h1 className="mb-2">Hello I am</h1>
            <h1 className="font-semibold text-lightGreen text-[20px] mb-2">
              Ei Khaing Soe
            </h1>
            <h1 className=" font-extrabold text-5xl mb-3 ">Web</h1>
            <h1 className=" font-extrabold text-5xl mb-3  ">Developer</h1>
            <p className="mb-3">
              Hi, I'm Ei Khaing Soe, a passionate front-end developer based in
              [Your Location]. With a keen eye for design and a strong
              foundation in coding, I create intuitive and responsive web
              interfaces that enhance user experience.
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={() => alert("Primary Button Clicked")}
            >
              Hire me
            </Button>
          </div>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1450268558/nl/foto/summer-selfie.webp?s=2048x2048&w=is&k=20&c=jwDWUtnR_apcuto3nUD-xdg4IZ1wTGlKpZ4mvPCRt20="
            alt="My Image"
            className="w-[700px]"
          />
          <div className="flex items-center justify-center mt-5 gap-5">
            <a
              href="https://www.facebook.com/yourFacebookProfile"
              target="_blank"
            >
              <FaFacebook className="text-[24px] text-lightGreen" />
            </a>
            <a
              href="https://www.facebook.com/yourFacebookProfile"
              target="_blank"
            >
              <FaSquareInstagram className="text-[24px] text-lightGreen" />
            </a>
            <a
              href="https://www.facebook.com/yourFacebookProfile"
              target="_blank"
            >
              <FaLinkedinIn className="text-[24px] text-lightGreen " />
            </a>
          </div>
        </div>
      </div>
      {/* about  */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-10  flex items-center justify-center">
        <div>
          <div className="border border-lightGreen px-6 py-4 rounded-xl">
            <h1 className="text-center text-lg text-lightGreen">
              Personal Details
            </h1>

            <div class="relative overflow-x-auto w-full">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Age
                    </th>
                    <td class="px-6 py-4">28</td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Freelance
                    </th>
                    <td class="px-6 py-4">Available</td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Email
                    </th>
                    <td class="px-6 py-4">eikhaingsoe.ycc@gmail.com</td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Phone
                    </th>
                    <td class="px-6 py-4">09456639939</td>
                  </tr>
                  <tr class="bg-white ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      Address
                    </th>
                    <td class="px-6 py-4">Yangon Township, Myanmar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-lightGreen text-center text-3xl font-semibold mb-5">
              About me
            </h1>
            <p className="mb-5">
              Create a button in your React component that links to the PDF
              file. You can use an anchor tag to handle the download. The href
              attribute should point to the location of the PDF file, and the
              download attribute should prompt the browser to download the file
              instead of opening it.
            </p>
            <Button variant="primary" size="md">
              <a
                href="../public/Eikhaingsoe_resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <CiSaveDown2 className="text-lg" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* experience  */}
      <div className="flex items-center justify-center py-20">
        <div>
          <h1 className="text-lightGreen text-center text-3xl font-semibold mb-5">
            My Experience
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-10">
            <div className="border border-lightGreen px-5 lg:px-10 py-4 lg:py-6 rounded-xl hover:shadow-md cursor-pointer hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-[16px] font-semibold text-lightGreen">
                  Junior FrontEnd Developer
                </h1>
                <h1>Dec 2022 - Dec 2023</h1>
              </div>
              <h1 className="mb-2 font-medium">
                Unity Source <span>( Yangon, Myanmar )</span>
              </h1>
              <h1 className="mb-2 font-medium">
                Distribution Software System for Mobile Shops
              </h1>
              <ul className="list-disc px-4 text-gray-400">
                <li className="mb-2 text-justify ">
                  This Application is designed for a company they want to manage
                  their phone distributions. Developing By HTML, CSS, tailwind ,
                  JavaScript, Jquery and JavaScript Libraries for front-end and
                  then PHP, Laravel, Ajax and MySQL is used for backend.{" "}
                </li>
                <li className="text-justify">
                  Designed and developed user interfaces for PHP Laravel
                  Projects, focusing on creating intuitive and visually
                  appealing experiences for users.
                </li>
              </ul>
            </div>
            <div>
              <div className="border border-lightGreen px-5 lg:px-10 py-4 lg:py-6 rounded-xl hover:shadow-md cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-[16px] font-semibold text-lightGreen">
                    Mid-level FrontEnd Developer
                  </h1>
                  <h1>Jan 2024 - Now</h1>
                </div>
                <h1 className="mb-2 font-medium">
                  Innovation Network Technology <span>( Yangon, Myanmar )</span>
                </h1>
                <h1 className="mb-2 font-medium">New Chat Shopping Website</h1>
                <ul className="list-disc px-4 text-gray-400">
                  <li className="mb-2 text-justify ">
                    Developed and maintained the frontend of an ecommerce
                    website using Angular Framework, ensuring high performance
                    and seamless user experience.{" "}
                  </li>
                  <li className="text-justify">
                    various payment gateways into the checkout process, allowing
                    customers to securely complete transactions using their
                    preferred payment method.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skill */}
      <div className="lg:max-w-[1000px] mx-auto py-20">
        <div>
          <h1 className="text-lightGreen text-center text-3xl font-semibold mb-10">
            My Technical Skills
          </h1>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]" >HTML</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar"></div>
            </div>
            <div>100%</div>
          </div>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]" >CSS</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar"></div>
            </div>
            <div>100%</div>
          </div>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]" >JavaScript</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar" style={{ width: '80%' }} ></div>
            </div>
            <div>80%</div>
          </div>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]" >Bootstrap</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar"></div>
            </div>
            <div>100%</div>
          </div>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]" >Tailwind</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar"></div>
            </div>
            <div>100%</div>
          </div>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]" >Angular</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar" style={{ width: '80%' }} ></div>
            </div>
            <div>80%</div>
          </div>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]" >React</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar" style={{ width: '80%' }} ></div>
            </div>
            <div>80%</div>
          </div>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]" >TypeScript</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar" style={{ width: '80%' }} ></div>
            </div>
            <div>80%</div>
          </div>
          <div className="flex items-center gap-10 mb-5" >
            <div className="w-[100px]">Next.js</div>
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                <div id="progress-bar" className="bg-lightGreen h-full progress-bar" style={{ width: '50%' }} ></div>
            </div>
            <div>50%</div>
          </div>
  
        </div>
      </div>
      {/* contact  */}
      <div className=" mx-auto py-20" >
      <h1 className="text-lightGreen text-center text-3xl font-semibold mb-10">
            Contact 
          </h1>
      </div>
    </div>
  );
};

export default Home;
