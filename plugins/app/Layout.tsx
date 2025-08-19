//modules
import { useEffect } from 'react';
import SideNav from './components/SideNav.js';
import Header from './components/Header.js';

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
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div className="pt-14">
        {/* Centered container that holds both sidebar and content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex ">
            <SideNav/>
            {/* Main content area */}
            <LayoutMain>
              <div className="px-110 mx-3 mt-20">
                {children}
              </div>
            </LayoutMain>
          </div>
        </div>
      </div>
    </div>
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