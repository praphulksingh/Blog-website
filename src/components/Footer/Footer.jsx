import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl flex justify-center mx-auto p-4 md:py-8">
        <Link
          at="https://github.com/praphulksingh/Blog-website"
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <Logo />

          <span className=" block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Tech Crunch . All Rights Reserved.
          </span>
        </Link>

        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Tech Crunch . All Rights Reserved.
        </span> */}
      </div>
    </footer>
  );
}

export default Footer