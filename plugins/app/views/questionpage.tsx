import Layout from "../Layout.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { ServerProvider, useRequest, ServerPageProps, useServer } from 'stackpress/view/client';

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

type QuestionData = {
  title: string;
  content: string;
  tags?: string[];
  votes?: number;
  userVote?: 1 | -1 | null;
  author?: {
    name: string;
    reputation?: number;
  };
  createdAt?: string;
  views?: number;
  answerCount?: number;
};

export default function QuestionPage(props: ServerPageProps) {
  const { session, request, response } = props;  
  const [question, setQuestion] = useState<QuestionData | null>(null);
  const [loadingVote, setLoadingVote] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathParts = window.location.pathname.split('/');
      const id = pathParts[pathParts.length - 1];
      if (!id) return;
      async function getQuestionByID() {
        const response = await axios.get(`http://localhost:3000/api/question/${id}`);
        setQuestion(response.data.results.results)
        console.log("Fetched question data:", response.data);
      }
      getQuestionByID();
    }
  }, []);

  async function handleVote(vote: 1 | -1) {
    if (!question || loadingVote) return;
    
    // If clicking the same vote, remove it (toggle off)
    const newVote = question.userVote === vote ? null : vote;
    
    setLoadingVote(true);
    try {
      const id = window.location.pathname.split('/').pop();
      const response = await axios.post(`http://localhost:3000/api/question/${id}/vote`, { 
        vote: newVote 
      });
      setQuestion({
        ...question,
        votes: response.data.votes,
        userVote: newVote,
      });
    } catch (err) {
      console.error("Vote error:", err);
    }
    setLoadingVote(false);
  }

  function formatDate(dateString?: string) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  return (
   <ServerProvider session={session} request={request} response={response}>
     <Layout session={session} request={request} response={response}>
       <div className="max-w-5xl mx-auto mt-6 px-4">
         {question ? (
           <>
             {/* Question Header */}
             <div className="border-b pb-4 mb-4">
               <h1 className="text-3xl font-normal text-gray-800 mb-3">{question.title}</h1>
               <div className="flex items-center text-sm text-gray-600 space-x-4">
                 <span>Asked <span className="text-gray-700">{formatDate(question.createdAt)}</span></span>
                 <span>Viewed <span className="text-gray-700">{question.views || 0} times</span></span>
               </div>
             </div>

             {/* Question Body */}
             <div className="flex">
               {/* Voting Section */}
               <div className="flex flex-col items-center mr-6">
                 <button
                   className={`p-2 rounded transition-colors ${
                     question.userVote === 1 
                       ? 'text-orange-500' 
                       : 'text-gray-400 hover:text-orange-400'
                   } ${loadingVote ? 'opacity-50 cursor-not-allowed' : ''}`}
                   disabled={loadingVote}
                   onClick={() => handleVote(1)}
                   aria-label="Upvote"
                 >
                   <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor">
                     <path d="M2 25h32L18 9 2 25Z"/>
                   </svg>
                 </button>
                 
                 <span className="text-2xl font-normal text-gray-700 my-2">
                   {question.votes ?? 0}
                 </span>
                 
                 <button
                   className={`p-2 rounded transition-colors ${
                     question.userVote === -1 
                       ? 'text-orange-500' 
                       : 'text-gray-400 hover:text-orange-400'
                   } ${loadingVote ? 'opacity-50 cursor-not-allowed' : ''}`}
                   disabled={loadingVote}
                   onClick={() => handleVote(-1)}
                   aria-label="Downvote"
                 >
                   <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor">
                     <path d="M2 11h32L18 27 2 11Z"/>
                   </svg>
                 </button>

                 {/* Bookmark/Star Icon */}
                 <button
                   className="mt-4 p-2 text-gray-400 hover:text-yellow-500 transition-colors"
                   aria-label="Bookmark"
                 >
                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
                     <polygon points="9 2 11.5 7 17 7.5 13 11.5 14 17 9 14.5 4 17 5 11.5 1 7.5 6.5 7 9 2"/>
                   </svg>
                 </button>
               </div>

               {/* Question Content */}
               <div className="flex-1">
                 <div className="prose prose-sm max-w-none text-gray-800 mb-6">
                   <div dangerouslySetInnerHTML={{ __html: question.content }} />
                 </div>

                 {/* Tags */}
                 {question.tags && question.tags.length > 0 && (
                   <div className="mb-6">
                     {question.tags.map((tag: string) => (
                       <a
                         key={tag}
                         href={`/questions/tagged/${tag}`}
                         className="inline-block bg-blue-50 text-blue-700 hover:bg-blue-100 px-2 py-1 rounded text-xs mr-2 mb-2 transition-colors"
                       >
                         {tag}
                       </a>
                     ))}
                   </div>
                 )}

                 {/* Question Meta */}
                 <div className="flex justify-between items-start mt-8">
                   <div className="flex space-x-2 text-sm">
                     <button className="text-gray-500 hover:text-gray-700">Share</button>
                     <button className="text-gray-500 hover:text-gray-700">Edit</button>
                     <button className="text-gray-500 hover:text-gray-700">Follow</button>
                   </div>
                   
                   {/* Author Info */}
                   <div className="bg-blue-50 rounded p-3 text-sm">
                     <div className="text-gray-600 text-xs mb-1">
                       asked {formatDate(question.createdAt)}
                     </div>
                     <div className="flex items-center">
                       <div className="w-8 h-8 bg-gray-300 rounded mr-2"></div>
                       <div>
                         <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                           {question.author?.name || 'Anonymous'}
                         </a>
                         {question.author?.reputation && (
                           <div className="text-xs text-gray-600">
                             {question.author.reputation.toLocaleString()} reputation
                           </div>
                         )}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Answers Section Placeholder */}
             <div className="mt-8 pt-8 border-t">
               <h2 className="text-xl font-normal mb-4">
                 {question.answerCount || 0} Answer{question.answerCount !== 1 ? 's' : ''}
               </h2>
               {/* Answer components would go here */}
               <div className="text-gray-500 text-center py-8">
                 No answers yet. Be the first to answer!
               </div>
             </div>

             {/* Answer Form Placeholder */}
             <div className="mt-8 pt-8 border-t">
               <h3 className="text-lg font-normal mb-4">Your Answer</h3>
               <textarea
                 className="w-full min-h-[200px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                 placeholder="Write your answer here..."
               />
               <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                 Post Your Answer
               </button>
             </div>
           </>
         ) : (
           <div className="flex justify-center items-center h-64">
             <div className="text-gray-500">Loading question...</div>
           </div>
         )}
       </div>
     </Layout>
   </ServerProvider>
  );
}