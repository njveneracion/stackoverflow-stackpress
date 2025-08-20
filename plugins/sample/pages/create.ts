import { SessionPlugin } from "stackpress";
import { action } from "stackpress/server";

export default action.props(async function create({ req, res, ctx }) {
    const session = ctx.plugin<SessionPlugin>('session')
    const me = session.load(req)
    const data = await me.data()
    if (!data) {
        res.redirect('/auth/signin');
        return;
    }

    if (req.method === "POST") {
        const title = req.data.path("title", "");
        const content = req.data.path("content", "");
        const tags = req.data.path("tags", "").split(',').map(tag => tag.trim());

        console.log("Title:", title);
        console.log("Content:", content);
        console.log("Tags:", tags);

        const result = await ctx.resolve('post-create', {
            profileId: data.id,
            title: title,
            content: content,
            tags: tags
        })

        if (result.code === 200) {
            res.redirect(`/question`);
        }


    }
})
