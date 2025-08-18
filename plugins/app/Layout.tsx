//modules
import { useEffect } from 'react';
//views
import type { LayoutPanelProps } from 'stackpress/view/client';
import { 
  unload,
  useTheme,
  useConfig,
  useToggle,
  useSession, 
  LayoutHead,
  LayoutRight,
  LayoutMain,
  LayoutProvider,
  NotifyContainer
} from 'stackpress/view/client';

export function UserMenu() {
  const session = useSession();
  return (
    <section className="flex flex-col px-h-100-0">
    
      <main className="flex-grow bg-t-0">
        {session?.data?.id ? (
          <div className="px-h-100-0">
            {session.data.roles && session.data.roles.includes('ADMIN') && (
              <nav className="theme-bc-bd0 flex items-center px-px-10 px-py-14 border-b" >
                <i className="inline-block px-mr-10 fas fa-gauge" />
                <a className="theme-info" href="/admin/profile/search">Admin</a>
              </nav>
            )}
            
            <nav className="theme-bc-bd0 flex items-center px-px-10 px-py-14 border-b">
              <i className="inline-block px-mr-10 fas fa-power-off" />
              <a className="theme-info" href="/auth/signout">Sign Out</a>
            </nav>
          </div>
        ) : (
          <div className="h-full">
            <nav className="theme-bc-bd0 flex items-center px-px-10 px-py-14 border-b">
              <i className="inline-block px-mr-10 fas fa-lock" />
              <a className="theme-info" href="/auth/signin">Sign In</a>
            </nav>
            <nav className="theme-bc-bd0 flex items-center px-px-10 px-py-14 border-b">
              <i className="inline-block px-mr-10 fas fa-trophy" />
              <a className="theme-info" href="/auth/signup">Sign Up</a>
            </nav>
          </div>
        )}
      </main>
    </section>
  );
}

const style = {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
}

export function LayoutApp({ children }: { children: React.ReactNode }) {
  const [ right, toggleRight ] = useToggle();
  const config = useConfig();
  const { theme, toggle: toggleTheme } = useTheme();
  return (
    <div className={`${theme} relative overflow-hidden px-w-100-0 px-h-100-0 theme-bg-bg0 theme-tx1`}>
      <div style={style} className="layout-head"> 
        <LayoutHead
          base={config.path('brand.base', '/')}
          logo={config.path('brand.logo', 'https://cdn.iconscout.com/icon/free/png-256/free-stackoverflow-286085.png?f=webp&w=512')}
          brand={config.path('brand.name', 'stack overflow')}
          theme={theme}
          toggleRight={toggleRight}
          toggleTheme={toggleTheme}
        />
      </div>
      <LayoutRight head open={right}><UserMenu /></LayoutRight>
      <LayoutMain head right open={{ right }}>{children}</LayoutMain>
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