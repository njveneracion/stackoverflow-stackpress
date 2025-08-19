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
} from 'stackpress/view/client';

export function LayoutApp({ children }: { children: React.ReactNode }) {
  return (
   <>
   <Header />
   <div className='flex justify-evenly'>
    
    {/* Main content area */}
    <LayoutMain>
      <div className='flex'>
          <SideNav/>
          <main className='pl-7 pt-20 max-w-7xl'><div className='max-w-4xl overflow-y-auto h-100vh'>{children}</div></main>
      </div>
      <Footer/>
    </LayoutMain>
   </div>

   </>
  );
}

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