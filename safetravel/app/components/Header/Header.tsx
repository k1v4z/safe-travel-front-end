"use client"
import {  useState } from 'react'
import MiddleSection from './MiddleSection';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Menu from '../Mobile/Menu';
import Button from '../Mobile/MobileButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#D2FBFD] border-b border-dashed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <LeftSection/>
          <MiddleSection/>
          <RightSection/>
  
          {/* Mobile menu button */}
          <Button isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
      </div>

      {/* Mobile Menu */}
      <Menu isOpen={isOpen}/>
      
    </header>
  );
}
