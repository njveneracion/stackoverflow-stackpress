import '../styles/page.css';
import { ServerPageProps } from 'stackpress/view/client';
import Layout from '../Layout.js';

export function Head(props: ServerPageProps) {
  const { styles = [] } = props;
  return (
    <>
      <title>Stackpress</title>
      <meta name="description" content="Stackpress" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/styles/global.css" />
      {styles.map((href, index) => (
        <link key={index} rel="stylesheet" type="text/css" href={href} />
      ))}
    </>
  )
}

export default function HomePage(props: ServerPageProps) {
  const { session, request, response } = props;

  return (
    <Layout
      session={session}
      request={request}
      response={response}
    >
      <section>
        <div className="px-p-10 app-content " >
        <h1 className="px-4 font-bold text-2xl">Welcome to STACKPRESS {session.name} {session.id === session.id ? "johfiu@example.com" : session.name}</h1>
        <div className="p-4">
         
          <a href='/dashboard'>Go to Dashboard</a>
          <p className="mt-4">This is a simple home page for Stackpress.</p>
        </div>
      </div>
      </section>
    </Layout>
  )
}