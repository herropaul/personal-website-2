
export default function Home () {
  return (
    <div className="h-screen w-screen flex">
      {/*side bar */}
      <div className="bg-blue-300 w-32 space-y-6 px-2">
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
