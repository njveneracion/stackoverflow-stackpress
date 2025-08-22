import { SessionPlugin } from 'stackpress';
import { action } from 'stackpress/server';

export default action(async function HomePage(req, res, ctx) {
    const session = ctx.plugin<SessionPlugin>('session')
    const me = session.load(req)
    const data = await me.data()
    if (!data) {
        res.redirect('/auth/signin');
        return;
    }

    if (req.method === 'GET') {
        const posts = await ctx.resolve('post-search', { filter: { profileId: data.id } })
        res.setResults(posts)
        console.log("Posts:", posts)
    }
});
