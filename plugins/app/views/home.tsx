import '../styles/page.css';
import { ServerPageProps } from 'stackpress/view/client';
import Layout from '../Layout.js';
import Footer from '../components/Footer.js';

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
        <div className="px-p-10" >
        <h1 className="px-4 font-bold text-2xl">Welcome to Stackpress {session.name} {session.roles.includes('ADMIN') ? "ADMIN" : session.roles.includes('USER') ? "USER" : "GUEST"}</h1>
        <div className="p-4">
          <a href='/dashboard' className='text-blue-500 hover:text-blue-400'>Go to Dashboard</a>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, sapiente quas? Eligendi expedita delectus porro voluptas enim sapiente accusantium nulla ipsum iusto non quos vitae consectetur, iure sint at velit sed magni aliquid. Cumque, incidunt labore. Officiis fugiat quidem earum vel, accusantium assumenda, blanditiis dolorum pariatur quaerat eveniet sapiente deleniti voluptatum architecto delectus tempora quisquam explicabo deserunt quibusdam, magni corporis aut laudantium? Neque ex quod modi, soluta odio minima quasi obcaecati sit veniam voluptatibus incidunt nisi, nobis aliquid eius. Quae earum sint tempora. Blanditiis tenetur libero a voluptatum, pariatur facere expedita non animi impedit! Quia nihil eos ducimus earum nam nemo distinctio libero, aliquam ipsam illo non vitae, quis maiores doloremque quidem repellat veniam velit quo cupiditate explicabo! Explicabo ad iusto harum accusantium delectus pariatur fugiat nemo quas, dolor modi quisquam fugit. Porro voluptatum recusandae accusantium sit, atque inventore ipsum, vel, odio libero ex quaerat magnam non. Repellendus nemo laboriosam error at velit repudiandae dolore veniam illum. Tempore corporis cupiditate, veniam harum provident officia neque earum ab quae eveniet sint recusandae quisquam asperiores distinctio temporibus libero magnam! Magni debitis hic amet, excepturi dignissimos fuga. Sunt nemo maiores ad, culpa, dolorem laborum harum id quasi cupiditate, a incidunt? Ipsa nulla dignissimos placeat fugit veniam nihil suscipit voluptate error quisquam quo aliquid nam repudiandae odio, libero consequatur asperiores obcaecati officia corporis aut quis rerum in ipsum! Eveniet facere iusto, nobis nisi asperiores magnam, iste hic totam atque deserunt numquam minus nihil aliquid voluptatem vero ea temporibus quibusdam aperiam saepe sint porro animi fuga? Doloremque laboriosam soluta, saepe praesentium vel alias eligendi minima. Asperiores, consectetur! Quod sunt minima nihil totam facilis mollitia earum, laboriosam expedita, beatae quibusdam velit in quasi eum adipisci saepe a eius labore dolorum quisquam magni dolorem officia minus non! Maxime explicabo provident facilis. Dolore explicabo quia ipsa fugit odio, perferendis expedita neque accusantium illo officia, quibusdam, aspernatur vero magnam aliquid eligendi ab. Quisquam maxime velit veritatis deserunt ea, sit quibusdam? Nisi temporibus id repellat perferendis esse ullam dolores a eum. Sapiente dolorum vero, natus, id ea quis iure, non nesciunt officiis reprehenderit corporis blanditiis ipsum ut temporibus ab. Eum impedit sunt, voluptatem odit tenetur veritatis enim ab necessitatibus ullam, fugiat distinctio deserunt maiores quod aspernatur blanditiis amet tempore totam. Voluptatem, accusantium nemo! Quam blanditiis perspiciatis officia quasi, necessitatibus at ipsam a temporibus et, quas esse saepe nulla voluptatum amet molestiae atque porro illo, aspernatur ab error harum? Quis, a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatibus sapiente incidunt voluptatum distinctio hic, possimus animi fugit quasi sed aperiam temporibus, vero perferendis deserunt accusantium commodi quo laboriosam eos! Commodi dolores sunt nobis delectus est quas temporibus illum ex, minima facilis, veniam, nisi molestiae molestias dolorum neque nesciunt deleniti cum consectetur eum et in! Quae neque dolorem cumque incidunt harum eveniet perferendis vel sint molestias aliquam laudantium, non quod voluptates maxime, asperiores nam sunt facere in quam sit vero nulla deserunt omnis velit. Possimus aut, quia dolor alias optio rem fugit tempore, eligendi ea voluptatum sint eum magni repellat dolorum nemo numquam, veritatis dolore officia unde nesciunt. Incidunt quod delectus dolor animi blanditiis beatae ratione quisquam modi quae deleniti dignissimos, dolorum mollitia vel officia, aliquam ipsum qui perferendis cum? Culpa a eum rem quia commodi eos illo, magni unde iure tenetur perferendis necessitatibus, temporibus id odit molestias itaque. Molestias autem non cumque recusandae vel labore dolorem soluta. Rerum voluptas doloribus ipsum alias dolores error provident non eum itaque eaque amet enim, sequi harum nostrum praesentium. Commodi veritatis reprehenderit excepturi earum, impedit magnam nulla eum at quo provident atque quae molestiae ab mollitia sequi amet eos exercitationem. Mollitia nulla deleniti voluptatibus neque facilis? Veritatis laudantium iste obcaecati pariatur quo impedit perferendis ipsa, mollitia quasi, rem accusamus minus. Provident, eius dolores. Fuga nemo odit culpa, quasi accusantium aspernatur iure blanditiis voluptatem rerum magnam cupiditate sed animi pariatur, voluptates id harum nobis quia adipisci dolorum. Maiores culpa nobis vitae placeat inventore nulla corporis atque. Similique, harum. Fuga nemo facere sapiente consequuntur temporibus saepe, a labore veritatis nam unde officiis, minus odio eligendi excepturi. Error consectetur quaerat illo ipsum inventore laborum, assumenda quos beatae odit libero vero. Maiores necessitatibus repudiandae voluptatibus sunt rem ullam obcaecati, temporibus quae omnis quaerat consequatur aliquam dolorum eius alias molestias doloribus iusto et non hic esse aut, expedita tempora officiis. Animi quisquam veritatis maiores earum officia iste modi? Totam placeat, aspernatur architecto consequatur sed deserunt iste molestiae tempora asperiores, possimus porro. Officia possimus fugit sapiente nemo, ducimus facere voluptates nihil aliquid molestias similique magnam expedita ipsam non, eaque, deserunt repellendus ratione! Perferendis fugit inventore earum beatae voluptas suscipit, sequi ipsa molestiae illum voluptatem sit voluptatum, repellendus quasi magnam expedita, minima eius obcaecati cum! Eligendi quis saepe nemo quam necessitatibus ipsam, itaque explicabo tempora, voluptas distinctio nihil exercitationem, nostrum nisi quo impedit repellendus inventore tempore velit? Corrupti, ut veritatis.</p>
      </div>  
      </section>
    </Layout>
  )
}