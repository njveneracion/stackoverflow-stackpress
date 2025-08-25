//modules
import { useEffect } from 'react';
import SideNav from './components/SideNav.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

//views
import type { LayoutPanelProps } from 'stackpress/view/client';
import { 
  unload,
  LayoutMain,
  LayoutProvider,
  NotifyContainer,
  useRequest
} from 'stackpress/view/client';
import RightSideBar from './components/RightSideBar.js';

export function LayoutApp({ children }: { children: React.ReactNode }) {
  return (
   <>
   <Header />
    <LayoutMain>
      {/* Container with max width and centered */}
      <div className='max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-6'>
        <div className='flex flex-col lg:flex-row bg-white min-h-screen pt-4 lg:pt-10'>
          {/* Side Navigation - Hidden on mobile, handled by SideNav component */}
          <div className='hidden lg:flex flex-shrink-0 border-r border-gray-300 lg:w-64 sticky top-10 h-screen overflow-y-auto'>
            <SideNav/>
          </div>
          
          {/* Main Content */}
          <main className='flex-1 min-h-0 w-full'>
            <div className='lg:h-full lg:overflow-y-auto'>
              <div className='p-2 sm:p-4 lg:p-6'>
                {children}
              </div>
            </div>
          </main>
          
          {/* Right Sidebar - Hidden on mobile */}
          <div className='hidden lg:block'>
            <RightSideBar/>
          </div>
        </div>
      </div>
      
      {/* Mobile SideNav - Rendered separately for mobile overlay */}
      <div className='lg:hidden'>
        <SideNav/>
      </div>
      
      <Footer/>
    </LayoutMain>
   </>
  );
}

// ...existing code...
export default function LayoutPanel(props: LayoutPanelProps) {
  const { 
    data,
    session,
    request,
    response,
    children 
  } = props;
  //unload flash message
  useEffect(unload, []);
  return (
    <LayoutProvider 
      data={data}
      session={session}
      request={request}
      response={response}
    >
      <LayoutApp>{children}</LayoutApp>
      <NotifyContainer />
    </LayoutProvider>
  );
}