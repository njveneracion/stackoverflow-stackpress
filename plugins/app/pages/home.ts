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
        const posts = await ctx.resolve('post-search', { filter: {} })
        res.setResults(posts)
        console.log("Posts:", posts)

        const getUserInfo = await ctx.resolve('profile-detail', { id: data.id });
        if (getUserInfo && typeof getUserInfo.results === 'object' && getUserInfo.results !== null && 'name' in getUserInfo.results) {
            console.log("User Info:", { getUserInfo: (getUserInfo.results as { name: string }).name });
        } else {
            console.log("User Info: unavailable");
        }
    }


});
