import SideBar from '../components/Sidebar/SideBar';
import MobileMenuButton from '../components/MobileMenuButton';
import HeroPage from '../components/HeroPage';
import {BrowserRouter as Router} from 'react-router-dom';
import React, { useState } from 'react';
import SideProject from '../components/SideProject/SideProject';

export default function Home () {
  const isBrowser = typeof window !== "undefined";

  return isBrowser ? (
    <Router>
      <div className="h-screen w-screen md:flex">
        
        {/* mobile menu bar */}
        <div className="bg-gray-500 flex justify-between md:hidden">
          {/* logo */}
          <a href="#" className="block p-4">
            <h2 className="text-2xl text-gray-100">PN</h2>
          </a>

          {/* mobile menu button */}
          <MobileMenuButton></MobileMenuButton>
        </div>

        {/*side bar */}
        <SideBar></SideBar>

        {/* content */}
        <div className="flex-1 p-20 text-2xl font-bold">
          <HeroPage></HeroPage>
          <SideProject></SideProject>
        </div>
      </div>
    </Router>
  ) : null;
}
