import {ServerPageProps,} from 'stackpress/view/client'
import Layout from '../../app/Layout.js';

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

export default function create(props: ServerPageProps) {
    const {session, request, response} = props;
    
    return (
        <Layout session={session} request={request} response={response}>
          {session.id}
            <div>
            <h1>Create Posts as {session.roles.includes('ADMIN') ? 'ADMIN' : session.roles.includes('USER') ? 'USER' : 'GUEST'}</h1>
            <form method="POST">
                <label>
                    Title:
                    <input type="text" name="title" required />
                </label>
                <br />
                <label>
                    Content:
                    <textarea name="content" required></textarea>
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
        </div>
        </Layout>
    );
}