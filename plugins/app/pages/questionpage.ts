import { SessionPlugin } from "stackpress";
import { action } from "stackpress/server";

export default action.props(async function getQuestionDetails({ req, res, ctx }) {
    const session = ctx.plugin<SessionPlugin>('session')
    const me = session.load(req)
    const data = await me.data()
    if (!data) {
        res.redirect('/auth/signin');
        return;
    }

    if (req.method === "GET") {
        const id = req.data.path('id', '');
        console.log(req.url)
        const question = await ctx.resolve('post-detail', { id: id });
        res.setResults(question);
        console.log("Post:", question);
    }
})
