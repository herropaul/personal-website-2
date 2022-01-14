
export default function Home () {
  return (
    <div className="h-screen w-screen flex">
      {/*side bar */}
      <div className="bg-blue-300 w-32 space-y-6">
        <a href="#" className="flex items-center space-x-2">
          <img src="../paul_logo.jpg"/>
        </a>

        {/* nav */}
        <nav>
          <a href="" className="block py-2 5 px-4">Home</a>
          <a href="" className="block py-2 5 px-4">About</a>
          <a href="" className="block py-2 5 px-4">Projects</a>
          <a href="" className="block py-2 5 px-4">Resume</a> 
          <a href="" className="block py-2 5 px-4">Contact</a> 
        </nav>
      </div>

      {/* content */}
      <div className="flex-1 p-20 text-2xl font-bold">
        content
      </div>
    </div>
  );
}
