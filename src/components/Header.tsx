import React from 'react';
import { Menu, Users, Info } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Menu className="h-6 w-6" />
          <span className="text-xl font-bold">Stick Frames</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#about" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
            <Info className="h-5 w-5" />
            <span>About</span>
          </a>
          <a href="#team" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
            <Users className="h-5 w-5" />
            <span>Team</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;