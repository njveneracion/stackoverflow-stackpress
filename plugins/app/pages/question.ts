import { SessionPlugin } from "stackpress";
import { action } from "stackpress/server";



export default action.props(async function PostQuestion({ req, res, ctx }) {
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
        const tags = req.data.path("tags", "").split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag.length > 0);

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
                res.redirect('/');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    if (req.method === "GET") {
        const postId = req.data.path("id", "");
        const question = await ctx.resolve('post-detail', { id: postId });
        res.setResults(question);
        console.log("Post:", question);
    }
})
