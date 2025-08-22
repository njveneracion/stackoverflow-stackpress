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

        if (!title || !content) {
            console.log("Title and content are required");
            return;
        }

        try {
            const result = await ctx.resolve('post-create', {
                profileId: data.id,
                title: title,
                content: content,
                tags: []
            })
            if (result) {
                console.log("Post created successfully", result);
                res.redirect('/create');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }
})
