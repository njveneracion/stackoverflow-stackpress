import { ServerPageProps } from "stackpress";
import Layout from "../Layout.js";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";


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
const [content, setContent] = useState('');
  return (
   <Layout  
    session={session}
    request={request}
    response={response}
    >
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow rounded p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Ask a public question</h1>
        <form method="POST">
          <div className="mb-6">
            <label htmlFor="title" className="block font-semibold mb-2 text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="e.g. How do I center a div in CSS?"
            />
            <p className="text-xs text-gray-500 mt-1">
              Be specific and imagine you’re asking a question to another person.
            </p>
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block font-semibold mb-2 text-gray-700">
              What are the details of your problem?
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={8}
              onChange={e => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="You can use Markdown for formatting and code blocks. Example:\n\n```\nconsole.log('Hello world');\n```"
            ></textarea>
            <p className="text-xs text-gray-500 mt-1">
              Include details, code, and what you’ve tried. You can format code using triple backticks.
            </p>
            <div className="mt-4">
              <div className="font-semibold mb-2 text-gray-700">Preview:</div>
              <div className="border rounded p-3 bg-gray-50 overflow-y-auto">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {content}
                </ReactMarkdown>
              </div>
            </div>  

            <label htmlFor="tags" className="block font-semibold mb-2 text-gray-700 mt-1">Tags</label>
            <input type="text" id="tags" name="tags" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. CSS, JavaScript" />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded shadow"
          >
            Post your question
          </button>
        </form>
      </div>
   </Layout>
  )
}           

