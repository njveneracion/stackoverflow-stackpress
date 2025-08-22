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
  const {  session, request, response } = props;

  const [allData, setAllData] = useState<any[]>([]);

  async function getAllPosts(){
   try {
      const response = await axios.get('http://localhost:3000/api/home');
      console.log("API Response:", response.data);
      const posts = response.data.results.results || [];
      setAllData(posts);
   } catch (error) {
      console.error('Error fetching posts:', error);
   }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Layout
      session={session}
      request={request}
      response={response}
    >
      <section>
        <div className="px-p-10" >
          <h1 className="px-4 font-bold text-2xl">
            Welcome to Stackpress {session.name}{" "}
            {session.roles.includes('ADMIN')
              ? "ADMIN"
              : session.roles.includes('USER')
              ? "USER"
              : "GUEST"}
          </h1>

          <div className="p-4">
            <a href='/dashboard' className='text-blue-500 hover:text-blue-400'>Go to Dashboard</a>
          </div>

         {session.name ? (
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Your Posts
                </h2>

                {allData.length > 0 ? (
                  <div className="space-y-4">
                    {allData.map((post) => (
                      <div 
                        key={post.id} 
                        className="p-4 border rounded-md bg-white hover:shadow-sm transition"
                      >
                        <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {post.content?.slice(0, 120)}...
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500 mt-3">
                          <span>Post ID: {post.id}</span>
                          <span>Author: {post.profileId}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 border rounded-md bg-gray-50 text-center">
                    <p className="text-gray-600 mb-2">You haven’t created any posts yet.</p>
                    <a 
                      href="/create-post" 
                      className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-500 transition"
                    >
                      Create your first post
                    </a>
                  </div>
                )}
            </div>
          ) : (
            <p className="text-red-500 mt-4">
              You do not have permission to view this content.
            </p>
          )}

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et culpa cupiditate, sit itaque, placeat possimus cumque, voluptatem obcaecati quam vitae quos laborum distinctio velit! Tempore sapiente quam alias! Natus, ipsam quaerat? Ipsam vel delectus eligendi laudantium quae adipisci illo officiis et, dicta, facilis obcaecati architecto. Odio facere atque maxime pariatur nobis laboriosam soluta facilis ratione eligendi expedita ab vero, et, itaque est eius commodi pariatur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos adipisci ullam neque unde commodi itaque recusandae voluptatibus odio. Magni cupiditate inventore facere consequatur sit enim rem dolorem temporibus distinctio? Unde nam hic, illo aliquam dolorum velit alias sequi quibusdam cumque numquam pariatur blanditiis aspernatur? Dignissimos reprehenderit veniam iusto quis, voluptates tempore quidem quod molestias consequatur est laudantium, ab repellat enim praesentium necessitatibus ut ullam voluptatum dolorum facilis, iure saepe animi. Quis, dolor dolorum mollitia modi atque hic, sunt delectus repellat minus voluptatem tempore iusto quaerat temporibus maxime ducimus blanditiis quo culpa fugit laboriosam earum vel non adipisci ut nisi. Beatae aspernatur quas sequi? Maxime alias aperiam blanditiis sed incidunt soluta corporis odit dolorem in quisquam, deserunt, repellat dolorum quos ad ullam quo animi quasi illo tempora. Ratione minima tempore obcaecati reiciendis magnam tenetur officia placeat, officiis molestias? Tempora sapiente voluptate suscipit, perspiciatis nihil inventore repellendus sint veniam facilis iusto officiis vitae ab consequuntur sed veritatis facere tempore magnam eligendi deserunt reprehenderit labore quos quo? Iure cum quibusdam beatae sapiente eos animi quia labore hic, voluptatum culpa unde neque aliquid consequatur ex perspiciatis aut non eum. Possimus quod sint sed, debitis fugiat, quae aspernatur ducimus placeat impedit provident facere cum aliquid eius perferendis labore quidem! Debitis velit non iste iure qui atque dolorem dolore ducimus quaerat rem nesciunt recusandae a porro, omnis autem distinctio eum cum odit? Autem maxime quasi minima in voluptatum vitae, quis, accusantium perferendis mollitia enim soluta, eaque reprehenderit. Debitis saepe aperiam ipsam. Facilis aliquam minus repudiandae doloremque vel, obcaecati cupiditate, debitis commodi laudantium provident dicta error eos. Aliquid officiis deleniti voluptas dolorem, doloremque, distinctio ad impedit velit dignissimos, sapiente ipsa! Non consectetur reprehenderit sequi odit id debitis similique facilis fugit possimus sunt, alias est delectus vero nisi, distinctio tenetur recusandae magni tempore labore ipsa officiis quaerat rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus cumque libero repellat odit voluptatem omnis velit at maxime autem natus adipisci, reprehenderit ratione commodi ullam debitis id, dignissimos architecto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum animi dolore nemo, tempora maiores exercitationem ex laboriosam dignissimos debitis velit soluta vitae accusamus ea veritatis fuga provident porro! Alias nemo atque in totam unde, facilis illum dignissimos ab nesciunt blanditiis beatae ducimus ex possimus fuga assumenda iure. Sapiente autem ipsam eligendi harum deserunt soluta, odit repellat mollitia consequatur veniam non reiciendis dicta iure, vitae hic reprehenderit quas quasi praesentium quia voluptates. Possimus sequi magni aspernatur, impedit voluptatibus veritatis ipsum in enim asperiores molestias laudantium magnam, hic provident libero fugiat deserunt odio? Ea similique natus eos, nesciunt incidunt ipsa quibusdam, facilis dolores beatae laudantium dolor veritatis. Atque ullam quam necessitatibus fuga exercitationem corrupti non veritatis. Nesciunt, repellendus suscipit sequi iure excepturi, itaque deleniti, nisi ullam obcaecati corrupti sapiente eius et. Ratione, optio beatae inventore vel eligendi molestiae doloremque. Veritatis natus veniam id explicabo possimus error officiis ea? Dolore eligendi natus itaque ab blanditiis quasi aspernatur! Quae porro molestias eaque qui vero cupiditate quisquam. Minima eos repellendus quaerat recusandae ab autem harum ipsa aliquid obcaecati quis sed nobis aliquam quas pariatur dolorum consequuntur error aut voluptas, laboriosam inventore laborum. Nostrum sunt dicta molestiae, debitis libero aliquid quae facere consequuntur a aut sed, asperiores perspiciatis eveniet recusandae doloribus! Id dolore reprehenderit illo placeat atque obcaecati omnis aliquid cumque? Aliquid quae modi, exercitationem rem nostrum fugit, incidunt sint illum quam tempora commodi ad. Eaque architecto cum ipsum iure temporibus, quas totam odio, distinctio illo aperiam explicabo voluptate debitis sequi corrupti consequatur non aliquam commodi dolorum eum magni quaerat saepe illum quo molestiae! Veritatis culpa deleniti quo repellendus minima debitis voluptas amet labore id eligendi enim dolorem, soluta officia vero, nulla numquam facere velit iusto ex quod molestiae illo? Eos delectus amet dolor nisi nulla deserunt veniam sapiente quibusdam quidem quaerat neque natus aperiam ex facere laborum voluptates, inventore, esse corporis eveniet at perferendis dolores accusantium voluptatum. Veritatis, repellat reiciendis, non at omnis recusandae cum saepe tempora totam nobis nesciunt tempore in nemo sint ipsum sunt optio voluptates. Ipsa in vitae magnam mollitia praesentium voluptatum adipisci neque ab sed illo dolores similique enim unde, cum deleniti. Officia vitae veritatis nostrum. Corrupti laborum, maiores excepturi accusamus, tempore nostrum cupiditate voluptatibus reiciendis, odio similique eius. Excepturi quaerat veniam magni laboriosam, et dolore eos repudiandae praesentium fugit saepe adipisci nisi nulla necessitatibus debitis illo incidunt, voluptatum vero ex sunt tempore, quas nobis voluptatem soluta. Provident, sint. Dolorem, rem.</p>
        </div>  
      </section>
    </Layout>
  )
}
