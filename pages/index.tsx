import SideBar from '../components/Sidebar/SideBar';
import MobileMenuButton from '../components/MobileMenuButton';
import HeroPage from '../components/HeroPage';
import {BrowserRouter as Router} from 'react-router-dom';
import React, { useState } from 'react';
import SideProject from '../components/SideProject/SideProject';
import Resume from '../components/Resume/Resume';

export default function Home () {
  const isBrowser = typeof window !== "undefined";

  return isBrowser ? (
    <Router>
      <div className="h-screen w-screen md:flex">

        {/*side bar */}
        <SideBar></SideBar>

        {/* content */}
        <div className="flex-1 p-20 text-2xl font-bold">
          <HeroPage></HeroPage>
          <SideProject></SideProject>
          <Resume></Resume>
        </div>
      </div>
    </Router>
  ) : null;
}
