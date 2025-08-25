import { useSession } from "stackpress/view/client";
import { useState } from "react";

export default function SideNav() {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <button 
        className="lg:hidden fixed top-16 left-4 z-40 p-2 bg-white border border-gray-300 rounded shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SideNav */}
      <nav className={`
        lg:relative lg:w-full lg:border-none lg:transform-none lg:shadow-none
        fixed left-0 top-0  bg-white border-r border-gray-500 
        p-5 h-full z-35 overflow-y-auto shadow-lg
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="py-4  mt-14 lg:mt-0">
          {/* Home */}
          <div className="mb-4">
            <a 
              href="/" 
              className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-sm transition-colors duration-150 font-medium "
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
              Home
            </a>
          </div>

          {/* Public */}
          <div className="mb-6">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2">
              PUBLIC
            </div>
            
            <div className="space-y-0">
              <a 
                href="/questions" 
                className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-orange-50 hover:border-r-2 hover:border-orange-400 transition-all duration-150 rounded-sm relative"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M9 1C4.03 1 0 5.03 0 10s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM8 13h2v2H8v-2zm0-8h2v6H8V5z"/>
                </svg>
                Questions
              </a>
              
              <a 
                href="/tags" 
                className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-orange-50 hover:border-r-2 hover:border-orange-400 transition-all duration-150 rounded-sm pl-8 relative"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M16.5 1h-6c-.28 0-.53.11-.71.29L1.29 9.79c-.39.39-.39 1.02 0 1.41L6.5 16.41c.39.39 1.02.39 1.41 0l8.5-8.5c.18-.18.29-.43.29-.71v-6c0-.55-.45-1-1-1zM14 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                </svg>
                Tags
              </a>
              
              <a 
                href="/users" 
                className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-orange-50 hover:border-r-2 hover:border-orange-400 transition-all duration-150 rounded-sm pl-8 relative"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M9 9c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"/>
                </svg>
                Users
              </a>
            </div>
          </div>

          {/* Personal Section - Only show if logged in */}
          {session?.data?.id && (
            <div className="mb-6">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2">
                PERSONAL
              </div>
              
              <div className="space-y-0">
                <a 
                  href="/dashboard" 
                  className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-orange-50 hover:border-r-2 hover:border-orange-400 transition-all duration-150 rounded-sm relative"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-4 h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M2 4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V4zm0 6c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-6zm9-1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-2z"/>
                  </svg>
                  Dashboard
                </a>
                
                <a 
                  href="/my-questions" 
                  className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-orange-50 hover:border-r-2 hover:border-orange-400 transition-all duration-150 rounded-sm relative"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-4 h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M9 1C4.03 1 0 5.03 0 10s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM8 13h2v2H8v-2zm0-8h2v6H8V5z"/>
                  </svg>
                  Your questions
                </a>
                
                <a 
                  href="/saved" 
                  className="flex items-center px-2 py-1.5 text-sm text-gray-700 hover:bg-orange-50 hover:border-r-2 hover:border-orange-400 transition-all duration-150 rounded-sm relative"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-4 h-4 mr-3 text-gray-600" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M4 3c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12l-5-3-5 3V3z"/>
                  </svg>
                  Saves
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}