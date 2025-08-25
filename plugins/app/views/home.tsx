import '../styles/page.css';
import { ServerPageProps } from 'stackpress/view/client';
import Layout from '../Layout.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const [activeTab, setActiveTab] = useState<'Newest' | 'Active' | 'Unanswered'>('Newest');
  const [allData, setAllData] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState<{ name: string } | null>(null);
  const sessionRoles = {
    isUser: session.roles.includes('USER'),
    isAdmin: session.roles.includes('ADMIN'),
    isGuest: session.roles.includes('GUEST'),
  }

  const tabList = [
    { label: 'Newest', value: 'Newest' },
    { label: 'Active', value: 'Active' },
    { label: 'Unanswered', value: 'Unanswered' }
  ];

  async function getAllPosts() {
    try {
      const response = await axios.get('http://localhost:3000/api/home');
      const posts = response.data.results.results || [];
      setAllData(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  async function getUserInfo() {
    try {
      const response = await axios.get('http://localhost:3000/api/userinfo');
      const info = response.data.results.results;
      setUserInfo(info);
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  }

  useEffect(() => {
    (async () => {
      await getAllPosts();
      await getUserInfo();
    })();
  }, []);

  return (
    <Layout session={session} request={request} response={response}>
      <section className="container mx-auto px-4 py-6">
        {/* Header row */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Questions</h1>
          {session.roles.includes('USER') ? (
            <a href="/question/ask">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
                Ask Question 
              </button>
            </a>
          ) : (
            <a href="/auth/signin">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
                Ask Question 
              </button>
            </a>
          )}
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b mb-6">
          {tabList.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`pb-2 px-3 text-sm font-medium ${
                activeTab === tab.value
                  ? 'border-b-2 border-orange-500 text-orange-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left column: questions */}
          <div className="col-span-9">
            <div className="text-gray-600 text-sm mb-4">{allData.length} questions</div>
            
            {activeTab === 'Newest' && (
              <div>
                {allData.map(q => (
                  <div key={q.id} className="flex border-b py-4">
                    {/* Counters */}
                    <div className="w-28 flex-shrink-0 text-center text-sm text-gray-600">
                      <div className="mb-2">
                        {/* Only logged-in users can vote */}
                        <span className=" text-md">0</span> votes
                      </div>
                      <div className="mb-2">
                        <span className=" text-md">0</span> answers
                      </div>
                      <div>
                        <span className=" text-md">0</span> views
                      </div>
                    </div>
                    {/* Question content */}
                    <div className="flex-1">
                      <a
                        href={`/question/${q.id}`}
                        className="text-lg font-medium text-blue-700 hover:underline"
                      >
                        {q.title}
                      </a>
                      <p className="text-gray-600 text-sm mt-1">{q.summary}</p>
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <div className="space-x-2">
                          {q.tags?.map((tag: string, i: number) => (
                            <span
                              key={i}
                              className="bg-gray-200 px-2 py-0.5 rounded text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div>asked just now by <span className="text-blue-600">User</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}


            {activeTab === 'Active' && (
              <div className="text-gray-500">Active Tab Content</div>
            )}

            {activeTab === 'Unanswered' && (
              <div className="text-gray-500">Unanswered Tab Content</div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
