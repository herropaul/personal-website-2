
export default function Home () {
  return (
    <div className="h-screen w-screen md:flex">
      
      {/* mobile menu bar */}
      <div className="bg-gray-500 flex justify-between">
        {/* logo */}
        <a href="#" className="block p-4">
          <h2 className="text-2xl text-gray-100">PN</h2>
        </a>

        {/* mobile menu button */}
        <button className="p-4 focus:outline-none focus:bg-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/*side bar */}
      <div className="bg-blue-300 w-32 space-y-6 px-2 absolute inset-y-0 left-0 transform -translate-x-full 
      transition duration-200 ease-in-out">
        <a href="#" className="flex items-center space-x-2">
          <img src="../paul_logo.jpg"/>
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

      {/* content */}
      <div className="flex-1 p-20 text-2xl font-bold">
        content
      </div>
    </div>
  );
}
