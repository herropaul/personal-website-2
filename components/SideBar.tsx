import React from 'react';

const SideBar = () => {
    return(
        <div className="bg-blue-300 w-32 space-y-6 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0
      transition duration-200 ease-in-out">
        <a href="#" className="flex items-center space-x-2 px-4 py-4">
          <h2 className="text-2xl text-gray-100">PN</h2>
        </a>

        {/* nav */}
        <nav>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">Home</a>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">About</a>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">Projects</a>
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">Resume</a> 
          <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-400 hover:text-white">Contact</a> 
        </nav>
      </div>
    );
}

export default SideBar;