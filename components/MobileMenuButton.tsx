import React, {useState} from 'react';

const MobileMenuButton = () => {

  const [toggle, setToggle] = useState(true);

  const showToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  }

    return (
        <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>  
    );
}

export default MobileMenuButton;