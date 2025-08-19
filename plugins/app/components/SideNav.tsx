import { useSession } from "stackpress/view/client";

export default function SideNav() {
  const session = useSession();
  
  return (
    <nav className=" w-100 pl-50  bg-white border-r border-gray-300 overflow-y-auto z-30 h-100vh">
      <div className="py-6">
        {/* Home */}
        <div className="px-2 mb-6">
          <a 
            href="/" 
            className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 rounded transition-colors"
          >
            <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            Home
          </a>
        </div>

        {/* Public */}
        <div className="px-2 mb-6">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 px-3">
            PUBLIC
          </div>
          
          <div className="space-y-0">
            <a 
              href="/question" 
              className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 border-r-4 border-transparent hover:border-orange-400 transition-all"
            >
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
              </svg>
              Questions
            </a>
            
            <a 
              href="/tags" 
              className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 border-r-4 border-transparent hover:border-orange-400 transition-all ml-4"
            >
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
              </svg>
              Tags
            </a>
            
            <a 
              href="/users" 
              className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 border-r-4 border-transparent hover:border-orange-400 transition-all ml-4"
            >
              <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              Users
            </a>
          </div>
        </div>

        {/* Personal Section - Only show if logged in */}
        {session?.data?.id && (
          <div className="px-2 mb-6">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 px-3">
              PERSONAL
            </div>
            
            <div className="space-y-0">
              <a 
                href="/dashboard" 
                className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 border-r-4 border-transparent hover:border-orange-400 transition-all"
              >
                <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                Dashboard
              </a>
              
              <a 
                href="/my-questions" 
                className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 border-r-4 border-transparent hover:border-orange-400 transition-all"
              >
                <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
                Your questions
              </a>
              
              <a 
                href="/saved" 
                className="flex items-center px-3 py-2 text-sm text-gray-800 hover:bg-orange-50 border-r-4 border-transparent hover:border-orange-400 transition-all"
              >
                <svg className="w-4 h-4 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                </svg>
                Saves
              </a>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo dolorem nisi modi saepe iure, quae quod ipsum aliquam optio autem culpa rem dignissimos delectus odit excepturi praesentium, est neque voluptas? Repellat nesciunt ullam reprehenderit eius. Porro, quibusdam? Ipsum, dolores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde, quidem autem ipsa beatae quo repellat explicabo ex et qui soluta officiis voluptates delectus ea itaque corporis. Earum suscipit modi in itaque beatae commodi placeat non debitis sint laboriosam? Repudiandae quos voluptate suscipit unde sit nisi placeat similique. Quia, laudantium.
                
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}