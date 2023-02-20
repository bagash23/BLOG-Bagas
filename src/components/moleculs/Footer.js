import React from "react";

const Footer = () => {
  return (
    <footer className="lg:mx-4 mt-5 flex lg:block flex-col lg:py-5 lg:justify-center">
      <div className="mx-4 py-10 md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="">
            <h6
              className="
            
            font-semibold
            mb-4
            flex
            items-center
            
            md:justify-start
          "
            >
              <img
                src="https://buildwithangga.com/themes/front/images/logo_bwa_new.svg"
                className="lg:w-50 w-10 py-3 lg:mr-5 mr-5"
                alt="logo"
              />
              Bimbel Amal
            </h6>
            <p>
              Website untuk belajar design dan code dari mentor yang sangat
              berpengalaman di bidangnya masing-masing.
            </p>
          </div>
          <div className="">
            <h6 className=" font-semibold mb-4 flex md:justify-start">
              Start Your Career
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Angular
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                React
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Laravel
              </a>
            </p>
          </div>
          <div className="">
            <h6 className=" font-semibold mb-4 flex  md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Pricing
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Settings
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Help
              </a>
            </p>
          </div>
          <div className="">
            <h6 className=" font-semibold mb-4 flex md:justify-start">
              Office
            </h6>
            <p className="flex items-center md:justify-start mb-4">
              PT.Bimbel Amal
            </p>
            <p className="flex items-center md:justify-start mb-4">
              bimbelAmal@example.com
            </p>
            <p className="flex items-center md:justify-start mb-4">
              + 01 234 567 88
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6">
        <span>© 2021 Copyright:</span>
        <a
          class="text-gray-600 font-semibold"
          href="https://tailwind-elements.com/"
        >
          Tailwind Elements
        </a>
      </div>
    </footer>
  );
};

export default Footer;
