import {useConfig, useSession} from "stackpress/view/client";

export default function Header() {
    const session = useSession();
    const config = useConfig();
    
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-300 shadow-sm">
      {/* Centered container like Stack Overflow */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center">
              <img 
                src={config.path('brand.logo', 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png')} 
                alt={config.path('brand.name', 'Stack Overflow')}
                className="w-15 h-15"
              />
              <span className="font-medium text-xl text-gray-800">
                stack<span className="font-bold">overflow</span>
              </span>
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6 hidden sm:block">
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-3">
            {!session?.data?.id ? (
              <>
                <a 
                  href="/auth/signin" 
                  className="px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition-colors border border-blue-300"
                >
                  Log in
                </a>
                <a 
                  href="/auth/signup" 
                  className="px-3 py-2 text-sm bg-blue-500 text-white hover:bg-blue-600 rounded transition-colors"
                >
                  Sign up
                </a>
              </>
            ) : (
              <div className="flex items-center gap-3">
                {/* User Avatar/Name */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-sm font-semibold">
                    {(session.data.name || 'U').charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-800 hidden sm:block">
                    {session.data.name || 'User'}
                  </span>
                </div>

                {/* Admin Link */}
                {session.data.roles && session.data.roles.includes('ADMIN') && (
                  <a 
                    href="/admin/profile/search" 
                    className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium hover:bg-orange-200 transition-colors"
                  >
                    Admin
                  </a>
                )}

                {/* User Menu Dropdown */}
                <div className="relative group">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                        Profile
                      </a>
                      <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                        </svg>
                        Settings
                      </a>
                      <hr className="my-1 border-gray-200" />
                      <a href="/auth/signout" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"/>
                        </svg>
                        Log out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}