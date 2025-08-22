import {ServerPageProps} from "stackpress/view/client";
import Layout from "../../Layout.js";

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


export default function QuestionPage(props: ServerPageProps) {

  const { session, request, response } = props;

  return (
    <Layout session={session} request={request} response={response}>
        <div>
            <h1>Question Page </h1>
            <p>Welcome {session.roles.includes("ADMIN") ? "Admin" : "User"} </p>
            <a href="/create" className="btn btn-primary">
                Create Question
            </a>

            <div>
              <p>{session.results}</p>
            </div>
        </div>
    </Layout>
  )
}
