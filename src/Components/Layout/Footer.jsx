import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
 
      <footer className="">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center border-b gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div className="">
              <h6 className="mb-6 text-sm font-semibold  uppercase text-white">
                Company
              </h6>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to={"/"} className=" hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Brand Center
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-sm font-semibold uppercase text-white">
                Help center
              </h6>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Discord Server
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h6>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to={"/pryvacy-policy"} className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/"} className="hover:underline">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to={"/terms-and-conditions"} className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="mb-6 text-sm font-semibold  uppercase text-white">
                Download
              </h6>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6  md:flex md:items-center md:justify-between w-[90%] m-auto">
            <span className="text-sm text-gray-500  sm:text-center">
              © 2024 Britto Soft. All Rights Reserved.
            </span>
          
            <div className="flex text-gray-500 mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              Version 1.0
            </div>
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
