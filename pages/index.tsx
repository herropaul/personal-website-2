import type { NextPage } from 'next'

export default function Home () {
  return (
    <div className="h-screen w-screen flex">
      {/*side bar */}
      <div className="bg-blue-300 w-32">
        logo

        {/* nav */}
        <nav> nav </nav>
      </div>

      {/* content */}
      <div className="flex-1 p-20 text-2xl font-bold">
        content
      </div>
    </div>
  );
}
